import type { Metadata } from "next";

export const baseOpenGraph = {
  title: "Giriraaj Textiles",
  description:
    "3-ply polyester and polypropylene yarn for industrial bag closing. For distributors, export agents, and domestic buyers. Beawar, Rajasthan.",
  siteName: "Giriraaj Textiles",
  locale: "en_IN",
  type: "website",
} satisfies Metadata["openGraph"];

/**
 * Page-level openGraph replaces the layout's (including the file-based
 * opengraph-image), so each page restates the base, its URL and the image.
 */
export function pageMeta(path: string): Pick<Metadata, "alternates" | "openGraph"> {
  return {
    alternates: { canonical: path },
    openGraph: {
      ...baseOpenGraph,
      url: path,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Giriraaj Textiles, bag closing yarn" }],
    },
  };
}
