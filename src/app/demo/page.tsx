import Link from "next/link";
import { SiteChrome, display, shell, themeClasses } from "@/components/site/chrome";
import { Hero } from "@/components/site/hero";
import { ProductCoverImage } from "@/components/site/product-image";
import { yarnLines } from "@/lib/products";

export const metadata = {
  title: "Color demo",
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  const t = themeClasses("stone");

  return (
    <SiteChrome active="home" theme="stone">
      <div className="border-b border-amber-800/20 bg-amber-50 px-6 py-2 text-center text-xs text-amber-900 sm:px-10">
        Color demo — warm stone palette instead of black/white.{" "}
        <Link href="/" className="font-semibold underline">
          Back to live site
        </Link>
      </div>

      <Hero theme="stone" />

      <section className={`border-t py-20 sm:py-28 ${t.sectionBorder}`}>
        <div className={shell}>
          <p className={`${display} text-xs tracking-[0.2em] ${t.eyebrow}`}>
            YARN LINES
          </p>
          <h2 className={`${display} mt-3 text-3xl font-bold uppercase sm:text-4xl`}>
            What we manufacture
          </h2>
          <p className={`mt-4 max-w-lg ${t.body}`}>
            Two yarn lines for bag closing. Each has its own specifications and
            enquiry path.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {yarnLines.map((line) => (
              <div
                key={line.id}
                className={`group overflow-hidden border ${t.card}`}
              >
                <ProductCoverImage
                  src={line.coverImage}
                  alt={line.coverAlt}
                  lineId={line.id}
                  className={line.id === "pp" ? "bg-stone-200" : undefined}
                />
                <div className="p-8 sm:p-10">
                  <h3 className={`${display} text-2xl font-bold uppercase ${t.cardTitle}`}>
                    {line.name}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed ${t.body}`}>
                    {line.summary}
                  </p>
                  <span
                    className={`${display} mt-8 inline-block text-sm font-semibold uppercase tracking-wider ${t.link}`}
                  >
                    View details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`border-t py-16 sm:py-20 ${t.sectionBorder}`}>
        <div
          className={`${shell} flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between`}
        >
          <div>
            <p className={`${display} text-xs tracking-[0.2em] ${t.eyebrow}`}>
              MANUFACTURER
            </p>
            <p className={`mt-3 max-w-md ${t.body}`}>
              GST-registered in Beawar since 2025. Consistent monthly production
              with stock dispatching from Rajasthan.
            </p>
          </div>
          <span
            className={`${display} shrink-0 text-sm font-semibold uppercase tracking-wider ${t.link}`}
          >
            About us
          </span>
        </div>
      </section>
    </SiteChrome>
  );
}
