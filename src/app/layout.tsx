import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from "@config";
import { Reveal } from "@/components/Reveal";
import "./globals.css";

// Inter approximates Arc's Founders Grotesk; the body stack puts Helvetica Neue
// ahead of it (see globals.css --font-sans) so Mac users get the closest match.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(config.seo.url),
  title: config.seo.title,
  description: config.seo.description,
  openGraph: {
    type: "website",
    title: config.seo.title,
    description: config.seo.description,
    url: config.seo.url,
    images: ["/og.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: config.seo.title,
    description: config.seo.description,
    images: ["/og.svg"],
  },
};

export const viewport = { themeColor: "#fffbf2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a href="#apply" className="skip-link">
          Skip to apply
        </a>
        {children}
        <Reveal />
      </body>
    </html>
  );
}
