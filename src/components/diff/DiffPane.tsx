import { useCallback, useEffect, useMemo, useRef } from 'react'
import { FileText } from 'lucide-react'

import { type CursorPosition, type PaneId } from './types'
import { cn } from '@/lib/utils'

interface DiffPaneProps {
  id: PaneId
  label: string
  value: string
  onChange: (value: string) => void
  onCursorChange: (position: CursorPosition) => void
  onFocus: () => void
  isActive?: boolean
  className?: string
}

export function DiffPane({
  id,
  label,
  value,
  onChange,
  onCursorChange,
  onFocus,
  isActive = false,
  className,
}: DiffPaneProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const lineNumbersRef = useRef<HTMLDivElement>(null)

  const lineCount = useMemo(() => {
    return Math.max(value.split('\n').length, 1)
  }, [value])

  const handleScroll = useCallback(() => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop
    }
  }, [])

  const updateCursorPosition = useCallback(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    const { selectionStart } = textarea
    const textBeforeCursor = value.substring(0, selectionStart)
    const lines = textBeforeCursor.split('\n')
    onCursorChange({ line: lines.length, column: lines[lines.length - 1].length + 1 })
  }, [value, onCursorChange])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value)
    },
    [onChange],
  )

  useEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    const handleSelect = () => updateCursorPosition()
    textarea.addEventListener('select', handleSelect)
    textarea.addEventListener('click', handleSelect)
    textarea.addEventListener('keyup', handleSelect)

    return () => {
      textarea.removeEventListener('select', handleSelect)
      textarea.removeEventListener('click', handleSelect)
      textarea.removeEventListener('keyup', handleSelect)
    }
  }, [updateCursorPosition])

  const statusText = id === 'original' ? 'read-only' : isActive ? 'editing...' : ''

  return (
    <section
      data-slot="diff-pane"
      data-pane={id}
      className={cn('flex flex-col bg-background relative h-full', className)}
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/50 sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <FileText className="size-4 text-muted-foreground" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {label}
          </span>
        </div>
        {statusText && (
          <span className="text-xs text-muted-foreground/70 italic">{statusText}</span>
        )}
      </div>

      <div className="flex flex-1 min-h-0 overflow-hidden">
        <div
          ref={lineNumbersRef}
          className="flex-shrink-0 bg-muted/20 border-r border-border overflow-hidden select-none"
          aria-hidden="true"
        >
          <div className="py-3 px-3 text-right">
            {Array.from({ length: lineCount }, (_, i) => (
              <div key={i + 1} className="text-xs leading-6 text-muted-foreground/50 font-mono h-6">
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onScroll={handleScroll}
          onFocus={onFocus}
          placeholder={`Enter ${label.toLowerCase()} here...`}
          spellCheck={false}
          className={cn(
            'flex-1 w-full h-full resize-none outline-none',
            'py-3 px-4',
            'font-mono text-sm leading-6',
            'bg-background text-foreground',
            'placeholder:text-muted-foreground/40',
          )}
        />
      </div>
    </section>
  )
}
