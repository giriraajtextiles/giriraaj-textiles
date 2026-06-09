import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] py-16 font-[family-name:var(--font-plex)] text-white">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-tight mb-4 inline-block">Giriraaj Textiles</Link>
          <p className="text-gray-400 max-w-sm mb-6">
            Premium manufacturer of high-tenacity industrial bag closing thread for the cement, fertilizer, and agricultural sectors.
          </p>
        </div>
        
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Products</h3>
          <ul className="space-y-3 text-gray-300">
             <li><Link href="/products" className="hover:text-white transition-colors">Bag Closing Thread</Link></li>
             <li><Link href="/products" className="hover:text-white transition-colors">FIBC Sewing Thread</Link></li>
             <li><Link href="/products" className="hover:text-white transition-colors">Knotless Spools</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Company</h3>
          <ul className="space-y-3 text-gray-300">
             <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
             <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
             <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
             <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/10 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
         <p>&copy; {new Date().getFullYear()} Giriraaj Textiles. All rights reserved.</p>
      </div>
    </footer>
  );
}
