import Image from 'next/image'
import UseCaseItem from './UseCaseItem'
import ManagingPersonalFinances from '/public/icons/ManagingPersonalFinances.svg'
import SavingFuture from '/public/icons/SavingFuture.svg'
import Homeownership from '/public/icons/Homeownership.svg'
import EducationFunding from '/public/icons/EducationFunding.svg'
import UseCasePercent from './UseCasePercent'

export default function ForIndividuals() {
  return (
    <div className='flex w-full flex-col items-center justify-center space-y-10 md:flex-row md:space-x-14 md:space-y-0'>
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
          Icon={ManagingPersonalFinances}
          title='Managing Personal Finances'
        />
        <UseCaseItem Icon={SavingFuture} title='Saving for the Future' />
        <UseCaseItem Icon={Homeownership} title='Homeownership' />
        <UseCaseItem Icon={EducationFunding} title='Education Funding' />
      </div>
      <div className='flex flex-col items-center justify-center space-y-12 md:w-1/2 md:items-start'>
        <div className='flex flex-col items-center justify-center space-y-2.5 text-center md:items-start md:text-left'>
          <h2 className='text-xl font-medium md:text-[26px]'>
            For Individuals
          </h2>
          <p className='text-sm font-light text-shade-grey-70 md:text-base'>
            For individuals, our mortgage services pave the way to
            homeownership, and our flexible personal loans provide vital support
            during various life milestones. We also prioritize retirement
            planning, ensuring a financially secure future for our customers
          </p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-7 md:flex-row md:items-start md:space-x-12 md:space-y-0'>
          <UseCasePercent percent={78} title='Secure Retirement Planning' />
          <div className='hidden h-24 border-r border-dashed border-shade-grey-15 md:block' />
          <div className='block w-full border-t border-dashed border-shade-grey-15 md:hidden' />
          <UseCasePercent percent={63} title='Manageable Debt Consolidation' />
          <div className='hidden h-24 border-r border-dashed border-shade-grey-15 md:block' />
          <div className='block w-full border-t border-dashed border-shade-grey-15 md:hidden' />
          <UseCasePercent percent={91} title='Reducing financial burdens' />
        </div>
        <button className='rounded-full border border-shade-grey-15 bg-shade-grey-11 px-5 py-3.5 text-sm'>
          Learn More
        </button>
      </div>
    </div>
  )
}
