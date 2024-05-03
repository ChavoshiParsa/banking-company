import Image from 'next/image'

export default function ExchangeTable() {
  return (
    <div className='flex w-full flex-col divide-y divide-shade-grey-15 rounded-lg border border-shade-grey-15 bg-shade-grey-11'>
      <div className='flex w-full items-start justify-start divide-x divide-shade-grey-15'>
        <div className='flex w-1/2 flex-col items-start justify-center space-y-2 p-3'>
          <div className='flex flex-row items-center justify-start space-x-1.5'>
            <Image
              className='w-auto'
              src='/images/India.png'
              alt='India flag'
              width={30}
              height={30}
              priority
            />
            <span className='text-xs'>INR</span>
          </div>
          <span className='text-xs font-light text-shade-white-90'>
            Indian Rupees
          </span>
        </div>
        <div className='flex w-1/2 flex-col items-start justify-center space-y-2 p-3'>
          <div className='flex flex-row items-center justify-start space-x-1.5'>
            <Image
              className='w-auto'
              src='/images/USA.png'
              alt='India flag'
              width={30}
              height={30}
              priority
            />
            <span className='text-xs'>USD</span>
          </div>
          <span className='text-xs font-light text-shade-white-90'>
            United States Dollar
          </span>
        </div>
      </div>
      <div className='flex w-full items-start justify-start divide-x divide-shade-grey-15 text-sm'>
        <div className='w-1/2 px-3 py-5'>5,0000</div>
        <div className='w-1/2 px-3 py-5'>12.00</div>
      </div>
    </div>
  )
}
