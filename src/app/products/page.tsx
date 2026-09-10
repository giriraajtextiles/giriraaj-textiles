import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, SiteChrome, display, shell } from "@/components/site/chrome";
import { ProductCoverImage } from "@/components/site/product-image";
import { yarnLines } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Polyester yarn and polypropylene yarn for industrial bag closing. 3-ply counts 10, 12, and 15. Beawar, Rajasthan.",
};

export default function ProductsPage() {
  return (
    <SiteChrome active="products">
      <PageHeader eyebrow="PRODUCTS" title="Yarn lines">
        <p>
          Polyester yarn and polypropylene yarn for industrial bag closing.
          Select a line for specifications and enquiry.
        </p>
      </PageHeader>

      <section className={`${shell} py-16 sm:py-20`}>
        <div className="grid gap-px bg-white/10 sm:grid-cols-2">
          {yarnLines.map((line) => (
            <Link
              key={line.id}
              href={`/products/${line.id}`}
              className="group overflow-hidden bg-neutral-950 no-underline"
            >
              <ProductCoverImage
                src={line.coverImage}
                alt={line.coverAlt}
                lineId={line.id}
              />
              <div className="p-8 sm:p-10">
                <h2 className={`${display} text-3xl font-bold uppercase text-white`}>
                  {line.name}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {line.summary}
                </p>
                <ul className="mt-6 space-y-1.5 text-sm text-white/50">
                  {line.specs.slice(0, 3).map((s) => (
                    <li key={s.label}>
                      <span className="text-white/35">{s.label}</span>{" "}
                      <span className="text-white/75">{s.value}</span>
                    </li>
                  ))}
                </ul>
                <span
                  className={`${display} mt-8 inline-block text-sm font-semibold uppercase tracking-wider text-white underline underline-offset-4`}
                >
                  Full specifications →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}
