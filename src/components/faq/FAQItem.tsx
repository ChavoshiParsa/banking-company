export default function FAQItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  return (
    <div className='flex flex-col items-start justify-start space-y-6 rounded-[10px] border border-shade-grey-15 p-7 md:p-10'>
      <h2 className='text-lg font-medium'>{question}</h2>
      <div className='w-full border-t border-shade-grey-15' />
      <p className='text-sm font-light text-shade-grey-70 md:text-base'>
        {answer}
      </p>
    </div>
  )
}
