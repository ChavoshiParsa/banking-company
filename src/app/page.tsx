import Image from 'next/image'
import Tick from '/public/icons/Tick.svg'
import Plus from '/public/icons/Plus.svg'
import USD from '/public/icons/USD.svg'
import EUR from '/public/icons/EUR.svg'
import BTC from '/public/icons/BTC.svg'
import ETH from '/public/icons/ETH.svg'
import Transaction from '/public/icons/Transaction.svg'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <>
      <Image
        className='absolute -left-10 -top-20 -z-10 w-auto'
        src='/images/Dots1.png'
        alt='curved dots'
        width={540}
        height={440}
        priority
      />
      <main className='flex flex-col items-center'>
        <section
          className='flex w-full items-start justify-between px-20 py-14'
          id='hero'
        >
          <div className='flex w-full max-w-[600px] flex-col items-start justify-center'>
            <div className='flex items-center justify-center space-x-1 rounded-full bg-shade-grey-15 p-2 pr-4'>
              <Tick />
              <span className='text-sm font-light'>
                No LLC Required, No Credit Check.
              </span>
            </div>
            <div className='mt-4 flex flex-col items-start justify-center space-y-2.5 text-left'>
              <h1 className='text-[38px] font-medium leading-[57px]'>
                Welcome to YourBank Empowering Your{' '}
                <span className='text-shade-green-60'>Financial Journey</span>
              </h1>
              <p className='font-light text-shade-white-90'>
                At YourBank, our mission is to provide comprehensive banking
                solutions that empower individuals and businesses to achieve
                their financial goals. We are committed to delivering
                personalized and innovative services that prioritize our
                customers&apos; needs.
              </p>
            </div>
            <button className='mt-10 rounded-full bg-shade-green-60 px-6 py-[14px] text-sm text-shade-grey-11'>
              Open Account
            </button>
          </div>
          <div className='relative mr-32 w-full max-w-[420px] rounded-lg bg-gradient-to-br from-shade-grey-15 via-[#CAFF3333] to-shade-grey-15 p-px'>
            <div className='flex w-full flex-col items-center justify-center space-y-5 rounded-lg bg-[#1A1A1A] p-7'>
              <h2 className='self-start text-sm font-medium'>
                Your Transactions
              </h2>
              <div className='flex w-full flex-col items-center justify-center'>
                <TransactionsPopup
                  fullName='Joel Kenley'
                  type='sub'
                  amount={68}
                  className='z-20 w-full'
                />
                <TransactionsPopup
                  fullName='Mark Smith'
                  type='add'
                  amount={54}
                  className='z-10 -mt-4 w-11/12 opacity-50'
                />
                <TransactionsPopup
                  fullName='Lenen Roy'
                  type='sub'
                  amount={26}
                  className='z-0 -mt-4 w-10/12 opacity-20'
                />
              </div>
              <h2 className='self-start text-sm font-medium'>Money Exchange</h2>
              <div className='flex w-full flex-col divide-y divide-shade-grey-15 rounded-lg border border-shade-grey-15 bg-shade-grey-11'>
                <div className='flex w-full items-start justify-start divide-x divide-shade-grey-15'>
                  <div className='flex w-1/2 flex-col items-start justify-center space-y-2 p-3'>
                    <div className='flex flex-row items-center justify-start space-x-1.5'>
                      <Image
                        className='w-auto'
                        src='/images/India.png'
                        alt='India flag'
                        width={30}
                        height={30}
                        priority
                      />
                      <span className='text-xs'>INR</span>
                    </div>
                    <span className='text-xs font-light text-shade-white-90'>
                      Indian Rupees
                    </span>
                  </div>
                  <div className='flex w-1/2 flex-col items-start justify-center space-y-2 p-3'>
                    <div className='flex flex-row items-center justify-start space-x-1.5'>
                      <Image
                        className='w-auto'
                        src='/images/USA.png'
                        alt='India flag'
                        width={30}
                        height={30}
                        priority
                      />
                      <span className='text-xs'>USD</span>
                    </div>
                    <span className='text-xs font-light text-shade-white-90'>
                      United States Dollar
                    </span>
                  </div>
                </div>
                <div className='flex w-full items-start justify-start divide-x divide-shade-grey-15 text-sm'>
                  <div className='w-1/2 px-3 py-5'>5,0000</div>
                  <div className='w-1/2 px-3 py-5'>12.00</div>
                </div>
              </div>
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
        </section>
      </main>
    </>
  )
}

function TransactionsPopup({
  fullName,
  type,
  amount,
  className,
}: {
  fullName: string
  type: 'add' | 'sub'
  amount: number
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-start rounded-lg border border-shade-grey-15 bg-shade-grey-11 px-4 py-2.5',
        className,
      )}
    >
      <div className='mr-1.5 rounded-full bg-shade-green-60 p-2'>
        <Transaction />
      </div>
      <div className='flex flex-col items-start justify-between'>
        <h3 className='text-xs font-light'>Transaction</h3>
        <span className='text-sm'>{fullName}</span>
      </div>
      <div className='ml-auto self-end font-medium'>{`${type === 'add' ? '+' : '-'}$${amount.toFixed(2)}`}</div>
    </div>
  )
}
