import { useCallback, useState } from 'react'
import { cva } from 'class-variance-authority'

import { DiffHeader } from './DiffHeader'
import { DiffPane } from './DiffPane'
import { DiffFooter } from './DiffFooter'
import { type CursorPosition, type PaneId, type ViewMode } from './types'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

const originalPaneVariants = cva(
  'h-full min-h-0 min-w-0 transition-[width] duration-200 border-border',
  {
    variants: {
      viewMode: {
        'side-by-side': 'md:w-1/2 md:border-r',
        inline: 'md:w-0 md:overflow-hidden',
      },
    },
  },
)

const modifiedPaneVariants = cva('h-full min-h-0 min-w-0 transition-[width] duration-200', {
  variants: {
    viewMode: {
      'side-by-side': 'md:w-1/2',
      inline: 'md:w-full',
    },
  },
})

export function DiffLayout() {
  const [viewMode, setViewMode] = useState<ViewMode>('side-by-side')
  const [originalText, setOriginalText] = useState('')
  const [modifiedText, setModifiedText] = useState('')
  const [ignoreWhitespace, setIgnoreWhitespace] = useState(false)
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ line: 1, column: 1 })
  const [activePane, setActivePane] = useState<PaneId>('original')
  const [mobilePane, setMobilePane] = useState<PaneId>('original')

  const handleClear = useCallback(() => {
    setOriginalText('')
    setModifiedText('')
  }, [])

  const handleCompare = useCallback(() => {
    // TODO: Implement diff comparison
  }, [])

  const handleCursorChange = useCallback(
    (pane: PaneId) => (position: CursorPosition) => {
      if (activePane === pane) {
        setCursorPosition(position)
      }
    },
    [activePane],
  )

  const handlePaneFocus = useCallback(
    (pane: PaneId) => () => {
      setActivePane(pane)
    },
    [],
  )

  const handleMobileTabChange = useCallback((value: string) => {
    setMobilePane(value as PaneId)
  }, [])

  return (
    <div
      data-slot="diff-layout"
      className="fixed inset-0 flex flex-col overflow-hidden bg-background"
    >
      <DiffHeader
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        ignoreWhitespace={ignoreWhitespace}
        onIgnoreWhitespaceChange={setIgnoreWhitespace}
        onClear={handleClear}
        onCompare={handleCompare}
      />

      <Tabs
        value={mobilePane}
        onValueChange={handleMobileTabChange}
        className="md:hidden border-b border-border bg-card"
      >
        <TabsList className="w-full rounded-none p-1">
          <TabsTrigger value="original" className="flex-1">
            Original
          </TabsTrigger>
          <TabsTrigger value="modified" className="flex-1">
            Modified
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <main className="flex flex-1 min-h-0 overflow-hidden">
        <div
          className={cn(
            originalPaneVariants({ viewMode }),
            mobilePane === 'original' ? 'max-md:w-full' : 'max-md:hidden',
          )}
        >
          <DiffPane
            id="original"
            label="Original Text"
            value={originalText}
            onChange={setOriginalText}
            onCursorChange={handleCursorChange('original')}
            onFocus={handlePaneFocus('original')}
            isActive={activePane === 'original'}
          />
        </div>

        <div
          className={cn(
            modifiedPaneVariants({ viewMode }),
            mobilePane === 'modified' ? 'max-md:w-full' : 'max-md:hidden',
          )}
        >
          <DiffPane
            id="modified"
            label="Modified Text"
            value={modifiedText}
            onChange={setModifiedText}
            onCursorChange={handleCursorChange('modified')}
            onFocus={handlePaneFocus('modified')}
            isActive={activePane === 'modified'}
          />
        </div>
      </main>

      <DiffFooter
        cursorPosition={cursorPosition}
        diffSummary={{ additions: 0, deletions: 0 }}
        language="Javascript"
      />
    </div>
  )
}
