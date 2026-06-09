"use client";
import { useState } from "react";

export default function Caterpillar3() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans">
      {/* High Impact Yellow Hero */}
      <section className="bg-[#FFB703] border-b-[8px] border-[#1a1a1a] relative overflow-hidden">
        {/* Background industrial pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#1a1a1a 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-8 py-24 md:py-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-[#1a1a1a] text-white font-bold px-4 py-1 uppercase tracking-widest text-sm mb-6">
              Industrial Packaging Division
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8 text-[#1a1a1a]">
              NEVER STOP <br/>
              <span className="text-white" style={{ textShadow: '2px 2px 0 #1a1a1a, -2px -2px 0 #1a1a1a, 2px -2px 0 #1a1a1a, -2px 2px 0 #1a1a1a' }}>THE LINE.</span>
            </h1>
            <p className="text-2xl font-bold max-w-lg mb-8 text-[#1a1a1a]">
              Heavy-duty bag closing thread built to withstand 2000+ RPM machines and extreme supply chain abuse.
            </p>
          </div>

          {/* Action-Oriented Form Component */}
          <div className="bg-white border-4 border-[#1a1a1a] p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(26,26,26,1)]">
            <h2 className="text-3xl font-black uppercase mb-2">Request Sample Spool</h2>
            <p className="font-medium text-gray-500 mb-8">Prove our breaking strength on your own equipment.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-bold uppercase text-sm mb-2">Company Name</label>
                <input type="text" className="w-full border-2 border-[#1a1a1a] p-3 focus:outline-none focus:border-[#FFB703] transition-colors" placeholder="e.g. Ultratech Cement" />
              </div>
              <div>
                <label className="block font-bold uppercase text-sm mb-2">Machine Type</label>
                <select className="w-full border-2 border-[#1a1a1a] p-3 focus:outline-none focus:border-[#FFB703] transition-colors bg-white">
                  <option>Newlong Industrial</option>
                  <option>Union Special</option>
                  <option>Fischbein</option>
                  <option>Other / Portable</option>
                </select>
              </div>
              <button 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`w-full font-black text-xl uppercase py-4 border-4 border-[#1a1a1a] transition-all duration-300 ${isHovered ? 'bg-[#1a1a1a] text-[#FFB703] translate-y-1 shadow-none' : 'bg-[#FFB703] text-[#1a1a1a] shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]'}`}
              >
                Send My Sample
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3 Stark Value Props */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t-4 border-[#FFB703] pt-16">
            <div>
              <div className="text-[#FFB703] text-6xl font-black mb-6">01</div>
              <h3 className="text-2xl font-black uppercase mb-4">Unbreakable <br/> Tensile Strength</h3>
              <p className="text-gray-400 font-medium">Over 6.5 g/d tenacity ensures cement and 50kg pulse bags survive loading impacts without stitching failure.</p>
            </div>
            <div>
              <div className="text-[#FFB703] text-6xl font-black mb-6">02</div>
              <h3 className="text-2xl font-black uppercase mb-4">High-Speed <br/> Heat Resistant</h3>
              <p className="text-gray-400 font-medium">Silicone lubrication prevents needle friction heat buildup, preventing thread snaps at 2000+ RPM speeds.</p>
            </div>
            <div>
              <div className="text-[#FFB703] text-6xl font-black mb-6">03</div>
              <h3 className="text-2xl font-black uppercase mb-4">Knotless <br/> Efficiency</h3>
              <p className="text-gray-400 font-medium">Precision-wound spools guarantee zero knots per cone, meaning zero jams in your automated sewing heads.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
