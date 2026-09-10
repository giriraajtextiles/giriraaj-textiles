import type { Metadata, Viewport } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://giriraajtextiles.com"),
  title: {
    default: "Bag closing yarn | Giriraaj Textiles",
    template: "%s | Giriraaj Textiles",
  },
  description:
    "3-ply polyester and polypropylene yarn for industrial bag closing. Counts 10, 12, and 15. Recycled and virgin. For distributors, export agents, and domestic buyers. Beawar, Rajasthan.",
  keywords: [
    "bag closing yarn",
    "polyester yarn",
    "polypropylene yarn",
    "3 ply polyester yarn",
    "10 count yarn",
    "12 count yarn",
    "15 count yarn",
    "HDPE bags",
    "yarn supplier India",
    "Beawar",
    "Rajasthan",
  ],
  authors: [{ name: "Giriraaj Textiles" }],
  creator: "Giriraaj Textiles",
  publisher: "Giriraaj Textiles",
  openGraph: {
    title: "Giriraaj Textiles",
    description:
      "3-ply polyester and polypropylene yarn for industrial bag closing. For distributors, export agents, and domestic buyers. Beawar, Rajasthan.",
    url: "https://giriraajtextiles.com",
    siteName: "Giriraaj Textiles",
    images: [
      {
        url: "/3-15-blue.jpg",
        width: 1200,
        height: 1200,
        alt: "Polyester yarn from Giriraaj Textiles",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giriraaj Textiles",
    description:
      "3-ply polyester and polypropylene yarn for industrial bag closing. Beawar, Rajasthan.",
    images: ["/3-15-blue.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${oswald.variable} ${roboto.variable} scroll-smooth`}
    >
      <body className="overflow-x-hidden bg-neutral-950 font-[family-name:var(--font-roboto)] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
