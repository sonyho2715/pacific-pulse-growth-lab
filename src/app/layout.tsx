import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AIChatbot } from "@/components/AIChatbot";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
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

// LocalBusiness Schema for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Pacific Pulse Growth Lab",
  "description": "Web applications, AI automation, booking systems, and e-commerce solutions for Hawaii businesses.",
  "url": "https://pacificpulseai.com",
  "logo": "https://pacificpulseai.com/logo.png",
  "image": "https://pacificpulseai.com/og-image.png",
  "email": "sony@pacificpulseai.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Honolulu",
    "addressRegion": "HI",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.3069,
    "longitude": -157.8583
  },
  "areaServed": [
    { "@type": "State", "name": "Hawaii" },
    { "@type": "Country", "name": "United States" }
  ],
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  },
  "founder": { "@type": "Person", "name": "Sony Ho" },
  "foundingDate": "2024",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "12"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Web Applications",
          "description": "Next.js applications built for speed, SEO, and conversion"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Automation",
          "description": "24/7 AI chatbots trained on your business"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Booking Systems",
          "description": "Online booking with calendar sync and automated reminders"
        }
      }
    ]
  }
};

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AIChatbot />
        <ExitIntentPopup />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
