import Tick from '/public/icons/Tick.svg'

export default function HeroHeading() {
  return (
    <div className='flex w-full max-w-[600px] flex-col items-center justify-center md:items-start'>
      <div className='flex items-center justify-center space-x-1 rounded-full bg-shade-grey-15 py-2 pl-2 pr-4'>
        <Tick />
        <span className='text-sm font-light'>
          No LLC Required, No Credit Check.
        </span>
      </div>
      <div className='mt-4 flex flex-col items-start justify-center space-y-2.5 text-center md:text-left'>
        <h1 className='text-[28px] font-medium leading-[42px] md:text-[38px] md:leading-[57px]'>
          Welcome to YourBank Empowering Your{' '}
          <span className='text-shade-green-60'>Financial Journey</span>
        </h1>
        <p className='text-sm font-light leading-5 text-shade-white-90 md:text-base'>
          At YourBank, our mission is to provide comprehensive banking solutions
          that empower individuals and businesses to achieve their financial
          goals. We are committed to delivering personalized and innovative
          services that prioritize our customers&apos; needs.
        </p>
      </div>
      <button className='mt-7 rounded-full bg-shade-green-60 px-6 py-[14px] text-sm text-shade-grey-11 md:mt-10'>
        Open Account
      </button>
    </div>
  )
}
