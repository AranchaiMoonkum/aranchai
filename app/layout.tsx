import type { Metadata } from "next";
import "./globals.css";

import { Libre_Baskerville } from "next/font/google";
import { Header } from "@/components/Header";

const libre_baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "aranchai",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="hsl(40 33% 98%)" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="hsl(30 15% 8%)" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${libre_baskerville.className} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
