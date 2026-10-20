import Link from "next/link";
import { toko } from "@/lib/toko";

export default function Header() {
  const inisial = toko.nama.trim().charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-40 border-b border-garis bg-latar/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:py-3.5">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-utama font-extrabold text-base text-white shadow-xs transition-transform duration-200 group-hover:scale-105">
            {inisial}
          </span>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-teks transition-colors group-hover:text-utama sm:text-lg">
              {toko.nama}
            </span>
            <span className="hidden -mt-0.5 text-[11px] font-medium text-teks-lembut sm:inline-block">
              Katalog Resmi UMKM
            </span>
          </div>
        </Link>

        <a
          href={`https://wa.me/${toko.nomorWhatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-garis bg-permukaan px-3 py-1.5 text-xs font-semibold text-teks transition-all duration-150 hover:border-utama hover:text-utama active:scale-95"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-utama opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-utama"></span>
          </span>
          <span>Pesan via WA</span>
        </a>
      </div>
    </header>
  );
}
