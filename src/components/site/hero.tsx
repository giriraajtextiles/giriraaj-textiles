import Image from "next/image";
import Link from "next/link";
import { themeClasses } from "@/components/site/chrome";
import { WA_GENERAL } from "@/lib/site";
import type { SiteTheme } from "@/lib/theme";
import { display } from "./chrome";

export function Hero({ theme = "dark" }: { theme?: SiteTheme }) {
  const t = themeClasses(theme);

  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <Image
        src="/3-15-blue.jpg"
        alt="Polyester yarn spools"
        fill
        priority
        className={`object-cover object-center ${t.heroImage}`}
        sizes="100vw"
      />
      <div className={`absolute inset-0 ${t.heroOverlay}`} aria-hidden="true" />
      <div className="relative z-10 flex min-h-[92vh] flex-col justify-end px-6 pb-16 pt-28 sm:px-10 sm:pb-20">
        <p className={`${display} text-sm tracking-[0.25em] ${theme === "stone" ? "text-amber-900/80" : "text-white/70"}`}>
          BEAWAR, RAJASTHAN
        </p>
        <h1
          className={`${display} mt-4 max-w-[12ch] text-[clamp(2.75rem,10vw,5.5rem)] font-bold uppercase leading-[0.92]`}
        >
          Bag closing yarn
        </h1>
        <p className={`mt-6 max-w-md text-base leading-relaxed ${t.bodyStrong}`}>
          3-ply polyester and polypropylene yarn for industrial sack lines. For
          distributors and export agents.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={WA_GENERAL}
            className={`${display} inline-flex min-h-12 items-center justify-center px-8 text-sm font-semibold uppercase tracking-wider no-underline ${t.btnPrimary}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire on WhatsApp
          </a>
          <Link
            href="/products"
            className={`${display} inline-flex min-h-12 items-center justify-center border px-8 text-sm font-semibold uppercase tracking-wider no-underline ${t.btnSecondary}`}
          >
            View products
          </Link>
        </div>
      </div>
    </section>
  );
}
