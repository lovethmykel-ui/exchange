import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "OKNexus — The Future of Digital Asset Exchange",
  description: "Trade crypto, instant swap assets at zero slippage, execute escrow-protected P2P trades, and deploy autonomous AI prediction market trading agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`}>
      <head>
        <script src="https://cdn.lordicon.com/lordicon.js" async></script>
      </head>
      <body className="bg-bg-base text-white antialiased selection:bg-primary/30 min-h-screen flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
