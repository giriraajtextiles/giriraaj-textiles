"use client";
import { useState } from "react";

export default function Caterpillar2() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F4F4F5] text-[#18181B] font-sans">
      {/* Utility Nav */}
      <nav className="border-b-2 border-[#18181B] px-8 py-4 flex justify-between items-center bg-white">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[#FFB703] border-2 border-[#18181B]"></div>
          <div className="text-xl font-black uppercase tracking-tight">Giriraaj Technical</div>
        </div>
        <button className="bg-[#18181B] text-white font-bold px-6 py-2 hover:bg-[#FFB703] hover:text-[#18181B] transition-colors border-2 border-[#18181B]">
          ORDER SAMPLE SPOOL
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-16">
        <header className="mb-16 border-b-4 border-[#18181B] pb-8">
          <div className="text-[#FFB703] font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FFB703] inline-block"></span>
            Technical Specification Sheet
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Industrial Bag <br/> Closing Thread
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <div className="bg-white border-2 border-[#18181B] p-8 md:p-12 mb-8 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] relative overflow-hidden">
              {/* Decorative engineering marks */}
              <div className="absolute top-0 right-0 w-16 h-16 border-l-2 border-b-2 border-[#18181B] bg-[#FFB703]"></div>
              
              <h2 className="text-3xl font-black uppercase mb-6">Engineered for Reliability</h2>
              <p className="text-lg font-medium mb-8 max-w-2xl">
                When you are sealing 50kg cement bags or bulk agricultural pulses at 2000+ RPM, thread failure halts the entire line. Our spun polyester thread guarantees zero stoppages.
              </p>

              {/* Interactive Spec Table */}
              <div className="border-2 border-[#18181B] bg-[#F4F4F5]">
                <div className="bg-[#18181B] text-white font-bold uppercase text-sm p-4 grid grid-cols-3">
                  <div>Metric</div>
                  <div>Value</div>
                  <div>Impact</div>
                </div>
                {[
                  { metric: "Breaking Strength", value: "> 6.5 g/d", impact: "Zero burst on heavy impact." },
                  { metric: "Elongation", value: "15-20%", impact: "Absorbs drop shock." },
                  { metric: "Machine Speed", value: "2000+ RPM", impact: "Prevents line stoppage." },
                  { metric: "Lubrication", value: "Silicone Treated", impact: "Eliminates needle heat." },
                ].map((row, idx) => (
                  <div 
                    key={idx}
                    onMouseEnter={() => setHoveredRow(idx)}
                    onMouseLeave={() => setHoveredRow(null)}
                    className={`grid grid-cols-3 p-4 border-t border-[#18181B] font-medium transition-colors ${hoveredRow === idx ? 'bg-[#FFB703]' : ''}`}
                  >
                    <div className="font-bold">{row.metric}</div>
                    <div className="font-mono">{row.value}</div>
                    <div className="text-sm">{row.impact}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-[#18181B] text-white p-8 border-2 border-[#18181B]">
              <h3 className="text-[#FFB703] font-bold uppercase mb-4 text-xl">Compatible Equipment</h3>
              <ul className="space-y-4 font-mono text-sm border-l-2 border-[#FFB703] pl-4">
                <li>+ NEWLONG INDUSTRIAL</li>
                <li>+ UNION SPECIAL</li>
                <li>+ FISCHBEIN</li>
                <li>+ YAO HAN</li>
              </ul>
            </div>

            <div className="bg-[#FFB703] p-8 border-2 border-[#18181B] shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]">
              <h3 className="text-2xl font-black uppercase mb-4 text-[#18181B]">Get A Sample Spool</h3>
              <p className="font-medium text-sm mb-6 text-[#18181B]">
                Test our thread on your highest-speed line. We guarantee it won't snap.
              </p>
              <button className="w-full bg-[#18181B] text-white font-bold py-4 uppercase hover:bg-white hover:text-[#18181B] border-2 border-[#18181B] transition-colors">
                Request Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
