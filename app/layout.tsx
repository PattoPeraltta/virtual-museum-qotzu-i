import type { Metadata } from "next";
import "./globals.css";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (productionHost ? `https://${productionHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Uru Virtual Museum | Qotzuñi",
  description: "A virtual museum documenting Lake Poopó, the Uru Indigenous Nation, and the Qotzuñi impact project.",
  icons: {
    icon: "/assets/figma/home-group259.svg",
  },
  openGraph: {
    title: "Uru Virtual Museum | Qotzuñi",
    description: "Lake Poopó, the Uru Indigenous Nation, and a culture adapting after the water disappeared.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Uru Virtual Museum — Lake Poopó · Qotzuñi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uru Virtual Museum | Qotzuñi",
    description: "Lake Poopó, the Uru Indigenous Nation, and a culture adapting after the water disappeared.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preload" href="/fonts/montserrat-latin-variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/wendy-one-latin-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/felt-tip-woman-w01-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/felt-tip-woman-regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
