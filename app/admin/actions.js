"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";

export async function login(prevStateOrFormData, formData) {
  let data;
  if (formData instanceof FormData) {
    data = formData;
  } else if (prevStateOrFormData instanceof FormData) {
    data = prevStateOrFormData;
  } else {
    data = formData;
  }

  const email = data?.get("email")?.toString().trim();
  const password = data?.get("password")?.toString();

  if (!email || !password) {
    return { error: "Email dan password wajib diisi." };
  }

  const supabase = await createAdminClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      error:
        error.message === "Invalid login credentials"
          ? "Email atau password salah."
          : error.message || "Gagal masuk. Periksa kembali data Anda.",
    };
  }

  redirect("/admin");
}

export async function logout() {
  const supabase = await createAdminClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function gantiPassword(prevStateOrFormData, formData) {
  let data;
  if (formData instanceof FormData) {
    data = formData;
  } else if (prevStateOrFormData instanceof FormData) {
    data = prevStateOrFormData;
  } else {
    data = formData;
  }

  const passwordBaru = data?.get("password_baru")?.toString();
  const konfirmasiPassword = data?.get("konfirmasi_password")?.toString();

  // Validasi di server
  if (!passwordBaru || !konfirmasiPassword) {
    return { error: "Password baru dan konfirmasi password wajib diisi." };
  }

  if (passwordBaru.length < 8) {
    return { error: "Password baru minimal 8 karakter." };
  }

  if (passwordBaru !== konfirmasiPassword) {
    return { error: "Konfirmasi password tidak sama dengan password baru." };
  }

  // Wajib periksa bahwa admin sudah login di server
  const supabase = await createAdminClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { error: "Sesi login tidak valid. Silakan login kembali." };
  }

  const { error: updateError } = await supabase.auth.updateUser({
    password: passwordBaru,
  });

  if (updateError) {
    return {
      error: updateError.message || "Gagal mengganti password.",
    };
  }

  return { success: "Password berhasil diganti." };
}

export async function tambahProduk(formData) {
  // Wajib periksa bahwa admin sudah login di server (Aturan keamanan #3)
  const supabase = await createAdminClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("Aksi ditolak: Anda harus login sebagai admin.");
  }

  const nama = formData.get("nama")?.toString().trim();
  const harga = parseInt(formData.get("harga")?.toString() || "0", 10);
  const kategori = formData.get("kategori")?.toString().trim() || null;
  const foto_url = formData.get("foto_url")?.toString().trim() || null;
  const deskripsi = formData.get("deskripsi")?.toString().trim() || null;

  if (!nama) {
    throw new Error("Nama produk wajib diisi.");
  }

  const { error } = await supabase.from("produk").insert({
    nama,
    harga,
    kategori,
    foto_url,
    deskripsi,
  });

  if (error) {
    throw new Error(`Gagal menyimpan produk: ${error.message}`);
  }

  revalidatePath("/admin");
  revalidatePath("/");
  redirect("/admin");
}
