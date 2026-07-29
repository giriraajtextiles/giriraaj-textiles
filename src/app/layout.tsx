import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-public-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://giriraajtextiles.com"),
  title: "Giriraaj Textiles | Recycled polyester yarn & PP thread",
  description:
    "Manufacturer in Beawar, Rajasthan. 3-ply recycled polyester yarn (counts 10–15) and polypropylene bag closing thread. Enquiry reply within 12 hours. Call +91 80059 16878.",
  keywords: [
    "recycled polyester yarn",
    "3 ply polyester yarn",
    "10 count yarn",
    "12 count yarn",
    "15 count yarn",
    "bag closing thread",
    "polypropylene thread",
    "PP thread",
    "HDP bags",
    "Beawar",
    "Rajasthan",
  ],
  authors: [{ name: "Giriraaj Textiles" }],
  creator: "Giriraaj Textiles",
  publisher: "Giriraaj Textiles",
  openGraph: {
    title: "Giriraaj Textiles",
    description:
      "3-ply recycled polyester yarn (counts 10–15) and polypropylene bag closing thread from Beawar.",
    url: "https://giriraajtextiles.com",
    siteName: "Giriraaj Textiles",
    images: [
      {
        url: "/3-12-white.jpg",
        width: 1200,
        height: 1200,
        alt: "Spools of recycled polyester yarn from Giriraaj Textiles",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giriraaj Textiles",
    description:
      "3-ply recycled polyester yarn and polypropylene bag closing thread from Beawar.",
    images: ["/3-12-white.jpg"],
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
      className={`${archivo.variable} ${publicSans.variable} scroll-smooth`}
    >
      <body className="overflow-x-hidden bg-paper font-sans text-ink antialiased leading-relaxed">
        {children}
      </body>
    </html>
  );
}
