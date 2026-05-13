export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generates a FAQPage JSON-LD schema from an array of Q&A pairs.
 */
export function buildFAQPage(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
