import type { Metadata } from "next";
import Image from "next/image";
import {
  PageHeader,
  SiteChrome,
  SpecList,
  display,
  shell,
} from "@/components/site/chrome";
import { polyesterPhotos, yarnLines } from "@/lib/products";
import { WA_POLYESTER } from "@/lib/site";

const line = yarnLines.find((l) => l.id === "polyester")!;

export const metadata: Metadata = {
  title: "Polyester yarn",
  description:
    "3-ply polyester yarn for bag closing. Counts 10, 12, and 15. Recycled and virgin. MOQ 1,000 cones. Giriraaj Textiles, Beawar.",
};

export default function PolyesterPage() {
  return (
    <SiteChrome active="products">
      <PageHeader eyebrow="PRODUCTS" title={line.name}>
        <p>{line.summary}</p>
      </PageHeader>

      <section
        className={`${shell} grid gap-12 py-16 sm:grid-cols-[1fr_16rem] sm:py-20`}
      >
        <div>
          <h2 className={`${display} text-lg font-bold uppercase`}>
            Specifications
          </h2>
          <div className="mt-6">
            <SpecList specs={line.specs} />
          </div>

          <h2 className={`${display} mt-12 text-lg font-bold uppercase`}>
            Applications
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            For bag-closing machines on HDPE and woven sack lines. Compatible
            with standard industrial closers. Additional colours available on
            request.
          </p>

          <a
            href={WA_POLYESTER}
            className={`${display} mt-12 inline-flex min-h-12 items-center bg-white px-8 text-sm font-semibold uppercase tracking-wider text-neutral-950 no-underline`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire on polyester
          </a>
        </div>

        <aside>
          <p className={`${display} text-xs tracking-[0.15em] text-white/40`}>
            SAMPLE COLOURS
          </p>
          <div className="mt-4 space-y-3">
            {polyesterPhotos.map((p) => (
              <figure key={p.src} className="m-0">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="object-cover opacity-80"
                    sizes="256px"
                  />
                </div>
                <figcaption className="mt-1.5 flex justify-between text-xs text-white/50">
                  <span>{p.label}</span>
                  <span>{p.count} count</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/35">
            Photos are reference samples, not a full catalogue.
          </p>
        </aside>
      </section>
    </SiteChrome>
  );
}
