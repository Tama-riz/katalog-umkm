import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

// Berkas ini adalah pengganti middleware.js di Next.js 16 (lihat AGENTS.md).
// Melindungi semua rute /admin kecuali /admin/login.

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  // Hanya jalankan perlindungan untuk rute /admin (kecuali /admin/login)
  if (!pathname.startsWith("/admin") || pathname === "/admin/login") {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  const supabase = createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Gunakan getUser() bukan getSession() — lebih aman karena memverifikasi token ke server
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};

