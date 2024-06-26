import ProductItem from './ProductItem'
import CheckingAccounts from '/public/icons/CheckingAccounts.svg'
import SavingsAccounts from '/public/icons/SavingsAccounts.svg'
import LoansMortgages from '/public/icons/LoansMortgages.svg'

export default function Products() {
  return (
    <div className='flex w-full flex-col items-center justify-between space-y-7 md:flex-row md:space-x-8 md:space-y-0'>
      <ProductItem
        Icon={CheckingAccounts}
        title='Checking Accounts'
        info='Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.'
      />
      <div className='hidden h-72 border-r border-shade-grey-15 md:block' />
      <div className='block w-full border-t border-shade-grey-15 md:hidden' />
      <ProductItem
        Icon={SavingsAccounts}
        title='Savings Accounts'
        info="Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
      />
      <div className='hidden h-72 border-r border-shade-grey-15 md:block' />
      <div className='block w-full border-t border-shade-grey-15 md:hidden' />
      <ProductItem
        Icon={LoansMortgages}
        title='Loans and Mortgages'
        info='Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.'
      />
    </div>
  )
}
