import { Link } from '@tanstack/react-router'
import { Play, X } from 'lucide-react'

import { type ViewMode } from './types'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

interface DiffHeaderProps {
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
  ignoreWhitespace: boolean
  onIgnoreWhitespaceChange: (ignore: boolean) => void
  onClear: () => void
  onCompare: () => void
  className?: string
}

export function DiffHeader({
  viewMode,
  onViewModeChange,
  ignoreWhitespace,
  onIgnoreWhitespaceChange,
  onClear,
  onCompare,
  className,
}: DiffHeaderProps) {
  return (
    <header
      data-slot="diff-header"
      className={cn(
        'flex items-center justify-between border-b border-border bg-card px-4 md:px-6 py-3 shrink-0',
        className,
      )}
    >
      {/* Left section: Logo, title, and view toggle */}
      <div className="flex items-center gap-4 md:gap-6">
        <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="size-5 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M9 15h6" />
            </svg>
          </div>
          <span className="hidden sm:inline text-base font-semibold text-foreground">DiffTool</span>
        </Link>

        {/* View mode toggle */}
        <div className="hidden md:flex items-center">
          <Button
            variant={viewMode === 'side-by-side' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onViewModeChange('side-by-side')}
            className="rounded-r-none border-r-0"
          >
            Side-by-side
          </Button>
          <Button
            variant={viewMode === 'inline' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onViewModeChange('inline')}
            className="rounded-l-none"
          >
            Inline
          </Button>
        </div>
      </div>

      {/* Right section: Controls */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Ignore whitespace checkbox */}
        <label className="hidden md:flex items-center gap-2 cursor-pointer select-none">
          <Checkbox
            checked={ignoreWhitespace}
            onCheckedChange={(checked) => onIgnoreWhitespaceChange(checked === true)}
          />
          <span className="text-sm text-muted-foreground">Ignore Whitespace</span>
        </label>

        {/* Clear button */}
        <Button variant="outline" size="sm" onClick={onClear} className="gap-1.5">
          <X className="size-4" />
          <span className="hidden sm:inline">Clear</span>
        </Button>

        {/* Compare button */}
        <Button onClick={onCompare} size="sm" className="gap-1.5">
          <Play className="size-4" fill="currentColor" />
          <span className="hidden sm:inline">Compare</span>
        </Button>
      </div>
    </header>
  )
}
