import { Titillium_Web, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import siteMetadata from "./metadata";

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

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Nabeel",
              alternateName: "dtechbro",
              url: "https://www.dtechbro.xyz",
              jobTitle: "Software Engineer",
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Vue.js",
                "Frontend Development",
                "Web Development",
              ],
              sameAs: [
                "https://github.com/dtechbro",
                "https://linkedin.com/in/olaoye-md-nabeel",
                "https://x.com/dtechbro",
                "https://instagram.com/dtechbro",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${titillium.variable} ${geistMono.variable} noise-overlay gradient-bg py-10 antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
