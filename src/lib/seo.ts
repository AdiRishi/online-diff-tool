import { getCfImageUrl } from './cf-image'

type SeoParams = {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
}

type JsonLdSchema = Record<string, unknown>

const SITE_URL = 'https://onlinediff.dev'
const SITE_NAME = 'Online Diff Tool'

/**
 * Convert JSON-LD schema objects to script tags for TanStack head
 */
export const jsonLdScripts = (schemas: JsonLdSchema | JsonLdSchema[]) => {
  const schemaArray = Array.isArray(schemas) ? schemas : [schemas]
  return schemaArray.map((schema) => ({
    type: 'application/ld+json',
    children: JSON.stringify(schema),
  }))
}

export const seo = ({ title, description, keywords, image, url = SITE_URL }: SeoParams) => [
  { title },
  { name: 'description', content: description },
  ...(keywords ? [{ name: 'keywords', content: keywords }] : []),
  // Open Graph
  { property: 'og:title', content: title },
  { property: 'og:description', content: description },
  ...(image ? [{ property: 'og:image', content: image }] : []),
  { property: 'og:url', content: url },
  { property: 'og:type', content: 'website' },
  { property: 'og:site_name', content: SITE_NAME },
  // Twitter Card
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: title },
  { name: 'twitter:description', content: description },
  ...(image ? [{ name: 'twitter:image', content: image }] : []),
  // Additional
  { name: 'theme-color', content: '#6366f1' },
  { name: 'author', content: SITE_NAME },
]

/**
 * Generate JSON-LD structured data for WebApplication schema
 * This helps Google understand the site and can enable rich results
 */
export const getWebAppJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: SITE_NAME,
  url: SITE_URL,
  description:
    'The no-nonsense diff tool for developers. Instantly compare text and code snippets in a clean, distraction-free environment.',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Side-by-side diff view',
    'Inline diff view',
    'Syntax highlighting',
    'Dark and light themes',
    'No ads or bloat',
  ],
  screenshot: getCfImageUrl('og'),
  aggregateRating: undefined,
})
