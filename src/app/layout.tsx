import type { Metadata } from "next";
import { Afacad, EB_Garamond } from "next/font/google";
import "./globals.css";

const afacad = Afacad({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-afacad",
  weight: ["400", "500", "600", "700"],
  preload: true,
  adjustFontFallback: true,
});

const ebGaramond = EB_Garamond({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-eb-garamond",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qotzunifilm.com"),
  title: "Qotzuñi Virtual Museum",
  description:
    "An immersive virtual museum about Lake Poopo, the Uru communities of Bolivia, and environmental change.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${afacad.variable} ${ebGaramond.variable} font-afacad`}>
      <body>{children}</body>
    </html>
  );
}
