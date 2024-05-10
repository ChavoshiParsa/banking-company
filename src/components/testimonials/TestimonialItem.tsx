import Quote from '/public/icons/Quote.svg'

export default function TestimonialItem({
  quoter,
  quote,
}: {
  quoter: string
  quote: string
}) {
  return (
    <div className='mx-7 flex h-80 w-1/3 flex-col items-center justify-between'>
      <div className='flex w-full items-center justify-center'>
        <hr className='w-full border-shade-grey-15' />
        <div className='px-4'>
          <Quote />
        </div>
        <hr className='w-full border-shade-grey-15' />
      </div>
      <p className='text-center'>{quote}</p>
      <span className='text-center font-medium text-shade-green-60'>
        {quoter}
      </span>
    </div>
  )
}
