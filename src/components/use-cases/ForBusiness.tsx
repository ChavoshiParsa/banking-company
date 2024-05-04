import Image from 'next/image'
import UseCaseItem from './UseCaseItem'
import Divider from './Divider'
import UseCasePercent from './UseCasePercent'
import StartupsEntrepreneurs from '/public/icons/StartupsEntrepreneurs.svg'
import CashFlowManagement from '/public/icons/CashFlowManagement.svg'
import BusinessExpansion from '/public/icons/BusinessExpansion.svg'
import PaymentSolutions from '/public/icons/PaymentSolutions.svg'

export default function ForBusiness() {
  return (
    <div className='flex w-full items-center justify-center space-x-14 '>
      <div className='flex w-1/2 flex-col items-start justify-center space-y-12'>
        <div className='flex flex-col items-start justify-center space-y-2.5'>
          <h2 className='text-[26px] font-medium'>For Business</h2>
          <p className='font-light text-shade-grey-70'>
            For businesses, we empower growth with working capital solutions
            that optimize cash flow, and our tailored financing options fuel
            business expansion. Whatever your financial aspirations, YourBank is
            committed to providing the right tools and support to achieve them
          </p>
        </div>
        <div className='flex items-start justify-center space-x-12'>
          <UseCasePercent percent={65} title='Cash Flow Management' />
          <Divider />
          <UseCasePercent percent={70} title='Drive Business Expansion' />
          <Divider />
          <UseCasePercent percent={45} title='Streamline payroll processing' />
        </div>
        <button className='rounded-full border border-shade-grey-15 bg-shade-grey-11 px-5 py-3.5 text-sm'>
          Learn More
        </button>
      </div>
      <div className='relative grid w-1/2 grid-cols-2 gap-2.5 rounded-[20px] bg-shade-grey-11 p-10'>
        <Image
          className='absolute right-0 top-0 w-auto'
          src='/images/Dots3.png'
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
