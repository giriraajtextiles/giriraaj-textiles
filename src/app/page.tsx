import Link from 'next/link';

export default function ConceptsNavigator() {
  const concepts = [
    { name: "02 - Textile Architecture", path: "/concepts/textile-architecture", status: "Ported" },
    { name: "04 - Manufacturing Poetry", path: "/concepts/manufacturing-poetry", status: "Ported" },
    { name: "06 - National Infrastructure", path: "/concepts/national-infrastructure", status: "Ported" },
    { name: "08 - Warehouse Modernism", path: "/concepts/warehouse-modernism", status: "Ported" },
    { name: "11 - Monolithic Typography", path: "/concepts/monolithic-typography", status: "Ported" },
    { name: "12 - Product as Hero", path: "/concepts/product-as-hero", status: "Ported" }
  ];

  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 font-sans p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 border-b-2 border-stone-900 pb-8">
          <h1 className="text-4xl font-black mb-4">Concepts Navigator</h1>
          <p className="text-xl text-stone-600">Browse the live structural concepts ported to Next.js.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {concepts.map((c) => (
            <Link 
              key={c.path} 
              href={c.status === "Ported" ? c.path : "#"}
              className={`block bg-white border p-6 transition-colors ${
                c.status === "Ported" 
                  ? "border-stone-300 hover:border-stone-900 hover:shadow-lg" 
                  : "border-stone-200 opacity-60 cursor-not-allowed"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold">{c.name}</h2>
                <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 ${
                  c.status === "Ported" ? "bg-green-100 text-green-800" : "bg-stone-200 text-stone-500"
                }`}>
                  {c.status}
                </span>
              </div>
              <p className="text-stone-500 text-sm font-mono">Route: {c.path}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
