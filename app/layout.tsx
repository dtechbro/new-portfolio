import type { Metadata } from "next";
import { Titillium_Web, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const titillium = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-titillium",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad-Nabeel",
  description: "My portofolio website",
  icons: {
    icon: "/favicon.png", // or "/favicon.svg", or use multiple sizes if needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${titillium.variable} ${geistMono.variable} gradient-bg py-10 antialiased`}
      >
        {children} <Analytics />
      </body>
    </html>
  );
}
