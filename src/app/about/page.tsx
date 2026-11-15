import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader, SiteChrome, display, shell } from "@/components/site/chrome";
import { pageMeta } from "@/lib/seo";

const premisesPhotos = [
  { src: "/exterior2.webp", alt: "Giriraaj Textiles premises, Beawar" },
  { src: "/exterior1.webp", alt: "Giriraaj Textiles premises, Beawar" },
  { src: "/exterior3.webp", alt: "Giriraaj Textiles premises, Beawar" },
] as const;

export const metadata: Metadata = {
  title: "About",
  description:
    "Giriraaj Textiles is a yarn processor and supplier in Beawar, Rajasthan. GST-registered since 2025.",
  ...pageMeta("/about"),
};

export default function AboutPage() {
  return (
    <SiteChrome active="about">
      <PageHeader title="Giriraaj Textiles">
        <p>
          Yarn processor and supplier in Beawar, Rajasthan. Domestic supply
          across India; export through partners on enquiry.
        </p>
      </PageHeader>

      <section className={`${shell} pt-10 pb-16 sm:pt-12 sm:pb-24`}>
        <div className="max-w-2xl space-y-6 text-pretty leading-relaxed text-white/65">
          <p>
            Proprietorship under S Agarwal, GST-registered, processing yarn in
            Beawar since 2025. We supply 3-ply polyester yarn and polypropylene
            yarn for industrial bag lines.
          </p>
          <p>
            Consistent monthly supply. Stock is rewound onto cones in Beawar and
            dispatched from Rajasthan.
          </p>
        </div>

        <div className="-mx-6 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-1 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {premisesPhotos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[3/4] w-[72vw] shrink-0 snap-start overflow-hidden bg-neutral-900 sm:w-auto"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 72vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className={`${display} mt-10 inline-flex min-h-11 items-center text-sm font-semibold uppercase tracking-wider text-white underline underline-offset-4`}
        >
          Get in touch →
        </Link>
      </section>
    </SiteChrome>
  );
}
