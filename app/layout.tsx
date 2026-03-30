import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import { NonDiscriminationStrip } from "@/components/layout/NonDiscriminationStrip";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medfordrnc.example.com"),
  applicationName: site.name,
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  appleWebApp: {
    title: site.name,
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased text-foreground bg-background">
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        <SiteShell>{children}</SiteShell>
        <NonDiscriminationStrip />
        <Footer />
      </body>
    </html>
  );
}
