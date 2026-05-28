export interface ProductInput {
  name: string;
  description: string;
  price: string;
  url: string;
  image?: string;
}

/**
 * Generates a Product JSON-LD schema with an Offer.
 */
export function buildProduct(input: ProductInput) {
  return {
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
}

/** Pre-built Signature Tour product schema */
export const signatureTourProduct = buildProduct({
  name: 'Signature Tour — Guided Passenger-Only ATV Adventure',
  description:
    '2–3 hour fully guided, passenger-only ATV tour in Island Park, Idaho, 20 minutes from the West Yellowstone entrance to Yellowstone National Park. Ages 5+. Professional driver, safety gear, and media package included.',
  price: '179',
  url: 'https://nomadyellowstone.com/booking',
  image: 'https://nomadyellowstone.com/sawtelle.png',
});

/** Pre-built The Legend (Private Buyout) product schema */
export const legendProduct = buildProduct({
  name: 'The Legend — Private Buyout ATV Tour',
  description:
    'Private buyout ATV tour for up to 5 passengers near Yellowstone. Custom routes, dedicated guide, full media package.',
  price: '1997',
  url: 'https://nomadyellowstone.com/booking',
  image: 'https://nomadyellowstone.com/sawtelle.png',
});
