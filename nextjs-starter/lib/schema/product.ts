export interface ProductInput {
  name: string;
  description: string;
  price: string;
  url: string;
  image?: string;
  ratingValue?: string;
  reviewCount?: string;
  reviews?: Array<{
    '@type': string;
    author: { '@type': string; name: string };
    reviewRating: { '@type': string; ratingValue: string };
    reviewBody: string;
  }>;
}

/**
 * Generates a Product JSON-LD schema with an Offer and AggregateRating.
 */
export function buildProduct(input: ProductInput) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: input.name,
    description: input.description,
    image: input.image || 'https://nomadyellowstone.com/sawtelle.png',
    brand: {
      '@type': 'Brand',
      name: 'Nomad Yellowstone',
    },
    offers: {
      '@type': 'Offer',
      url: input.url,
      priceCurrency: 'USD',
      price: input.price,
      priceValidUntil: '2026-10-31',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-05-15',
    },
  };

  if (input.ratingValue && input.reviewCount) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: input.ratingValue,
      reviewCount: input.reviewCount,
      bestRating: '5',
      worstRating: '1',
    };
  }

  if (input.reviews) {
    schema.review = input.reviews;
  }

  return schema;
}

const tripAdvisorReviews = [
  {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'James D.' },
    reviewRating: { '@type': 'Rating', ratingValue: '5' },
    reviewBody: 'My teenage kids put their phones down. Guide knew every peak and every flower.',
  },
  {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Sarah L.' },
    reviewRating: { '@type': 'Rating', ratingValue: '5' },
    reviewBody: 'We saw a grizzly bear on the Morning Scout tour!',
  },
  {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Mike K.' },
    reviewRating: { '@type': 'Rating', ratingValue: '5' },
    reviewBody: 'Being driven was so relaxing. We just enjoyed the views.',
  },
];

/** Pre-built Signature Tour product schema */
export const signatureTourProduct = buildProduct({
  name: 'Signature Tour — Guided Passenger-Only ATV Adventure',
  description:
    '2–3 hour fully guided, passenger-only ATV tour in Island Park, Idaho, 20 minutes from the West Yellowstone entrance to Yellowstone National Park. Ages 5+. Professional driver, safety gear, and media package included.',
  price: '179',
  url: 'https://nomadyellowstone.com/booking',
  image: 'https://nomadyellowstone.com/sawtelle.png',
  ratingValue: '5.0',
  reviewCount: '3',
  reviews: tripAdvisorReviews,
});

/** Pre-built The Legend (Private Buyout) product schema */
export const legendProduct = buildProduct({
  name: 'Private Tour Buyout — Exclusive Backcountry UTV Access',
  description:
    'Private buyout ATV tour for up to 5 passengers near Yellowstone. Custom routes, dedicated guide, full media package.',
  price: '1997',
  url: 'https://nomadyellowstone.com/booking?buyout=true',
  image: 'https://nomadyellowstone.com/sawtelle.png',
  ratingValue: '5.0',
  reviewCount: '3',
  reviews: tripAdvisorReviews,
});
