import TLArrow from '/public/icons/TLArrow.svg'

export default function FeatureItem({
  title,
  info,
}: {
  title: string
  info: string
}) {
  return (
    <div className='flex flex-col space-y-6 rounded-[10px] border border-shade-grey-15 bg-shade-grey-11 p-10'>
      <div className='flex w-full justify-between'>
        <h2 className='text-lg'>{title}</h2>
        <TLArrow />
      </div>
      <p className='font-light text-shade-grey-70'>{info}</p>
    </div>
  )
}
