import Link from "next/link";
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
      <header className="absolute inset-x-0 top-0 z-20 px-6 py-5 sm:px-10">
        <div className="flex items-center justify-between">
          <Link
            href={theme === "stone" ? "/demo" : "/"}
            className={`${oswald} text-sm font-semibold tracking-[0.2em] no-underline ${t.headerBrand}`}
          >
            GIRIRAAJ TEXTILES
          </Link>
          <nav className="flex gap-6 text-xs font-medium uppercase tracking-wider">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`no-underline ${
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
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  children,
  theme = "dark",
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  theme?: SiteTheme;
}) {
  const t = themes[theme];

  return (
    <div className={`${shell} border-b py-24 sm:py-28 ${t.pageHeaderBorder}`}>
      {eyebrow ? (
        <p className={`${oswald} text-xs tracking-[0.2em] ${t.eyebrow}`}>
          {eyebrow}
        </p>
      ) : null}
      <h1 className={`${oswald} mt-3 text-4xl font-bold uppercase sm:text-5xl`}>
        {title}
      </h1>
      {children ? (
        <div className={`mt-4 max-w-xl ${t.pageHeaderBody}`}>{children}</div>
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
