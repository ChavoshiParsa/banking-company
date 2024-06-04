import Image from 'next/image'
import UseCaseItem from './UseCaseItem'
import UseCasePercent from './UseCasePercent'
import StartupsEntrepreneurs from '/public/icons/StartupsEntrepreneurs.svg'
import CashFlowManagement from '/public/icons/CashFlowManagement.svg'
import BusinessExpansion from '/public/icons/BusinessExpansion.svg'
import PaymentSolutions from '/public/icons/PaymentSolutions.svg'

export default function ForBusiness() {
  return (
    <div className='m flex w-full flex-col-reverse items-center justify-center space-y-10 space-y-reverse md:flex-row md:space-x-14 md:space-y-0'>
      <div className='flex flex-col items-center justify-center space-y-12 md:w-1/2 md:items-start'>
        <div className='flex flex-col items-center justify-center space-y-2.5 text-center md:items-start md:text-left'>
          <h2 className='text-xl font-medium md:text-[26px]'>For Business</h2>
          <p className='text-sm font-light text-shade-grey-70 md:text-base'>
            For businesses, we empower growth with working capital solutions
            that optimize cash flow, and our tailored financing options fuel
            business expansion. Whatever your financial aspirations, YourBank is
            committed to providing the right tools and support to achieve them
          </p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-7 md:flex-row md:items-start md:space-x-12 md:space-y-0'>
          <UseCasePercent percent={65} title='Cash Flow Management' />
          <div className='hidden h-24 border-r border-dashed border-shade-grey-15 md:block' />
          <div className='block w-full border-t border-dashed border-shade-grey-15 md:hidden' />
          <UseCasePercent percent={70} title='Drive Business Expansion' />
          <div className='hidden h-24 border-r border-dashed border-shade-grey-15 md:block' />
          <div className='block w-full border-t border-dashed border-shade-grey-15 md:hidden' />
          <UseCasePercent percent={45} title='Streamline payroll processing' />
        </div>
        <button className='rounded-full border border-shade-grey-15 bg-shade-grey-11 px-5 py-3.5 text-sm'>
          Learn More
        </button>
      </div>
      <div className='relative grid grid-cols-2 gap-2.5 rounded-[20px] bg-shade-grey-11 p-5 md:w-1/2 md:p-10'>
        <Image
          className='absolute left-0 top-0 w-40 md:w-auto'
          src='/images/Dots2.png'
          alt='dots'
          width={540}
          height={440}
          priority
        />
        <UseCaseItem
          Icon={StartupsEntrepreneurs}
          title='Startups and Entrepreneurs'
        />
        <UseCaseItem Icon={CashFlowManagement} title='Cash Flow Management' />
        <UseCaseItem Icon={BusinessExpansion} title='Business Expansion' />
        <UseCaseItem Icon={PaymentSolutions} title='Payment Solutions' />
      </div>
    </div>
  )
}
