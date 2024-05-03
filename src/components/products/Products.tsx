import ProductItem from './ProductItem'
import CheckingAccounts from '/public/icons/CheckingAccounts.svg'
import SavingsAccounts from '/public/icons/SavingsAccounts.svg'
import LoansMortgages from '/public/icons/LoansMortgages.svg'
import Divider from './Divider'

export default function Products() {
  return (
    <div className='flex w-full items-center justify-between space-x-8 '>
      <ProductItem
        Icon={CheckingAccounts}
        title='Checking Accounts'
        info='Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.'
      />
      <Divider />
      <ProductItem
        Icon={SavingsAccounts}
        title='Savings Accounts'
        info="Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
      />
      <Divider />
      <ProductItem
        Icon={LoansMortgages}
        title='Loans and Mortgages'
        info='Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.'
      />
    </div>
  )
}
