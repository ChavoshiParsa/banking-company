import Tick from '/public/icons/Tick.svg'

export default function HeroHeading() {
  return (
    <div className='flex w-full max-w-[600px] flex-col items-start justify-center'>
      <div className='flex items-center justify-center space-x-1 rounded-full bg-shade-grey-15 p-2 pr-4'>
        <Tick />
        <span className='text-sm font-light'>
          No LLC Required, No Credit Check.
        </span>
      </div>
      <div className='mt-4 flex flex-col items-start justify-center space-y-2.5 text-left'>
        <h1 className='text-[38px] font-medium leading-[57px]'>
          Welcome to YourBank Empowering Your{' '}
          <span className='text-shade-green-60'>Financial Journey</span>
        </h1>
        <p className='font-light text-shade-white-90'>
          At YourBank, our mission is to provide comprehensive banking solutions
          that empower individuals and businesses to achieve their financial
          goals. We are committed to delivering personalized and innovative
          services that prioritize our customers&apos; needs.
        </p>
      </div>
      <button className='mt-10 rounded-full bg-shade-green-60 px-6 py-[14px] text-sm text-shade-grey-11'>
        Open Account
      </button>
    </div>
  )
}
