import { createFileRoute } from '@tanstack/react-router'

import { DiffLayout } from '@/components/diff/DiffLayout'
import { getWebAppJsonLd, jsonLdScripts, seo } from '@/lib/seo'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: seo({
      title: 'Online Diff Tool - Compare Text & Code Instantly',
      description:
        'The no-nonsense diff tool for developers. Instantly compare text and code snippets in a clean, distraction-free environment. No ads, no bloat, just the diff.',
      keywords: 'diff, compare, text diff, code diff, online diff tool, developer tools',
    }),
    scripts: jsonLdScripts(getWebAppJsonLd()),
  }),
  component: HomePage,
})

function HomePage() {
  return <DiffLayout />
}
