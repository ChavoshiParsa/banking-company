import Quote from '/public/icons/Quote.svg'

export default function TestimonialItem({
  quoter,
  quote,
}: {
  quoter: string
  quote: string
}) {
  return (
    <div className='flex h-72 w-full flex-col items-center justify-between rounded-xl border border-shade-grey-15 p-5 md:mx-7 md:h-80 md:w-1/3 md:rounded-none md:border-none md:p-0'>
      <div className='flex w-full items-center justify-center'>
        <hr className='w-full border-shade-grey-15' />
        <div className='px-4'>
          <Quote />
        </div>
        <hr className='w-full border-shade-grey-15' />
      </div>
      <p className='text-center text-sm md:text-base'>{quote}</p>
      <span className='text-center font-medium text-shade-green-60'>
        {quoter}
      </span>
    </div>
  )
}
