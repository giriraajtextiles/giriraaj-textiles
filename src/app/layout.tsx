import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Giriraaj Textiles — Building India's textile backbone",
  description:
    "Giriraaj Textiles supplies high-tenacity polyester and polypropylene yarn to packaging, agriculture, and industry across India. Every strand engineered with precision.",
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
