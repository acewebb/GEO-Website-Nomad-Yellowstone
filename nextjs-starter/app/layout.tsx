import type { Metadata } from "next";
import { Oswald, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
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
  title: "Nomad Yellowstone | Private Guided Expeditions",
  description: "Experience the Yellowstone backcountry without the crowds. Strictly guided, open-air ATV expeditions. Passenger-only, premium adventure tours.",
};

import Analytics from "@/components/Analytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${inter.variable} ${spaceMono.variable} antialiased bg-background text-foreground selection:bg-accent selection:text-white`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
