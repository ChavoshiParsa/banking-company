export default function TestimonialsHeading() {
  return (
    <div className='flex w-full flex-col space-y-5 text-center md:space-y-1 md:text-left'>
      <h1 className='text-[28px] font-medium md:text-[38px]'>
        Our <span className='text-shade-green-60'>Testimonials</span>
      </h1>
      <div className='flex flex-col items-center justify-between space-y-5 md:flex-row md:space-y-0'>
        <p className='max-w-[820px] text-sm font-light text-shade-grey-70 md:text-base'>
          Discover how YourBank has transformed lives with innovative digital
          solutions and personalized customer service. See why our clients trust
          us for a secure and prosperous financial journey
        </p>
        <div className='flex items-center justify-center text-nowrap rounded-full border border-shade-grey-15 bg-shade-grey-11 p-3 text-sm [&>*]:px-[18px] [&>*]:py-2.5'>
          <button className='rounded-full bg-shade-green-60 text-shade-grey-11'>
            For Individuals
          </button>
          <button>For Businesses</button>
        </div>
      </div>
    </div>
  )
}
