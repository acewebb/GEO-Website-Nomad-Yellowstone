import React from 'react';

interface JsonLdProps {
  data: object | object[];
}

/**
 * Server component that renders JSON-LD structured data as a <script> tag.
 * Accepts a single schema object or an array of objects.
 * Must be used in server components for SSR — do not add 'use client'.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
