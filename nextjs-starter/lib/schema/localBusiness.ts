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
  priceRange: '$179 - $1997',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[TODO: ADD MEET-POINT STREET ADDRESS]',
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
  sameAs: [
    'https://www.instagram.com/nomadyellowstone',
    'https://www.facebook.com/nomadyellowstone',
    'https://www.tripadvisor.com/AttractionProductReview-g35494-d33307035-Guided_ATV_Adventure_Island_Park_20_Mins_from_West_Yellowstone-Island_Park_Idaho.html',
    // TODO: add Google Business Profile URL once claimed
  ],
};
