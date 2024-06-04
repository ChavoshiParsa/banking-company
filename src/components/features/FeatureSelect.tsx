export default function FeatureSelect() {
  return (
    <div className='flex flex-row items-center justify-center space-x-5 text-nowrap rounded-[10px] bg-shade-grey-11 p-5 md:flex-col md:space-x-0 md:space-y-5 md:p-10'>
      <button className='w-full rounded-full border border-shade-grey-15 bg-shade-grey-10 px-5 py-3.5 text-left text-sm text-shade-green-60'>
        Online Banking
      </button>
      <button className='w-full rounded-full border border-shade-grey-15 px-5 py-3.5 text-left text-sm'>
        Financial Tools
      </button>
      <button className='w-full rounded-full border border-shade-grey-15 px-5 py-3.5 text-left text-sm'>
        Customer Support
      </button>
    </div>
  )
}
