import { Check, FileText } from 'lucide-react'

import { type CursorPosition, type DiffSummary } from './types'
import { cn } from '@/lib/utils'

interface DiffFooterProps {
  cursorPosition: CursorPosition
  diffSummary: DiffSummary
  language?: string
  className?: string
}

export function DiffFooter({
  cursorPosition,
  diffSummary,
  language = 'Javascript',
  className,
}: DiffFooterProps) {
  return (
    <footer
      data-slot="diff-footer"
      className={cn(
        'flex items-center justify-between px-4 py-2',
        'border-t border-border bg-card',
        'text-xs text-muted-foreground',
        'shrink-0',
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <FileText className="size-4 text-muted-foreground/70" />
        <span>
          Ln {cursorPosition.line}, Col {cursorPosition.column}
        </span>
        <span className="text-muted-foreground/40">|</span>
        <span>UTF-8</span>
        <span className="text-muted-foreground/40">|</span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-yellow-500" />
          {language}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-emerald-500" />
            <span className="text-emerald-600 dark:text-emerald-400">
              {diffSummary.additions} Addition{diffSummary.additions !== 1 ? 's' : ''}
            </span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-red-500" />
            <span className="text-red-600 dark:text-red-400">
              {diffSummary.deletions} Deletion{diffSummary.deletions !== 1 ? 's' : ''}
            </span>
          </span>
        </div>
        <span className="text-muted-foreground/40">|</span>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Check className="size-3.5 text-emerald-500" />
          Ready
        </span>
      </div>
    </footer>
  )
}
