import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://giriraajtextiles.com"),
  title: "Giriraaj Textiles — Building India's textile backbone",
  description:
    "Giriraaj Textiles supplies high-tenacity polyester and polypropylene yarn to packaging, agriculture, and industry across India. Every strand engineered with precision.",
  keywords: ["polypropylene yarn", "polyester yarn", "industrial yarn", "geotextiles", "fibrillated yarn", "monofilament", "woven sacks", "FIBC bags", "India yarn manufacturer"],
  authors: [{ name: "Giriraaj Textiles" }],
  creator: "Giriraaj Textiles",
  publisher: "Giriraaj Textiles",
  openGraph: {
    title: "Giriraaj Textiles — Industrial Strength Yarn",
    description: "Every strand engineered with precision. High-tenacity synthetic yarn manufacturing powering India's textile backbone.",
    url: "https://giriraajtextiles.com",
    siteName: "Giriraaj Textiles",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Giriraaj Textiles Industrial Yarn",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giriraaj Textiles — Industrial Strength Yarn",
    description: "High-tenacity synthetic yarn manufacturing powering India's textile backbone.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@200;400;600;700;800&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300&family=Manrope:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
