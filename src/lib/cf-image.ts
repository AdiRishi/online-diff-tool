const CF_DELIVERY_BASE = 'https://imagedelivery.net/dUGyBDwDArlYQF97CccBHg'

const cfImages = {
  og: '', // TODO: Add OG image hash
} as const

export type CfImageId = keyof typeof cfImages

export const getCfImageUrl = (id: CfImageId, variant: 'public' = 'public') =>
  `${CF_DELIVERY_BASE}/${cfImages[id]}/${variant}`
