import Link from "next/link";
import { ADDRESS, GSTIN, MAPS_HREF } from "@/lib/site";
import { themes, type SiteTheme } from "@/lib/theme";

const oswald = "font-[family-name:var(--font-oswald)]";
const roboto = "font-[family-name:var(--font-roboto)]";

export const display = oswald;
export const body = roboto;
export const shell = "mx-auto max-w-6xl px-6 sm:px-10";

type NavKey = "home" | "products" | "about" | "contact";

const links: { key: NavKey; label: string; href: string }[] = [
  { key: "products", label: "Products", href: "/products" },
  { key: "about", label: "About", href: "/about" },
  { key: "contact", label: "Enquire", href: "/contact" },
];

export function SiteChrome({
  children,
  active,
  theme = "dark",
}: {
  children: React.ReactNode;
  active?: NavKey;
  theme?: SiteTheme;
}) {
  const t = themes[theme];

  return (
    <div className={`${roboto} min-h-screen ${t.page}`}>
      <header className="absolute inset-x-0 top-0 z-20 px-6 py-2 sm:px-10 sm:py-3">
        <div className="flex flex-wrap items-center justify-between gap-y-1">
          <Link
            href="/"
            className={`${oswald} inline-flex min-h-11 items-center text-sm font-semibold tracking-[0.2em] no-underline ${t.headerBrand}`}
          >
            GIRIRAAJ TEXTILES
          </Link>
          <nav className="ml-auto flex items-center gap-0.5 text-xs font-medium uppercase tracking-wider sm:gap-2">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`inline-flex min-h-11 items-center px-2 no-underline ${
                  active === link.key ? t.navActive : t.navIdle
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {children}
      <footer className={`border-t px-6 py-8 text-sm sm:px-10 ${t.footer}`}>
        <div className={shell}>
          <p className="m-0">Domestic dispatch from Beawar · GST invoicing</p>
          <p className="m-0 mt-1">GSTIN {GSTIN}</p>
          <p className="m-0 mt-1">
            <a
              href={MAPS_HREF}
              className="inline-flex min-h-11 items-center no-underline underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ADDRESS}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  title,
  children,
  theme = "dark",
}: {
  title: string;
  children?: React.ReactNode;
  theme?: SiteTheme;
}) {
  const t = themes[theme];

  return (
    <div
      className={`${shell} border-b pb-8 pt-32 sm:pb-10 sm:pt-36 ${t.pageHeaderBorder}`}
    >
      <h1
        className={`${oswald} text-balance text-4xl font-bold uppercase sm:text-5xl`}
      >
        {title}
      </h1>
      {children ? (
        <div className={`mt-4 max-w-lg text-pretty ${t.pageHeaderBody}`}>
          {children}
        </div>
      ) : null}
    </div>
  );
}

export function SpecList({
  specs,
  theme = "dark",
}: {
  specs: { label: string; value: string }[];
  theme?: SiteTheme;
}) {
  const t = themes[theme];

  return (
    <dl className="m-0 grid gap-2.5 text-sm">
      {specs.map((s) => (
        <div key={s.label} className="grid grid-cols-[7.5rem_1fr] gap-3">
          <dt className={t.specLabel}>{s.label}</dt>
          <dd className={`m-0 font-medium ${t.specValue}`}>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function themeClasses(theme: SiteTheme) {
  return themes[theme];
}
