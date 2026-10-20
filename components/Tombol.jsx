import Link from "next/link";

const gaya = {
  utama: "bg-utama text-white hover:bg-utama-gelap shadow-xs",
  garis: "border border-garis bg-latar text-teks hover:border-utama hover:text-utama shadow-xs",
  bahaya: "border border-garis bg-latar text-bahaya hover:border-bahaya shadow-xs",
};

export default function Tombol({ href, varian = "utama", className = "", children, ...props }) {
  const kelas = `inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-150 active:scale-[0.98] ${gaya[varian]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={kelas}>
        {children}
      </Link>
    );
  }

  return (
    <button className={kelas} {...props}>
      {children}
    </button>
  );
}
