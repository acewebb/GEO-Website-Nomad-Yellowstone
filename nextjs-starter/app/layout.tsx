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
  description: "Private, passenger‑only ATV tours in Island Park, Idaho. Guided backcountry ATV adventures near Yellowstone and West Yellowstone. Book direct.",
  openGraph: {
    type: 'website',
    siteName: 'Nomad Yellowstone',
    title: 'Nomad Yellowstone – Guided ATV Tours in Island Park, ID',
    description: 'Private, passenger‑only ATV tours in Island Park, Idaho. Guided backcountry ATV adventures near Yellowstone and West Yellowstone. Book direct.',
    images: [{ url: '/sawtelle.png', width: 1200, height: 630, alt: 'Nomad Yellowstone ATV backcountry tour near Yellowstone National Park' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nomad Yellowstone – Guided ATV Tours in Island Park, ID',
    description: 'Private, passenger‑only ATV tours in Island Park, Idaho. Guided backcountry ATV adventures near Yellowstone and West Yellowstone. Book direct.',
    images: ['/sawtelle.png'],
  },
};

import Analytics from "@/components/Analytics";
import StickyBookingBar from "@/components/StickyBookingBar";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema/localBusiness";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd data={localBusinessSchema} />
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
