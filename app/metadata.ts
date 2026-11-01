import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dtechbro.xyz"),
  title: {
    default: "Muhammad-Nabeel — Software Engineer | dtechbro",
    template: "%s | dtechbro",
  },
  description:
    "Software Engineer specializing in building reliable, scalable web and mobile applications. Expert in React, Next.js, TypeScript, and modern frontend architecture. Available for roles and freelance projects.",
  keywords: [
    "Muhammad-Nabeel",
    "Muhammad-Nabeel Olaoye",
    "dtechbro",
    "Software Engineer",
    "Frontend Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Remote Software Engineer",
    "Frontend Engineer Nigeria",
    "Frontend Engineer EMEA",
    "Hire React Developer",
    "Hire Frontend Developer",
    "JavaScript Developer",
    "Vue.js Developer",
    "Full Stack Developer",
    "Portfolio",
    "Freelance Developer",
  ],
  authors: [{ name: "Muhammad Nabeel", url: "https://www.dtechbro.xyz" }],
  creator: "Muhammad Nabeel",
  publisher: "Muhammad Nabeel",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.dtechbro.xyz",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dtechbro.xyz",
    title: "Muhammad Nabeel — Software Engineer | dtechbro",
    description:
      "Software Engineer specializing in building reliable, scalable web and mobile applications. Expert in React, Next.js, TypeScript, and modern frontend architecture.",
    siteName: "dtechbro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Nabeel — Software Engineer | dtechbro",
    description:
      "Software Engineer specializing in building reliable, scalable web and mobile applications. Expert in React, Next.js, TypeScript, and modern frontend architecture.",
    creator: "@dtechbro",
  },
  verification: {},
};

export default metadata;
