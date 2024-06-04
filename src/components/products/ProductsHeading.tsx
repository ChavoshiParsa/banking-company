export default function ProductsHeading() {
  return (
    <div className='flex w-full flex-col space-y-3 text-center md:space-y-0 md:text-left'>
      <h1 className='text-[28px] font-medium leading-10 md:text-[38px]'>
        Our <span className='text-shade-green-60'>Products</span>
      </h1>
      <div className='flex flex-col items-center justify-between space-y-5 md:flex-row md:space-y-0'>
        <p className='max-w-[820px] text-sm font-light text-shade-grey-70 md:text-base'>
          Discover a range of comprehensive and customizable banking products at
          YourBank, designed to suit your unique financial needs and aspirations
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
