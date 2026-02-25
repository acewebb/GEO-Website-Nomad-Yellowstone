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
  title: "Nomad Yellowstone | Private Guided UTV Backcountry Tours",
  description: "Experience private, fully-guided UTV backcountry tours near Yellowstone National Park. Passenger-only expeditions—leave the driving to us. 4-hour tours mapped from $225.",
};

import Analytics from "@/components/Analytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Nomad Yellowstone",
    "description": "Nomad Yellowstone is a private Guided Adventure Tours company based in Island Park, Idaho, servicing the Yellowstone National Park and Grand Teton backcountry region.",
    "url": "https://nomadyellowstone.com",
    "telephone": "+12087452088",
    "email": "hq@nomadyellowstone.com",
    "priceRange": "$225 - $1250",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Island Park",
      "addressRegion": "ID",
      "addressCountry": "US"
    }
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
      </body>
    </html>
  );
}
