import Link from 'next/link'

export default function NavItem({
  name,
  link,
}: {
  name: string
  link: string
}) {
  return (
    <li>
      <Link href={`/${link}`}>{name}</Link>
    </li>
  )
}
