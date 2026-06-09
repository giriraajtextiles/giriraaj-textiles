"use client";
import { useState } from "react";

export default function Caterpillar1() {
  const [activeTab, setActiveTab] = useState("specs");

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans selection:bg-[#FFB703] selection:text-black">
      {/* Top Bar */}
      <nav className="border-b border-white/10 px-8 py-6 flex justify-between items-center bg-[#0a0a0a]">
        <div className="text-2xl font-black tracking-tighter text-[#FFB703]">GIRIRAAJ<span className="text-white">.IND</span></div>
        <button className="bg-[#FFB703] text-black font-bold px-6 py-2 hover:bg-white transition-colors duration-300">
          REQUEST SAMPLE SPOOL
        </button>
      </nav>

      <main>
        {/* Immersive Hero */}
        <section className="px-8 py-32 md:py-48 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
              Zero Line <br />
              <span className="text-[#FFB703]">Stoppages.</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium max-w-md mb-12">
              High-tenacity bag-closing thread engineered to withstand 2000+ RPM packaging lines. If it snaps, you lose money. Ours doesn't.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#FFB703] text-black font-bold px-8 py-4 text-lg hover:bg-white transition-colors duration-300">
                GET A SAMPLE SPOOL
              </button>
              <button className="border-2 border-white/20 font-bold px-8 py-4 text-lg hover:border-[#FFB703] hover:text-[#FFB703] transition-colors duration-300">
                VIEW TECH SPECS
              </button>
            </div>
          </div>
          
          <div className="relative">
            {/* Visual element simulating a heavy spool/machine part */}
            <div className="aspect-square bg-[#1a1a1a] border border-[#FFB703]/30 p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start text-[#FFB703] font-mono text-sm">
                <span>MODEL: PRO-TEX 12S/4</span>
                <span>STATUS: OPERATIONAL</span>
              </div>
              <div className="text-center">
                <div className="inline-block border-4 border-[#FFB703] p-12 rounded-full">
                   <div className="text-4xl font-black">2000+</div>
                   <div className="text-sm font-bold tracking-widest text-gray-400 mt-2">RPM RATED</div>
                </div>
              </div>
              <div className="font-mono text-sm text-gray-500 text-center">
                HEAVY DUTY BAG CLOSING YARN
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Data Section */}
        <section className="border-t border-white/10 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="flex border-b border-white/10">
              <button 
                onClick={() => setActiveTab("specs")}
                className={`flex-1 py-6 font-bold text-xl uppercase tracking-widest transition-colors ${activeTab === "specs" ? "bg-[#FFB703] text-black" : "text-gray-400 hover:text-white"}`}
              >
                Technical Metrics
              </button>
              <button 
                onClick={() => setActiveTab("compatibility")}
                className={`flex-1 py-6 font-bold text-xl uppercase tracking-widest transition-colors ${activeTab === "compatibility" ? "bg-[#FFB703] text-black" : "text-gray-400 hover:text-white"}`}
              >
                Machine Compatibility
              </button>
            </div>

            <div className="p-16 min-h-[400px]">
              {activeTab === "specs" ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div>
                    <div className="text-[#FFB703] font-mono mb-2">METRIC 01</div>
                    <div className="text-4xl font-black mb-4">6.5 g/d+</div>
                    <div className="text-gray-400">Extreme breaking strength ensures cement and heavy pulse bags survive multiple supply chain drops without bursting.</div>
                  </div>
                  <div>
                    <div className="text-[#FFB703] font-mono mb-2">METRIC 02</div>
                    <div className="text-4xl font-black mb-4">15-20%</div>
                    <div className="text-gray-400">Optimized elongation percentage absorbs shock-impact from heavy loading equipment.</div>
                  </div>
                  <div>
                    <div className="text-[#FFB703] font-mono mb-2">METRIC 03</div>
                    <div className="text-4xl font-black mb-4">UV Block</div>
                    <div className="text-gray-400">Specialized coating prevents degradation in outdoor storage yards and extreme weather.</div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-4xl font-black uppercase mb-6">Built for the Heaviest Iron.</h2>
                    <p className="text-gray-400 text-lg mb-8">Our knotless, silicone-treated thread flows flawlessly through industrial sewing heads, preventing needle heat build-up and thread snapping at maximum speeds.</p>
                    <ul className="space-y-4 font-mono">
                      <li className="flex items-center gap-4"><div className="w-2 h-2 bg-[#FFB703]"></div> Compatible with Newlong Industrial</li>
                      <li className="flex items-center gap-4"><div className="w-2 h-2 bg-[#FFB703]"></div> Compatible with Union Special</li>
                      <li className="flex items-center gap-4"><div className="w-2 h-2 bg-[#FFB703]"></div> Compatible with Fischbein</li>
                    </ul>
                  </div>
                  <div className="bg-[#111111] p-8 border border-white/10 font-mono text-sm text-[#FFB703]">
                    <p>{">"} INITIALIZING SYSTEM CHECK...</p>
                    <p className="text-white">{">"} FEED RATE: NOMINAL</p>
                    <p className="text-white">{">"} TENSION: OPTIMAL</p>
                    <p className="text-green-500">{">"} READY FOR PRODUCTION RUN</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
