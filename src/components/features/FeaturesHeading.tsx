export default function FeaturesHeading() {
  return (
    <div className='flex flex-col items-center justify-center space-y-2.5 text-center md:w-10/12 md:items-start md:text-left'>
      <h1 className='text-[28px] font-medium md:text-[38px]'>
        Our <span className='text-shade-green-60'>Features</span>
      </h1>
      <p className='text-sm font-light text-shade-grey-70 md:text-base'>
        Experience a host of powerful features at YourBank, including seamless
        online banking, secure transactions, and personalized financial
        insights, all designed to enhance your banking experience
      </p>
    </div>
  )
}
