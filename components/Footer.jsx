import Link from "next/link";
import { toko } from "@/lib/toko";

export default function Footer() {
  const inisial = toko.nama.trim().charAt(0).toUpperCase();

  return (
    <footer className="mt-16 border-t border-garis bg-permukaan">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:flex-row sm:justify-between sm:py-12">
        <div className="max-w-sm space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-utama font-extrabold text-xs text-white">
              {inisial}
            </span>
            <p className="font-extrabold text-base text-teks">{toko.nama}</p>
          </div>
          <p className="text-xs leading-relaxed text-teks-lembut">{toko.tagline}</p>
          <div className="space-y-1.5 pt-1 text-xs text-teks-lembut">
            <p className="flex items-start gap-2">
              <span className="shrink-0 text-utama font-semibold">📍</span>
              <span>{toko.alamat}</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="shrink-0 text-utama font-semibold">🕒</span>
              <span>{toko.jamBuka}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-teks">Akses Cepat</p>
          <Link href="/" className="text-teks-lembut transition-colors hover:text-utama">
            Katalog Produk
          </Link>
          <a
            href={`https://wa.me/${toko.nomorWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teks-lembut transition-colors hover:text-utama"
          >
            Hubungi Penjual via WhatsApp
          </a>
          <Link
            href="/admin"
            className="pt-2 text-xs text-teks-lembut underline underline-offset-4 transition-colors hover:text-utama"
          >
            Masuk sebagai admin
          </Link>
        </div>
      </div>

      <div className="border-t border-garis/80 py-4">
        <div className="mx-auto max-w-5xl px-4 text-center text-xs text-teks-lembut">
          &copy; {new Date().getFullYear()} {toko.nama}. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
