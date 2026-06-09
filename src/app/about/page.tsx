export default function About() {
  return (
    <div className="bg-white text-[#111111] font-[family-name:var(--font-plex)] selection:bg-[#FFB703] selection:text-[#111111]">
      <section className="bg-white border-b border-gray-200 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#111111]">
            About Giriraaj Textiles
          </h1>
          <p className="text-xl font-medium text-gray-600 leading-relaxed mb-12">
            For decades, Giriraaj Textiles has engineered the critical infrastructure that keeps industrial supply chains moving. We manufacture the thread that seals the bags that build the world.
          </p>

          <div className="border-l-4 border-[#FFB703] pl-6 py-2 mb-16">
            <p className="text-2xl font-bold italic text-gray-900">
              "A broken thread on a 50kg cement bag isn't just a spill. It's a halted production line, a safety hazard, and lost margin."
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Manufacturing Standards</h2>
              <p className="text-gray-600 leading-relaxed">
                Operating out of state-of-the-art facilities in India, our production lines utilize advanced European winding and spinning technologies. We focus on zero-tolerance manufacturing: zero knots per cone, exact denier consistency, and precisely applied silicone lubrication to prevent needle heat at 2000+ RPM.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Quality Control (QC)</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every batch of yarn undergoes strict digital tensometer testing to ensure breaking strength exceeds 6.5 g/d. We do not ship thread that fails our stress impact tests.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#F8F8F8] border border-gray-200 p-6 text-center">
                   <div className="text-3xl font-bold font-[family-name:var(--font-mono)] text-[#FFB703] mb-2">100%</div>
                   <div className="text-sm font-bold uppercase tracking-widest text-gray-500">Knotless Spools</div>
                </div>
                <div className="bg-[#F8F8F8] border border-gray-200 p-6 text-center">
                   <div className="text-3xl font-bold font-[family-name:var(--font-mono)] text-[#FFB703] mb-2">2000+</div>
                   <div className="text-sm font-bold uppercase tracking-widest text-gray-500">RPM Rated</div>
                </div>
                <div className="bg-[#F8F8F8] border border-gray-200 p-6 text-center">
                   <div className="text-3xl font-bold font-[family-name:var(--font-mono)] text-[#FFB703] mb-2">6.5+</div>
                   <div className="text-sm font-bold uppercase tracking-widest text-gray-500">g/d Tenacity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
