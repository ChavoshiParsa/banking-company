import { cn } from '@/lib/utils'
import Transaction from '/public/icons/Transaction.svg'

export default function TransactionsPopup({
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
