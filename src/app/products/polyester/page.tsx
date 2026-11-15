import type { Metadata } from "next";
import {
  PageHeader,
  SiteChrome,
  SpecList,
  display,
  shell,
} from "@/components/site/chrome";
import { ProductReferenceImage } from "@/components/site/product-image";
import { polyesterPhotos, yarnLines } from "@/lib/products";
import { WA_POLYESTER } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

const line = yarnLines.find((l) => l.id === "polyester")!;

export const metadata: Metadata = {
  title: "Polyester yarn",
  description:
    "3-ply polyester yarn for bag closing. Counts 10, 12, and 15. Recycled and virgin. MOQ 1,000 cones. Giriraaj Textiles, Beawar.",
  ...pageMeta("/products/polyester"),
};

export default function PolyesterPage() {
  return (
    <SiteChrome active="products">
      <PageHeader title={line.name}>
        <p>{line.summary}</p>
      </PageHeader>

      <section
        className={`${shell} grid gap-12 pt-10 pb-16 sm:grid-cols-[1fr_16rem] sm:pt-12 sm:pb-24`}
      >
        <div>
          <h2 className={`${display} text-xl font-bold uppercase`}>
            Specifications
          </h2>
          <div className="mt-6">
            <SpecList specs={line.specs} />
          </div>

          <h2 className={`${display} mt-12 text-xl font-bold uppercase`}>
            Applications
          </h2>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-white/60">
            For bag-closing machines on HDPE and woven sack lines. Compatible
            with standard industrial closers. Additional colours available on
            request.
          </p>

          <a
            href={WA_POLYESTER}
            className={`${display} press mt-12 inline-flex min-h-12 items-center bg-white px-8 text-sm font-semibold uppercase tracking-wider text-neutral-950 no-underline`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire on polyester
          </a>
        </div>

        <aside>
          <p className={`${display} text-xs tracking-[0.15em] text-white/60`}>
            SAMPLE COLOURS
          </p>
          <div className="mt-4 space-y-3">
            {polyesterPhotos.map((p) => (
              <figure key={p.src} className="m-0">
                <ProductReferenceImage
                  src={p.src}
                  alt={p.alt}
                  lineId="polyester"
                />
                <figcaption className="mt-1.5 flex justify-between text-xs text-white/60">
                  <span>{p.label}</span>
                  <span>{p.count} count</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/60">
            Photos are reference samples, not a full catalogue.
          </p>
        </aside>
      </section>
    </SiteChrome>
  );
}
