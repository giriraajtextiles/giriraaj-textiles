import type { Metadata } from "next";
import { PageHeader, SiteChrome, display, shell } from "@/components/site/chrome";
import { ADDRESS, MAPS_HREF, PHONE_DISPLAY, TEL_HREF, WA_GENERAL } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Enquire",
  description:
    "Contact Giriraaj Textiles on WhatsApp or phone. Bag closing yarn enquiries. Replies within 12 hours.",
  ...pageMeta("/contact"),
};

export default function ContactPage() {
  return (
    <SiteChrome active="contact">
      <PageHeader eyebrow="CONTACT" title="Enquire">
        <p>
          Send product, count, colour, and monthly volume. We reply within 12
          hours on WhatsApp.
        </p>
      </PageHeader>

      <section className={`${shell} py-16 sm:py-20`}>
        <a
          href={WA_GENERAL}
          className={`${display} inline-flex min-h-12 items-center bg-white px-10 text-sm font-semibold uppercase tracking-wider text-neutral-950 no-underline`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <p className="mt-8">
          <a
            href={TEL_HREF}
            className="text-lg font-medium text-white/85 no-underline hover:text-white"
          >
            {PHONE_DISPLAY}
          </a>
        </p>
        <p className="mt-4 text-sm text-white/60">
          <a
            href={MAPS_HREF}
            className="no-underline underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {ADDRESS}
          </a>
        </p>
      </section>
    </SiteChrome>
  );
}
