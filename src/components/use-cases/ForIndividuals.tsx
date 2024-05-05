import Image from 'next/image'
import UseCaseItem from './UseCaseItem'
import ManagingPersonalFinances from '/public/icons/ManagingPersonalFinances.svg'
import SavingFuture from '/public/icons/SavingFuture.svg'
import Homeownership from '/public/icons/Homeownership.svg'
import EducationFunding from '/public/icons/EducationFunding.svg'
import UseCasePercent from './UseCasePercent'

export default function sForIndividuals() {
  return (
    <div className='flex w-full items-center justify-center space-x-14'>
      <div className='relative grid w-1/2 grid-cols-2 gap-2.5 rounded-[20px] bg-shade-grey-11 p-10'>
        <Image
          className='absolute left-0 top-0 w-auto'
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
      <div className='flex w-1/2 flex-col items-start justify-center space-y-12'>
        <div className='flex flex-col items-start justify-center space-y-2.5'>
          <h2 className='text-[26px] font-medium'>For Individuals</h2>
          <p className='font-light text-shade-grey-70'>
            For individuals, our mortgage services pave the way to
            homeownership, and our flexible personal loans provide vital support
            during various life milestones. We also prioritize retirement
            planning, ensuring a financially secure future for our customers
          </p>
        </div>
        <div className='flex items-start justify-center space-x-12'>
          <UseCasePercent percent={78} title='Secure Retirement Planning' />
          <div className='h-24 border-r border-dashed border-shade-grey-15' />
          <UseCasePercent percent={63} title='Manageable Debt Consolidation' />
          <div className='h-24 border-r border-dashed border-shade-grey-15' />
          <UseCasePercent percent={91} title='Reducing financial burdens' />
        </div>
        <button className='rounded-full border border-shade-grey-15 bg-shade-grey-11 px-5 py-3.5 text-sm'>
          Learn More
        </button>
      </div>
    </div>
  )
}
