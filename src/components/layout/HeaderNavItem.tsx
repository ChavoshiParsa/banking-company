'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function HeaderNavItem({
  name,
  link,
}: {
  name: string
  link: string
}) {
  const segment = useSelectedLayoutSegment()
  let params = segment === null ? '' : segment

  return (
    <li
      className={cn(
        `${params === link && 'rounded-[82px] bg-shade-grey-15 px-[18px] py-[10px]'}`,
      )}
    >
      <Link href={`/${link}`}>{name}</Link>
    </li>
  )
}
