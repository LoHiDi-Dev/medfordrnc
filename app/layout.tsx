import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
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
  title: {
    default: "Medford Rehabilitation & Nursing Center",
    template: "%s | Medford Rehabilitation & Nursing Center",
  },
  description:
    "Expert rehabilitation and skilled nursing in Medford, Massachusetts—delivered with warmth, dignity, and family-centered communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased text-foreground bg-background">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
