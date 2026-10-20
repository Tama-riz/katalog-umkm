// US-03: tombol ini belum berfungsi.
// Tugas peserta: buka WhatsApp toko dengan pesan otomatis berisi nama dan harga produk.
export default function TombolWhatsApp({ produk }) {
  return (
    <button
      type="button"
      className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-utama px-6 py-3.5 font-bold text-white shadow-xs transition-all duration-200 hover:bg-utama-gelap hover:shadow-md active:scale-[0.98] sm:w-auto"
    >
      <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.45 1.744 1.708 2.864 1.258 1.12 1.637.838 1.873.74.237-.098.761-.311.87-.614.108-.303.108-.564.076-.622-.032-.058-.12-.093-.252-.158z" />
      </svg>
      <span>Pesan via WhatsApp</span>
    </button>
  );
}
