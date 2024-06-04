import { FC, SVGProps } from 'react'

export default function UseCaseItem({
  Icon,
  title,
}: {
  Icon: FC<SVGProps<SVGElement>>
  title: string
}) {
  return (
    <div className='z-10 flex flex-col items-center justify-center space-y-[14px] rounded-xl border border-shade-grey-15 bg-shade-grey-10 px-3.5 py-5 md:p-6'>
      <Icon />
      <h2 className='text-center text-sm md:text-base'>{title}</h2>
    </div>
  )
}
