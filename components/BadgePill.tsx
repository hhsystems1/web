import { Badge } from './ui/badge'
import { cn } from '../lib/utils'

interface BadgePillProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'secondary' | 'outline' | 'destructive'
}

export function BadgePill({ children, className, variant = 'default' }: BadgePillProps) {
  return (
    <Badge 
      variant={variant}
      className={cn(
        'px-3 py-1 rounded-full text-sm font-medium',
        'bg-[#5AE3FF]/10 text-[#5AE3FF] border border-[#5AE3FF]/20',
        'hover:bg-[#5AE3FF]/20 transition-colors',
        className
      )}
    >
      {children}
    </Badge>
  )
}
