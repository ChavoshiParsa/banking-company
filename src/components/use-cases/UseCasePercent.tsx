export default function UseCasePercent({
  percent,
  title,
}: {
  percent: number
  title: string
}) {
  return (
    <div className='flex flex-col items-start justify-center'>
      <span className='text-[40px] font-medium text-shade-green-60'>
        {percent}%
      </span>
      <h3 className='text-sm font-light text-shade-grey-70'>{title}</h3>
    </div>
  )
}
