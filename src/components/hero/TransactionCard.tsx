import Image from 'next/image'
import TransactionsPopup from './TransactionPopup'
import Plus from '/public/icons/Plus.svg'
import USD from '/public/icons/USD.svg'
import EUR from '/public/icons/EUR.svg'
import BTC from '/public/icons/BTC.svg'
import ETH from '/public/icons/ETH.svg'
import ExchangeTable from './ExchangeTable'

export default function TransactionCard() {
  return (
    <div className='relative mr-32 w-full max-w-[420px] rounded-lg bg-gradient-to-br from-shade-grey-15 via-[#CAFF3333] to-shade-grey-15 p-px'>
      <div className='relative flex w-full flex-col items-center justify-center space-y-5 rounded-lg bg-[#1A1A1A] p-7'>
        <h2 className='self-start text-sm font-medium'>Your Transactions</h2>
        <div className='flex w-full flex-col items-center justify-center'>
          <TransactionsPopup
            fullName='Joel Kenley'
            type='sub'
            amount={68}
            className='z-40 w-full'
          />
          <TransactionsPopup
            fullName='Mark Smith'
            type='add'
            amount={54}
            className='z-30 -mt-4 w-11/12 opacity-50'
          />
          <TransactionsPopup
            fullName='Lenen Roy'
            type='sub'
            amount={26}
            className='z-20 -mt-4 w-10/12 opacity-20'
          />
        </div>
        <h2 className='self-start text-sm font-medium'>Money Exchange</h2>
        <ExchangeTable />
        <button className='w-full rounded-full bg-[#22251B] px-5 py-3 text-xs text-shade-green-65'>
          Exchange
        </button>
      </div>
      <div className='absolute -left-14 -top-11 flex items-center justify-center space-x-2 rounded-lg bg-[#22251B] px-3.5 py-3'>
        <div className='rounded-full bg-shade-green-60 p-2'>
          <Plus />
        </div>
        <div className='flex flex-col items-start justify-center space-y-1'>
          <span className='text-sm'>+ $5000,00</span>
          <span className='text-xs font-light'>Monthly Income</span>
        </div>
      </div>
      <Image
        className='absolute -right-44 -top-2 -z-10 w-auto'
        src='/images/Arrows.png'
        alt='curved dots'
        width={540}
        height={440}
        priority
      />
      <div className='absolute -bottom-16 -right-12 flex items-center justify-center space-x-2 rounded-full bg-[#22251B] p-1.5 pl-4'>
        <span className='text-xs'>Supported Currency</span>
        <div className='flex items-center justify-center space-x-1 rounded-full border border-shade-grey-15 bg-shade-grey-10 p-1'>
          <USD />
          <EUR />
          <BTC />
          <ETH />
        </div>
      </div>
    </div>
  )
}
