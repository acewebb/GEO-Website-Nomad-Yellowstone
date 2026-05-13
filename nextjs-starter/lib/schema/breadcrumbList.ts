export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generates a BreadcrumbList JSON-LD schema object.
 * Always starts with "Home" — pass remaining crumbs as items.
 */
export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  const allItems = [
    { name: 'Home', url: 'https://nomadyellowstone.com/' },
    ...items,
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
