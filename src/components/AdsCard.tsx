import Image from 'next/image'

export default function AdsCard() {
  return (
    <div className='relative flex w-full flex-col items-center justify-between rounded-[20px] border border-shade-grey-15 bg-shade-grey-11 p-[30px] md:flex-row md:p-[60px]'>
      <Image
        className='absolute left-0 top-0 z-0 h-full object-cover opacity-50'
        src='/images/Stars.png'
        alt='stars'
        width={540}
        height={440}
        priority
      />
      <Image
        className='absolute left-0 top-0 z-20'
        src='/images/Dots2.png'
        alt='dots'
        width={202}
        height={192}
        priority
      />
      <div className='absolute inset-0 z-10 w-7/12 bg-gradient-to-l from-shade-grey-11 to-transparent' />
      <div className='z-30 mb-6 flex flex-col items-center justify-center space-y-3 text-center md:mb-0  md:mr-20 md:items-start md:text-left'>
        <h1 className='text-2xl md:text-3xl'>
          Start your financial journey with{' '}
          <span className='text-shade-green-60'>YourBank today!</span>
        </h1>
        <p className='text-sm font-light text-shade-grey-70 md:text-base'>
          Ready to take control of your finances? Join YourBank now, and let us
          help you achieve your financial goals with our tailored solutions and
          exceptional customer service
        </p>
      </div>
      <button className='z-30 text-nowrap rounded-full bg-shade-green-60 px-5 py-3.5 text-sm text-shade-grey-11'>
        Open Account
      </button>
    </div>
  )
}
