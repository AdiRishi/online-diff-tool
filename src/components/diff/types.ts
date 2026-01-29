export type ViewMode = 'side-by-side' | 'inline'
export type PaneId = 'original' | 'modified'

export interface CursorPosition {
  line: number
  column: number
}

export interface DiffSummary {
  additions: number
  deletions: number
}
