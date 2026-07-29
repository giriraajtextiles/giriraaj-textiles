import Image from "next/image";
import {
  polyesterCounts,
  polyesterVariants,
  polypropylenePhotos,
} from "@/lib/products";
import { cn } from "@/lib/utils";

const PHONE = "8005916878";
const PHONE_DISPLAY = "+91 80059 16878";
const TEL_HREF = `tel:+91${PHONE}`;
const ADDRESS = "6B, Chandra Vihar Colony, Beawar, Rajasthan";
const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

function waHref(message: string) {
  return `https://wa.me/91${PHONE}?text=${encodeURIComponent(message)}`;
}

const WA_GENERAL = waHref(
  "Hello, I want to enquire about yarn from Giriraaj Textiles.\nProduct:\nCount:\nColour:\nMonthly volume:",
);
const WA_POLYESTER = waHref(
  "Hello, I want to enquire about recycled polyester yarn (3-ply, counts 10/12/15).\nCount:\nColour:\nMonthly volume:",
);
const WA_PP = waHref(
  "Hello, I want to enquire about polypropylene (PP) thread.\nDetails:",
);

const btnBase =
  "inline-flex min-h-11 items-center justify-center px-5 py-3 font-display text-sm font-semibold tracking-wide no-underline transition-colors";

