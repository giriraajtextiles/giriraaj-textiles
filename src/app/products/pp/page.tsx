import type { Metadata } from "next";
import {
  PageHeader,
  SiteChrome,
  SpecList,
  display,
  shell,
} from "@/components/site/chrome";
import { ProductReferenceImage } from "@/components/site/product-image";
import { polypropylenePhotos, yarnLines } from "@/lib/products";
import { WA_PP } from "@/lib/site";

const line = yarnLines.find((l) => l.id === "pp")!;

export const metadata: Metadata = {
  title: "Polypropylene yarn",
  description:
    "Polypropylene yarn for woven sack bag closing. Specifications on enquiry. Giriraaj Textiles, Beawar, Rajasthan.",
};

export default function PolypropylenePage() {
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
            Closing yarn for open-mouth woven sacks and industrial bags. Full
            technical specifications shared on enquiry.
          </p>

          <a
            href={WA_PP}
            className={`${display} mt-12 inline-flex min-h-12 items-center bg-white px-8 text-sm font-semibold uppercase tracking-wider text-neutral-950 no-underline`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire on polypropylene yarn
          </a>
        </div>

        <aside>
          <p className={`${display} text-xs tracking-[0.15em] text-white/40`}>
            REFERENCE
          </p>
          <figure className="m-0 mt-4">
            <ProductReferenceImage
              src={polypropylenePhotos[0].src}
              alt={polypropylenePhotos[0].alt}
              lineId="pp"
            />
          </figure>
        </aside>
      </section>
    </SiteChrome>
  );
}
