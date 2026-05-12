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
    "@type": ["SportsActivityLocation", "LocalBusiness", "TouristAttraction"],
    "@id": "https://nomadyellowstone.com/#business",
    "name": "Nomad Yellowstone",
    "description": "Guided passenger-only ATV and UTV tours in Island Park, Idaho, 20 minutes from the West Yellowstone entrance. Built for families, seniors, and non-drivers who want backcountry access without driving themselves.",
    "url": "https://nomadyellowstone.com",
    "logo": "https://nomadyellowstone.com/logo.png",
    "image": "https://nomadyellowstone.com/sawtelle.png",
    "telephone": "+12087452088",
    "email": "hq@nomadyellowstone.com",
    "priceRange": "$179 - $1997",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[TODO: ADD MEET-POINT STREET ADDRESS]",
      "addressLocality": "Island Park",
      "addressRegion": "ID",
      "postalCode": "83429",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.4221,
      "longitude": -111.3733
    },
    "areaServed": [
      { "@type": "City", "name": "West Yellowstone", "address": { "@type": "PostalAddress", "addressRegion": "MT" } },
      { "@type": "City", "name": "Island Park", "address": { "@type": "PostalAddress", "addressRegion": "ID" } },
      { "@type": "City", "name": "Ashton", "address": { "@type": "PostalAddress", "addressRegion": "ID" } },
      { "@type": "City", "name": "Bozeman", "address": { "@type": "PostalAddress", "addressRegion": "MT" } },
      { "@type": "City", "name": "Big Sky", "address": { "@type": "PostalAddress", "addressRegion": "MT" } }
    ],
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "19:00",
      "validFrom": "2026-05-15",
      "validThrough": "2026-10-31"
    }],
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
