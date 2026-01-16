import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AIChatbot } from "@/components/AIChatbot";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pacific Pulse Growth Lab | Web Applications & AI Automation",
    template: "%s | Pacific Pulse Growth Lab",
  },
  description:
    "We build digital products that grow businesses. Full-stack web applications, AI automation, booking systems, and e-commerce solutions. Based in Hawaii, serving clients worldwide.",
  keywords: [
    "web development Hawaii",
    "custom web applications",
    "AI automation",
    "booking system",
    "e-commerce development",
    "Next.js developer",
    "full-stack developer Hawaii",
    "business automation",
    "AI chatbot",
    "digital agency Hawaii",
  ],
  authors: [{ name: "Sony Ho" }],
  creator: "Sony Ho",
  publisher: "Pacific Pulse Growth Lab LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pacificpulseai.com",
    title: "Pacific Pulse Growth Lab | Web Applications & AI Automation",
    description:
      "We build digital products that grow businesses. Custom web applications, AI automation, booking systems, and e-commerce. Based in Hawaii, serving clients worldwide.",
    siteName: "Pacific Pulse Growth Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pacific Pulse Growth Lab | Web Applications & AI Automation",
    description:
      "We build digital products that grow businesses. Custom web applications, AI automation, and booking systems for service businesses.",
    creator: "@pacificpulselab",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AIChatbot />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
