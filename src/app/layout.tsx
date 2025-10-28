import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClaudeChatbot } from "@/components/ClaudeChatbot";

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
    default: "Pacific Pulse Growth Lab | AI Automation for Hawaii Service Businesses",
    template: "%s | Pacific Pulse Growth Lab",
  },
  description:
    "Stop losing money to missed calls. Get AI that answers 24/7. Founding client program for Hawaii service businesses - custom AI systems built by a Master NLP Coach. $497/month (50% off).",
  keywords: [
    "AI automation Hawaii",
    "AI chatbot Hawaii",
    "customer service automation",
    "24/7 answering service",
    "AI for service businesses",
    "Hawaii business automation",
    "NLP coach",
    "conversational AI",
    "appointment booking automation",
    "lead capture automation",
  ],
  authors: [{ name: "Sony Ho" }],
  creator: "Sony Ho",
  publisher: "Pacific Pulse Growth Lab LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pacificpulsegrowth.com",
    title: "Stop Losing Money to Missed Calls | AI That Answers 24/7",
    description:
      "Founding client program for Hawaii service businesses. Custom AI automation built by a Master NLP Coach. Capture every lead. Book appointments 24/7. $497/month.",
    siteName: "Pacific Pulse Growth Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Losing Money to Missed Calls | AI That Answers 24/7",
    description:
      "Founding client program for Hawaii service businesses. Custom AI automation that sounds human, built by a Master NLP Coach. 8 spots remaining.",
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
        <ClaudeChatbot />
      </body>
    </html>
  );
}
