/**
 * Sitewide LocalBusiness / TouristAttraction JSON-LD schema.
 * Injected once in the root layout.
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['SportsActivityLocation', 'LocalBusiness', 'TouristAttraction'],
  '@id': 'https://nomadyellowstone.com/#business',
  name: 'Nomad Yellowstone',
  description:
    'Guided passenger-only ATV and UTV tours in Island Park, Idaho, 20 minutes from the West Yellowstone entrance. Built for families, seniors, and non-drivers who want backcountry access without driving themselves.',
  url: 'https://nomadyellowstone.com',
  logo: 'https://nomadyellowstone.com/logo.png',
  image: 'https://nomadyellowstone.com/sawtelle.png',
  telephone: '+12087452088',
  email: 'hq@nomadyellowstone.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Meet point in Island Park',
    addressLocality: 'Island Park',
    addressRegion: 'ID',
    postalCode: '83429',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.4221,
    longitude: -111.3733,
  },
  areaServed: [
    { '@type': 'City', name: 'West Yellowstone', address: { '@type': 'PostalAddress', addressRegion: 'MT' } },
    { '@type': 'City', name: 'Island Park', address: { '@type': 'PostalAddress', addressRegion: 'ID' } },
    { '@type': 'City', name: 'Ashton', address: { '@type': 'PostalAddress', addressRegion: 'ID' } },
    { '@type': 'City', name: 'Bozeman', address: { '@type': 'PostalAddress', addressRegion: 'MT' } },
    { '@type': 'City', name: 'Big Sky', address: { '@type': 'PostalAddress', addressRegion: 'MT' } },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '19:00',
      validFrom: '2026-05-15',
      validThrough: '2026-10-31',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '3',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
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
  ],
  sameAs: [
    'https://www.instagram.com/nomadyellowstone',
    'https://www.facebook.com/nomadyellowstone',
    'https://www.tripadvisor.com/AttractionProductReview-g35494-d33307035-Guided_ATV_Adventure_Island_Park_20_Mins_from_West_Yellowstone-Island_Park_Idaho.html',
  ],
};
