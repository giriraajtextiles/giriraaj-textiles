export default function Products() {
  return (
    <div className="bg-white text-[#111111] font-[family-name:var(--font-mono)] selection:bg-[#FFB703] selection:text-[#111111]">
      <section className="bg-white border-b border-gray-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-plex)] font-bold tracking-tight mb-4 text-[#111111]">
            Our Products
          </h1>
          <p className="text-lg font-medium max-w-2xl text-gray-600 font-[family-name:var(--font-plex)]">
            High-tenacity yarns and threads engineered for industrial packaging lines. 
            Built to eliminate needle heat, thread snapping, and downtime.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-8 space-y-20">
        
        {/* Product 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-[family-name:var(--font-plex)] font-bold mb-4">Bag Closing Thread</h2>
            <p className="text-gray-600 font-medium mb-8 leading-relaxed font-[family-name:var(--font-plex)]">
              Spun polyester thread with a proprietary silicone lubrication coat. Eliminates needle heat on high-speed portable and static sewing heads. 100% knotless winding.
            </p>
            <div className="border border-gray-200">
              <div className="bg-[#F8F8F8] font-bold text-xs uppercase tracking-widest text-gray-500 p-4 border-b border-gray-200">
                Technical Specs
              </div>
              <div className="p-4 grid grid-cols-2 gap-y-4 text-sm font-medium">
                <div className="text-gray-500">Material</div><div>100% Spun Polyester</div>
                <div className="text-gray-500">Counts</div><div>12s/4, 12s/5, 20s/6</div>
                <div className="text-gray-500">Tensile</div><div>{">"} 6.5 g/d</div>
                <div className="text-gray-500">Cone Sizes</div><div>1kg, 2kg, 5kg (Knotless)</div>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F8F8] aspect-square flex items-center justify-center border border-gray-200 relative overflow-hidden">
             {/* Simple geometric representation of a spool */}
             <div className="w-32 h-48 bg-white border border-gray-300 relative shadow-sm">
                <div className="absolute top-0 inset-x-0 h-4 bg-gray-200 border-b border-gray-300"></div>
                <div className="absolute bottom-0 inset-x-0 h-4 bg-gray-200 border-t border-gray-300"></div>
                <div className="absolute inset-y-0 inset-x-4 bg-gray-100 flex items-center justify-center">
                   <div className="w-1 h-full bg-gray-300/50"></div>
                </div>
             </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1 bg-[#F8F8F8] aspect-square flex items-center justify-center border border-gray-200 relative overflow-hidden">
             {/* Simple geometric representation of thick yarn */}
             <div className="w-full h-full flex flex-col justify-center gap-1 p-12 opacity-50">
                <div className="h-4 bg-gray-300 w-full transform -skew-y-3"></div>
                <div className="h-4 bg-gray-300 w-full transform -skew-y-3"></div>
                <div className="h-4 bg-gray-300 w-full transform -skew-y-3"></div>
             </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-[family-name:var(--font-plex)] font-bold mb-4">FIBC Sewing Yarn</h2>
            <p className="text-gray-600 font-medium mb-8 leading-relaxed font-[family-name:var(--font-plex)]">
              Heavy-duty multifilament polypropylene and polyester yarn specifically designed for Jumbo Bags (FIBC). Engineered for massive load-bearing capacity and UV resistance.
            </p>
            <div className="border border-gray-200">
              <div className="bg-[#F8F8F8] font-bold text-xs uppercase tracking-widest text-gray-500 p-4 border-b border-gray-200">
                Technical Specs
              </div>
              <div className="p-4 grid grid-cols-2 gap-y-4 text-sm font-medium">
                <div className="text-gray-500">Material</div><div>High Tenacity PP / PES</div>
                <div className="text-gray-500">Denier</div><div>1000D to 4000D</div>
                <div className="text-gray-500">Treatment</div><div>Anti-UV Coat Available</div>
                <div className="text-gray-500">Compliance</div><div>Food Safe (FDA) Option</div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
