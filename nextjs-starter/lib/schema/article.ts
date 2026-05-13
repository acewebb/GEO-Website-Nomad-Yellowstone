export interface ArticleInput {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
}

/**
 * Generates an Article JSON-LD schema from blog post frontmatter.
 */
export function buildArticle(input: ArticleInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    image: input.image.startsWith('http')
      ? input.image
      : `https://nomadyellowstone.com${input.image}`,
    author: {
      '@type': 'Organization',
      name: 'Nomad Yellowstone',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nomad Yellowstone',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nomadyellowstone.com/logo.png', // TODO: confirm logo path exists at this URL
      },
    },
    datePublished: input.datePublished,
    dateModified: input.dateModified || input.datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://nomadyellowstone.com/intel/${input.slug}`,
    },
  };
}
