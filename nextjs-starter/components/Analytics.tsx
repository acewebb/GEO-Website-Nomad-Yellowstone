'use client';

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

export default function Analytics() {
  return (
    <>
      <VercelAnalytics />
      {/* 
        PLACEHOLDER: Google Analytics / PostHog Integration
        To activate, add your Measurement ID below.
      */}
      {/* 
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }}
      />
      */}
    </>
  );
}
