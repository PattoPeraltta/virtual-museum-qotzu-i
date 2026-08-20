import type { Metadata } from "next";
import { Kalam, Montserrat, Wendy_One } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-body" });
const kalam = Kalam({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-hand" });
const wendy = Wendy_One({ subsets: ["latin"], weight: "400", variable: "--font-accent" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
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
    <html lang="en">
      <body className={`${montserrat.variable} ${kalam.variable} ${wendy.variable}`}>{children}</body>
    </html>
  );
}
