export type ProjectStatus = 'complete' | 'active' | 'in-progress' | 'coming-soon'

interface StatusBadgeProps {
  status: ProjectStatus
}

const STYLES: Record<ProjectStatus, string> = {
  complete: 'bg-iron text-mist',
  active: 'bg-sky/20 text-sky',
  'in-progress': 'bg-amber-500/20 text-amber-300',
  'coming-soon': 'bg-iron text-mist italic',
}

const LABELS: Record<ProjectStatus, string> = {
  complete: 'Complete',
  active: 'Active',
  'in-progress': 'In Progress',
  'coming-soon': 'Coming Soon',
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-mono ${STYLES[status]}`}
    >
      {LABELS[status]}
    </span>
  )
}
