export default function FAQHeading() {
  return (
    <div className='flex flex-col items-center justify-center space-y-2 text-center md:items-start md:text-right'>
      <h1 className='text-[28px] font-medium md:text-[38px]'>
        <span className='text-shade-green-60'>Frequently</span> Asked Questions
      </h1>
      <p className='text-sm font-light text-shade-grey-70 md:text-base'>
        Still you have any questions? Contact our Team via support@yourbank.com
      </p>
    </div>
  )
}
