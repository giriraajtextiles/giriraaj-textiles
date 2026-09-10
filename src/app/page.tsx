import Link from "next/link";
import { SiteChrome, display, shell, themeClasses } from "@/components/site/chrome";
import { Hero } from "@/components/site/hero";
import { ProductCoverImage } from "@/components/site/product-image";
import { yarnLines } from "@/lib/products";

export default function HomePage() {
  const t = themeClasses("dark");

  return (
    <SiteChrome active="home">
      <Hero />

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
              <Link
                key={line.id}
                href={`/products/${line.id}`}
                className={`group overflow-hidden border no-underline transition-colors ${t.card}`}
              >
                <ProductCoverImage
                  src={line.coverImage}
                  alt={line.coverAlt}
                  lineId={line.id}
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
              </Link>
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
          <Link
            href="/about"
            className={`${display} shrink-0 text-sm font-semibold uppercase tracking-wider ${t.link}`}
          >
            About us
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}
