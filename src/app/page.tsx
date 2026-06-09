export default function ConceptsNavigator() {
  const concepts = [
    { name: "02 - Textile Architecture", path: "/concepts/02-textile-architecture.html", status: "Live" },
    { name: "04 - Manufacturing Poetry", path: "/concepts/04-manufacturing-poetry.html", status: "Live" },
    { name: "06 - National Infrastructure", path: "/concepts/06-national-infrastructure.html", status: "Live" },
    { name: "08 - Warehouse Modernism", path: "/concepts/08-warehouse-modernism.html", status: "Live" },
    { name: "11 - Monolithic Typography", path: "/concepts/11-monolithic-typography.html", status: "Live" },
    { name: "12 - Product as Hero", path: "/concepts/12-product-as-hero.html", status: "Live" }
  ];

  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 font-sans p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 border-b-2 border-stone-900 pb-8">
          <h1 className="text-4xl font-black mb-4">Concepts Navigator</h1>
          <p className="text-xl text-stone-600">Browse the live structural concepts.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {concepts.map((c) => (
            <a 
              key={c.path} 
              href={c.status === "Live" ? c.path : "#"}
              className={`block bg-white border p-6 transition-colors ${
                c.status === "Live" 
                  ? "border-stone-300 hover:border-stone-900 hover:shadow-lg" 
                  : "border-stone-200 opacity-60 cursor-not-allowed"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold">{c.name}</h2>
                <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 ${
                  c.status === "Live" ? "bg-green-100 text-green-800" : "bg-stone-200 text-stone-500"
                }`}>
                  {c.status}
                </span>
              </div>
              <p className="text-stone-500 text-sm font-mono">Route: {c.path}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
