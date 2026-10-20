import KartuProduk from "@/components/KartuProduk";
import CatatanBelumAktif from "@/components/CatatanBelumAktif";
import { produkContoh } from "@/lib/data-contoh";
import { toko } from "@/lib/toko";

// US-01: halaman ini masih memakai data contoh.
// Tugas peserta: ambil daftar produk dari tabel "produk" di Supabase, di sisi server.
export default function HalamanKatalog() {
  const daftarProduk = produkContoh;

  return (
    <>
      {/* Banner / Hero Section */}
      <section className="relative my-6 overflow-hidden rounded-3xl border border-garis bg-gradient-to-b from-permukaan via-permukaan/50 to-latar p-6 sm:p-10 shadow-xs">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-garis bg-latar px-3.5 py-1 text-xs font-semibold text-utama shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-utama"></span>
            Katalog Resmi UMKM Lokal
          </div>

          <h1 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-teks sm:text-5xl">
            {toko.nama}
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-teks-lembut sm:text-lg">
            {toko.tagline}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-2.5 text-xs text-teks-lembut sm:text-sm">
            <div className="inline-flex items-center gap-1.5 rounded-xl border border-garis bg-latar px-3 py-1.5 shadow-xs">
              <svg className="h-4 w-4 text-utama" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{toko.jamBuka}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-xl border border-garis bg-latar px-3 py-1.5 shadow-xs">
              <svg className="h-4 w-4 text-utama" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{toko.alamat}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Tambah / Keunggulan */}
      <section className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="flex items-center gap-3 rounded-2xl border border-garis bg-latar p-4 transition-all duration-200 hover:border-utama/40 shadow-xs">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-permukaan text-utama font-bold">
            ✓
          </div>
          <div>
            <h4 className="text-sm font-bold text-teks">Produk Pilihan</h4>
            <p className="text-xs text-teks-lembut">Dibuat langsung oleh pengrajin</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-garis bg-latar p-4 transition-all duration-200 hover:border-utama/40 shadow-xs">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-permukaan text-utama font-bold">
            💬
          </div>
          <div>
            <h4 className="text-sm font-bold text-teks">Pesan Mudah</h4>
            <p className="text-xs text-teks-lembut">Langsung terhubung ke WhatsApp</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-garis bg-latar p-4 transition-all duration-200 hover:border-utama/40 shadow-xs">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-permukaan text-utama font-bold">
            ✨
          </div>
          <div>
            <h4 className="text-sm font-bold text-teks">Harga Terjangkau</h4>
            <p className="text-xs text-teks-lembut">Harga bersahabat dari produsen</p>
          </div>
        </div>
      </section>

      {/* Daftar Produk */}
      <section aria-labelledby="judul-produk" className="flex flex-col gap-5 pb-12">
        <div className="flex flex-col justify-between gap-1 border-b border-garis pb-3 sm:flex-row sm:items-end">
          <div>
            <h2 id="judul-produk" className="text-2xl font-bold tracking-tight text-teks">
              Katalog Produk
            </h2>
            <p className="text-xs text-teks-lembut">Pilih produk favorit Anda untuk dipesan via WhatsApp</p>
          </div>
          <span className="self-start text-xs font-semibold text-teks-lembut sm:self-auto">
            {daftarProduk.length} Produk Tersedia
          </span>
        </div>

        <CatatanBelumAktif>
          Masih data contoh. Sambungkan ke database: lihat US-01 di docs/user-stories.md.
        </CatatanBelumAktif>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {daftarProduk.map((produk) => (
            <KartuProduk key={produk.id} produk={produk} />
          ))}
        </div>
      </section>
    </>
  );
}
