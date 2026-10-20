import Link from "next/link";
import { notFound } from "next/navigation";
import TombolWhatsApp from "@/components/TombolWhatsApp";
import CatatanBelumAktif from "@/components/CatatanBelumAktif";
import { cariProdukContoh } from "@/lib/data-contoh";
import { formatRupiah } from "@/lib/format";

// US-02: halaman ini masih memakai data contoh.
// Tugas peserta: ambil satu produk dari Supabase berdasarkan id, di sisi server.
export default async function HalamanDetailProduk({ params }) {
  const { id } = await params;
  const produk = cariProdukContoh(id);

  if (!produk) {
    notFound();
  }

  return (
    <article className="py-6 sm:py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teks-lembut transition-colors hover:text-utama mb-6"
      >
        <span>←</span> Kembali ke katalog
      </Link>

      <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-start">
        <div className="overflow-hidden rounded-3xl border border-garis bg-permukaan shadow-xs">
          <img
            src={produk.foto_url}
            alt={produk.nama}
            className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <span className="inline-block rounded-full border border-garis bg-permukaan px-3 py-1 text-xs font-semibold text-teks-lembut">
              {produk.kategori}
            </span>
            <h1 className="mt-2.5 text-2xl font-extrabold leading-tight tracking-tight text-teks sm:text-4xl">
              {produk.nama}
            </h1>
          </div>

          <div className="self-start rounded-xl bg-harga-latar px-4 py-2 text-2xl font-extrabold text-harga shadow-xs">
            {formatRupiah(produk.harga)}
          </div>

          <div className="rounded-2xl border border-garis bg-latar p-4 shadow-xs">
            <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-teks-lembut">
              Keterangan Produk
            </h3>
            <p className="max-w-prose leading-relaxed text-teks-lembut">{produk.deskripsi}</p>
          </div>

          <div className="flex flex-col gap-2.5 pt-1">
            <TombolWhatsApp produk={produk} />
            <CatatanBelumAktif>Tombol pesan belum berfungsi: lihat US-03.</CatatanBelumAktif>
          </div>

          <div className="mt-2 rounded-2xl border border-garis bg-permukaan/70 p-4 text-xs text-teks-lembut space-y-1.5 shadow-xs">
            <p className="font-bold text-teks">💬 Cara Pemesanan:</p>
            <p>1. Tekan tombol pesan WhatsApp di atas.</p>
            <p>2. Konfirmasikan jumlah pesanan & alamat pengiriman Anda.</p>
            <p>3. Pesanan langsung diproses oleh penjual.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
