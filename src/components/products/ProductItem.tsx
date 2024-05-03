import { FC, SVGProps } from 'react'

export default function ProductItem({
  Icon,
  title,
  info,
}: {
  Icon: FC<SVGProps<SVGElement>>
  title: string
  info: string
}) {
  return (
    <div className='flex flex-col items-center justify-start space-y-6 text-center'>
      <Icon />
      <h2 className='text-xl'>{title}</h2>
      <p className='font-light text-shade-grey-70'>{info}</p>
    </div>
  )
}
