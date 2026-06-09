import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 px-8 py-6 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold font-[family-name:var(--font-plex)] tracking-tight text-[#111111]">
          Giriraaj Textiles
        </Link>
      </div>
    </nav>
  );
}
