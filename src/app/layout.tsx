import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Giriraaj Textiles — Premium Yarn for Industrial Packaging",
  description:
    "Giriraaj Textiles supplies high-tenacity polyester and polypropylene yarn to packaging, agriculture, and industry across India. Consistent quality, reliable supply.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${ibmPlex.variable} ${jetbrains.variable}`}>
      <body className="flex flex-col min-h-screen">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