export default function Home() {
  return (
    <main className="w-full">
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex w-full items-center justify-between gap-3",
          "bg-paper/94 backdrop-blur-[10px]",
          "px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3",
          "sm:gap-4 sm:px-6 sm:pb-[0.95rem] md:px-10",
        )}
      >
        <a
          href="#top"
          className="shrink-0 font-display text-[0.9375rem] font-bold tracking-tight no-underline sm:text-base"
        >
          Giriraaj Textiles
        </a>
        <ul className="m-0 flex list-none flex-wrap items-center justify-end gap-x-3 gap-y-1 sm:gap-x-5">
          <li>
            <a
              href="#products"
              className="inline-flex min-h-10 items-center text-[0.8125rem] font-medium text-muted no-underline transition-colors hover:text-ink"
            >
              Products
            </a>
          </li>
          <li className="hidden min-[380px]:block">
            <a
              href="#about"
              className="inline-flex min-h-10 items-center text-[0.8125rem] font-medium text-muted no-underline transition-colors hover:text-ink"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="inline-flex min-h-10 items-center text-[0.8125rem] font-medium text-muted no-underline transition-colors hover:text-ink"
            >
              Enquire
            </a>
          </li>
          <li>
            <a
              href={TEL_HREF}
              className="inline-flex min-h-10 items-center font-display text-[0.8125rem] font-semibold text-oxide-ink no-underline sm:text-sm"
            >
              <span className="sm:hidden">Call</span>
              <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            </a>
          </li>
        </ul>
      </nav>

      <section
        id="top"
        className={cn(
          "relative flex min-h-svh w-full items-end overflow-hidden text-white",
          "px-4 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-24",
          "sm:px-6 sm:pb-12 md:px-12 md:pb-16 md:pt-20",
        )}
      >
        <Image
          src="/3-12-white.jpg"
          alt="Spools of recycled white polyester yarn"
          fill
          priority
          sizes="100vw"
          className="animate-in zoom-in-[1.04] object-cover object-[center_40%] duration-1000 ease-out-expo fill-mode-forwards motion-reduce:animate-none"
        />
        <div
          className="absolute inset-0 z-[1] bg-[linear-gradient(to_top,oklch(0.12_0.02_50/0.94)_0%,oklch(0.12_0.02_50/0.75)_30%,oklch(0.12_0.02_50/0.22)_58%,oklch(0.12_0.02_50/0.08)_100%)]"
          aria-hidden="true"
        />
        <div className="relative z-[2] w-full max-w-2xl animate-in fade-in slide-in-from-bottom-5 fill-mode-both delay-150 duration-1000 ease-out-expo motion-reduce:animate-none">
          <p className="mb-3 font-display text-[clamp(1.75rem,8vw,3.25rem)] font-bold leading-[1.05] tracking-tight text-balance sm:mb-3.5">
            Giriraaj Textiles
          </p>
          <h1 className="mb-3 max-w-[28ch] font-display text-[clamp(1.05rem,4.2vw,1.55rem)] font-semibold leading-snug tracking-tight text-balance sm:mb-3.5">
            Synthetic yarn for industrial bag closing
          </h1>
          <p className="mb-6 max-w-[48ch] text-[0.9375rem] leading-relaxed text-white/90 text-pretty sm:mb-6 sm:text-base">
            Recycled polyester yarn and polypropylene thread, manufactured in
            Beawar, Rajasthan.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3">
            <a
              href="#products"
              className={cn(
                btnBase,
                "w-full bg-white text-ink hover:bg-paper sm:w-auto",
              )}
            >
              Browse products
            </a>
            <a
              href={WA_GENERAL}
              className={cn(
                btnBase,
                "w-full border border-white/45 bg-transparent text-white hover:border-white hover:bg-white/8 sm:w-auto",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-20 border-t border-line px-4 py-14 sm:px-6 sm:py-20 md:scroll-mt-24 md:px-12 md:py-24"
        id="products"
      >
        <header className="mb-10 max-w-xl sm:mb-14">
          <h2 className="mb-3 font-display text-[clamp(1.35rem,5vw,2.1rem)] font-bold leading-tight tracking-tight text-balance">
            Products
          </h2>
          <p className="max-w-[58ch] text-[1.0125rem] text-muted text-pretty">
            Two lines. Pick a product, check the variants, then enquire on
            WhatsApp. We reply within 12 hours.
          </p>
        </header>

        <article
          className="grid grid-cols-1 items-start gap-6 border border-line bg-surface p-4 sm:gap-8 sm:p-6 md:grid-cols-[minmax(16rem,0.9fr)_minmax(0,1.4fr)] md:gap-10 md:p-8"
          id="polyester"
        >
          <div className="flex flex-col gap-4 md:sticky md:top-20">
            <h3 className="font-display text-[clamp(1.2rem,3.5vw,1.65rem)] font-bold leading-tight tracking-tight text-balance">
              Recycled polyester yarn
            </h3>
            <p className="max-w-[58ch] text-[1.0125rem] text-muted text-pretty">
              3-ply synthetic yarn for closing HDP and woven bags on industrial
              bag-closing machines.
            </p>
            <dl className="m-0 grid gap-0 border border-line bg-paper">
              <div className="grid grid-cols-[5.5rem_1fr] items-baseline gap-3 border-b border-line px-3.5 py-2.5 sm:grid-cols-[6.5rem_1fr] sm:px-3.5">
                <dt className="text-[0.6875rem] font-semibold tracking-wider text-muted uppercase">
                  Ply
                </dt>
                <dd className="m-0 font-display text-[0.9rem] font-semibold tracking-tight">
                  3-ply
                </dd>
              </div>
              <div className="grid grid-cols-[5.5rem_1fr] items-baseline gap-3 border-b border-line px-3.5 py-2.5 sm:grid-cols-[6.5rem_1fr]">
                <dt className="text-[0.6875rem] font-semibold tracking-wider text-muted uppercase">
                  Count
                </dt>
                <dd className="m-0 font-display text-[0.9rem] font-semibold tracking-tight">
                  {polyesterCounts.join(", ")}
                </dd>
              </div>
              <div className="grid grid-cols-[5.5rem_1fr] items-baseline gap-3 px-3.5 py-2.5 sm:grid-cols-[6.5rem_1fr]">
                <dt className="text-[0.6875rem] font-semibold tracking-wider text-muted uppercase">
                  MOQ
                </dt>
                <dd className="m-0 font-display text-[0.9rem] font-semibold tracking-tight">
                  1,000 cones
                </dd>
              </div>
            </dl>
            <a
              href={WA_POLYESTER}
              className={cn(
                btnBase,
                "mt-1 w-full self-start bg-ink text-white hover:bg-oxide sm:w-auto",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire on WhatsApp
            </a>
          </div>
          <div
            className="grid grid-cols-2 gap-px border border-line bg-line"
            aria-label="Polyester yarn colours"
          >
            {polyesterVariants.map((variant) => (
              <figure key={variant.src} className="m-0 flex flex-col bg-white">
                <div className="relative aspect-square overflow-hidden bg-media">
                  <Image
                    src={variant.src}
                    alt={variant.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 22vw"
                    className="object-cover object-center transition-transform duration-700 ease-out-expo [@media(hover:hover)]:hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="flex items-baseline justify-between gap-2 border-t border-line px-3 py-3 sm:px-4">
                  <strong className="font-display text-sm font-semibold tracking-tight">
                    {variant.label}
                  </strong>
                  <span className="text-xs text-muted">{variant.count} count</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </article>

        <article
          className="mt-6 grid grid-cols-1 items-start gap-6 border border-line bg-surface p-4 sm:mt-8 sm:gap-8 sm:p-6 md:mt-8 md:grid-cols-[minmax(16rem,0.9fr)_minmax(0,1.4fr)] md:gap-10 md:p-8"
          id="pp"
        >
          <div className="flex flex-col gap-4 md:sticky md:top-20">
            <h3 className="font-display text-[clamp(1.2rem,3.5vw,1.65rem)] font-bold leading-tight tracking-tight text-balance">
              Polypropylene thread
            </h3>
            <p className="max-w-[58ch] text-[1.0125rem] text-muted text-pretty">
              PP thread for sealing open-mouth woven sacks and industrial bags.
              More specifications are available on call.
            </p>
            <a
              href={WA_PP}
              className={cn(
                btnBase,
                "mt-1 w-full self-start bg-ink text-white hover:bg-oxide sm:w-auto",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire on WhatsApp
            </a>
          </div>
          <div
            className="grid grid-cols-2 gap-px border border-line bg-white sm:grid-cols-3"
            aria-label="Polypropylene thread"
          >
            {polypropylenePhotos.map((photo) => (
              <figure key={photo.src} className="m-0 flex flex-col bg-white">
                <div className="relative aspect-[3/4] overflow-hidden bg-white">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 22vw"
                    className="object-cover object-center"
                  />
                </div>
              </figure>
            ))}
          </div>
        </article>
      </section>

      <section
        className="scroll-mt-20 grid grid-cols-1 items-start gap-8 border-t border-line px-4 py-14 sm:gap-10 sm:px-6 sm:py-20 md:scroll-mt-24 md:grid-cols-[minmax(14rem,0.7fr)_minmax(0,1.3fr)] md:gap-16 md:px-12 md:py-24"
        id="about"
      >
        <div className="md:sticky md:top-20">
          <h2 className="mb-3 font-display text-[clamp(1.35rem,5vw,2.1rem)] font-bold leading-tight tracking-tight text-balance">
            From Beawar
          </h2>
          <p className="max-w-[58ch] text-[1.0125rem] text-muted text-pretty">
            Giriraaj Textiles started in 2025 in the Ajmer region of Rajasthan.
            Proprietorship under S Agarwal. A small team, GST-registered, stock
            ships from Beawar.
          </p>
        </div>
        <div
          className="grid min-h-0 grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 md:min-h-[22rem] md:grid-cols-[1.4fr_1fr_1fr]"
          aria-label="Warehouse stock"
        >
          <figure className="relative m-0 min-h-56 overflow-hidden bg-media sm:col-span-2 md:col-span-1 md:min-h-64">
            <Image
              src="/exterior1.webp"
              alt="Warehouse aisle with stacked packed yarn stock"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out-expo [@media(hover:hover)]:hover:scale-[1.04]"
            />
          </figure>
          <figure className="relative m-0 min-h-44 overflow-hidden bg-media md:min-h-64">
            <Image
              src="/exterior2.webp"
              alt="Stacked inventory packages in the warehouse"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out-expo [@media(hover:hover)]:hover:scale-[1.04]"
            />
          </figure>
          <figure className="relative m-0 min-h-44 overflow-hidden bg-media md:min-h-64">
            <Image
              src="/exterior3.webp"
              alt="Packed yarn stock ready for dispatch"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out-expo [@media(hover:hover)]:hover:scale-[1.04]"
            />
          </figure>
        </div>
      </section>

      <section
        className="scroll-mt-20 max-w-xl border-t border-line px-4 py-14 sm:px-6 sm:py-20 md:scroll-mt-24 md:px-12 md:py-24"
        id="contact"
      >
        <h2 className="mb-3 font-display text-[clamp(1.35rem,5vw,2.1rem)] font-bold leading-tight tracking-tight text-balance">
          Enquire on WhatsApp
        </h2>
        <p className="max-w-[58ch] text-[1.0125rem] text-muted text-pretty">
          Send count, colour, and monthly volume. We reply within 12 hours.
        </p>
        <div className="mt-6 flex flex-col items-stretch gap-4 sm:items-start">
          <a
            href={WA_GENERAL}
            className={cn(
              btnBase,
              "w-full bg-ink text-white hover:bg-oxide sm:w-auto",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open WhatsApp
          </a>
          <a
            href={TEL_HREF}
            className="inline-flex min-h-11 items-center font-display text-base font-semibold text-oxide-ink no-underline hover:underline hover:underline-offset-[0.15em]"
          >
            Or call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <footer
        className={cn(
          "flex flex-col gap-3 border-t border-line px-4 py-6 text-[0.8125rem] text-muted",
          "sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-8 sm:px-6 md:px-12",
          "pb-[max(1.5rem,env(safe-area-inset-bottom))]",
        )}
      >
        <span>Giriraaj Textiles</span>
        <a
          href={MAPS_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted no-underline transition-colors hover:text-ink"
        >
          {ADDRESS}
        </a>
      </footer>
    </main>
  );
}
