import type { Metadata } from "next";
import { Oswald, Montserrat, Space_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nomadyellowstone.com'),
  title: "Nomad Yellowstone – Guided ATV Tours in Island Park, ID (Near West Yellowstone)",
  description: "Private, passenger‑only ATV tours in Island Park, Idaho. Guided backcountry ATV adventures near Yellowstone and West Yellowstone, from $179 per seat.",
  openGraph: {
    type: 'website',
    siteName: 'Nomad Yellowstone',
    title: 'Nomad Yellowstone – Guided ATV Tours in Island Park, ID',
    description: 'Private, passenger‑only ATV tours in Island Park, Idaho. Guided backcountry ATV adventures near Yellowstone and West Yellowstone, from $179 per seat.',
    images: [{ url: '/sawtelle.png', width: 1200, height: 630, alt: 'Nomad Yellowstone ATV backcountry tour near Yellowstone National Park' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nomad Yellowstone – Guided ATV Tours in Island Park, ID',
    description: 'Private, passenger‑only ATV tours in Island Park, Idaho. Guided backcountry ATV adventures near Yellowstone and West Yellowstone, from $179 per seat.',
    images: ['/sawtelle.png'],
  },
};

import Analytics from "@/components/Analytics";
import StickyBookingBar from "@/components/StickyBookingBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["SportsActivityLocation", "LocalBusiness"],
    "name": "Nomad Yellowstone",
    "description": "Nomad Yellowstone is a private Guided Adventure Tours company based in Island Park, Idaho, servicing the Yellowstone National Park and Grand Teton backcountry region with high-performance ATVs.",
    "url": "https://nomadyellowstone.com",
    "logo": "https://nomadyellowstone.com/logo.png",
    "image": "https://nomadyellowstone.com/sawtelle.png",
    "telephone": "+12087452088",
    "email": "hq@nomadyellowstone.com",
    "priceRange": "$179 - $1997",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Island Park",
      "addressRegion": "ID",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.4221,
      "longitude": -111.3733
    },
    "sameAs": [
      "https://www.instagram.com/nomadyellowstone",
      "https://www.facebook.com/nomadyellowstone"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${oswald.variable} ${montserrat.variable} ${spaceMono.variable} antialiased bg-background text-foreground selection:bg-accent selection:text-white`}
      >
        <Analytics />
        {children}
        <StickyBookingBar />
      </body>
    </html>
  );
}
