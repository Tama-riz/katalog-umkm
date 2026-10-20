import Link from "next/link";
import { formatRupiah } from "@/lib/format";

export default function KartuProduk({ produk }) {
  return (
    <Link
      href={`/produk/${produk.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-garis bg-latar transition-all duration-300 hover:-translate-y-1 hover:border-utama/50 hover:shadow-lg"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-permukaan">
        <img
          src={produk.foto_url}
          alt={produk.nama}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute top-2.5 left-2.5 rounded-full border border-garis/60 bg-latar/90 px-2.5 py-0.5 text-[11px] font-semibold text-teks shadow-xs backdrop-blur-xs">
          {produk.kategori}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3.5 sm:p-4">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-teks transition-colors group-hover:text-utama sm:text-base">
          {produk.nama}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-1">
          <span className="rounded-lg bg-harga-latar px-2.5 py-1 text-xs font-extrabold text-harga sm:text-sm">
            {formatRupiah(produk.harga)}
          </span>
          <span className="inline-flex items-center text-xs font-semibold text-utama opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Detail →
          </span>
        </div>
      </div>
    </Link>
  );
}
