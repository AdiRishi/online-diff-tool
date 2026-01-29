import { defineNitroConfig } from 'nitro/config'

export default defineNitroConfig({
  compatibilityDate: '2026-01-29',
  preset: 'cloudflare_module',
  cloudflare: {
    deployConfig: true,
    wrangler: {
      name: 'online-diff-tool',
      observability: {
        enabled: true,
        head_sampling_rate: 1,
      },
      // @ts-expect-error traces is valid wrangler config
      traces: {
        enabled: true,
      },
      preview_urls: true,
    },
  },
})
