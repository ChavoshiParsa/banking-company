import { cn } from '@/lib/utils'

export default function Divider({ color }: { color: string }) {
  return <div className={cn('w-full border-t', color)} />
}
