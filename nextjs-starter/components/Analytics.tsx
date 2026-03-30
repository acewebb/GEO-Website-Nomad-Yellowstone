'use client';

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <VercelAnalytics />

      {/* Google Analytics Integration */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-C1CPRHB11Z"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C1CPRHB11Z');
          `,
        }}
      />
    </>
  );
}
