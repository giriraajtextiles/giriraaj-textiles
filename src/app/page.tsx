"use client";
import { useState } from "react";

export default function Home() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#111111] font-[family-name:var(--font-mono)] selection:bg-[#FFB703] selection:text-[#111111]">
      
      {/* Serious, simple Navbar */}
      <nav className="border-b border-gray-200 px-8 py-6 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold font-[family-name:var(--font-plex)] tracking-tight text-[#111111]">
            Giriraaj Textiles
          </div>
          {/* Order Sample link removed to eliminate redundancy */}
        </div>
      </nav>

      {/* Corporate B2B Hero */}
      <section className="bg-white border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-8 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-plex)] font-bold tracking-tight leading-[1.15] mb-6 text-[#111111]">
              Industrial bag closing thread
            </h1>
            <p className="text-lg font-medium max-w-lg mb-10 text-gray-600 leading-relaxed font-[family-name:var(--font-plex)]">
              Heavy-duty spun polyester thread engineered to withstand 2000+ RPM machines and extreme supply chain abuse. Built for reliability where line stoppages cost money.
            </p>
          </div>

          {/* Clean, refined Form Component */}
          <div id="sample" className="bg-[#F8F8F8] border border-gray-200 p-8 md:p-10 relative">
            <h2 className="text-2xl font-[family-name:var(--font-plex)] font-bold mb-2">Request Sample Spool</h2>
            <p className="font-medium text-gray-500 mb-8 text-sm font-[family-name:var(--font-plex)]">Test our breaking strength on your equipment.</p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">Company Name</label>
                <input type="text" className="w-full border border-gray-300 bg-white p-3 text-sm focus:outline-none focus:border-[#FFB703] focus:ring-1 focus:ring-[#FFB703] transition-all" placeholder="e.g. Ultratech Cement" />
              </div>
              <div>
                <label className="block font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">Machine Type</label>
                <select className="w-full border border-gray-300 bg-white p-3 text-sm focus:outline-none focus:border-[#FFB703] focus:ring-1 focus:ring-[#FFB703] transition-all appearance-none">
                  <option>Newlong Industrial</option>
                  <option>Union Special</option>
                  <option>Fischbein</option>
                  <option>Other / Portable</option>
                </select>
              </div>
              <button 
                className="w-full font-[family-name:var(--font-plex)] font-bold text-base uppercase tracking-wide py-4 mt-4 bg-[#FFB703] text-[#111111] hover:bg-[#E5A400] transition-colors"
              >
                Send My Sample
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Technical Data Section */}
      <main className="max-w-7xl mx-auto px-8 py-24">
        <header className="mb-12">
          <h2 className="text-4xl md:text-4xl font-[family-name:var(--font-plex)] font-bold tracking-tight">
            Engineered for reliability
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <p className="text-lg mb-10 max-w-3xl leading-relaxed text-gray-600 font-[family-name:var(--font-plex)]">
              When sealing 50kg cement bags or bulk agricultural pulses at high speeds, thread failure halts the entire line. Our knotless spun polyester guarantees smooth operations.
            </p>

            {/* Restrained Interactive Spec Table */}
            <div className="border border-gray-200">
              <div className="bg-[#F8F8F8] text-gray-500 font-bold uppercase tracking-widest text-xs p-4 grid grid-cols-3 border-b border-gray-200">
                <div>Metric</div>
                <div>Value</div>
                <div className="hidden sm:block">Impact</div>
              </div>
              {[
                { metric: "Breaking Strength", value: "> 6.5 g/d", impact: "Zero burst on heavy impact." },
                { metric: "Elongation", value: "15-20%", impact: "Absorbs drop shock." },
                { metric: "Machine Speed", value: "2000+ RPM", impact: "Prevents line stoppage." },
                { metric: "Lubrication", value: "Silicone Treated", impact: "Eliminates needle heat." },
                { metric: "Knotless Spooling", value: "0 Knots", impact: "Zero thread jams." },
              ].map((row, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setHoveredRow(idx)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`grid grid-cols-2 sm:grid-cols-3 p-4 border-b last:border-b-0 border-gray-100 font-medium transition-colors cursor-default ${hoveredRow === idx ? 'bg-[#FAFAFA]' : 'bg-white'}`}
                >
                  <div className="text-gray-900">{row.metric}</div>
                  <div className="text-base font-bold">{row.value}</div>
                  <div className="text-sm hidden sm:block text-gray-500">{row.impact}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4">
            <div className="bg-[#F8F8F8] border border-gray-200 p-8">
              <h3 className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-6 border-b border-gray-200 pb-4">
                Compatible Equipment
              </h3>
              <ul className="space-y-4 text-sm font-medium text-gray-900">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div> Newlong Industrial</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div> Union Special</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div> Fischbein</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div> Yao Han</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Expanded Functional Footer */}
      <footer className="bg-[#111111] py-16 font-[family-name:var(--font-plex)] text-white">
         <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
           <div className="md:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Giriraaj Textiles</h2>
              <p className="text-gray-400 max-w-sm mb-6">
                Premium manufacturer of high-tenacity industrial bag closing thread for the cement, fertilizer, and agricultural sectors.
              </p>
           </div>
           
           <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Products</h3>
              <ul className="space-y-3 text-gray-300">
                 <li><a href="#" className="hover:text-white transition-colors">Bag Closing Thread</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">FIBC Sewing Thread</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Knotless Spools</a></li>
              </ul>
           </div>

           <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Company</h3>
              <ul className="space-y-3 text-gray-300">
                 <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
           </div>
         </div>
         
         <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/10 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Giriraaj Textiles. All rights reserved.</p>
         </div>
      </footer>
    </div>
  );
}
