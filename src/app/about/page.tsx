import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, SiteChrome, display, shell } from "@/components/site/chrome";

export const metadata: Metadata = {
  title: "About",
  description:
    "Giriraaj Textiles manufactures bag closing yarn in Beawar, Rajasthan. GST-registered since 2025.",
};

export default function AboutPage() {
  return (
    <SiteChrome active="about">
      <PageHeader eyebrow="ABOUT" title="Giriraaj Textiles">
        <p>
          Yarn manufacturer in Beawar, Rajasthan. Serving distributors, export
          agents, and domestic buyers.
        </p>
      </PageHeader>

      <section className={`${shell} max-w-2xl py-16 sm:py-20`}>
        <div className="space-y-6 leading-relaxed text-white/65">
          <p>
            Proprietorship under S Agarwal, GST-registered, manufacturing in
            Beawar since 2025. We produce 3-ply polyester yarn and polypropylene
            yarn for industrial bag lines.
          </p>
          <p>
            Consistent monthly production with stock dispatching from Rajasthan.
            Domestic and export enquiries welcome.
          </p>
        </div>

        <Link
          href="/contact"
          className={`${display} mt-12 inline-block text-sm font-semibold uppercase tracking-wider text-white underline underline-offset-4`}
        >
          Get in touch →
        </Link>
      </section>
    </SiteChrome>
  );
}
