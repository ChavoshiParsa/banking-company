import ArrowRight from '/public/icons/ArrowRight.svg'
import ArrowLeft from '/public/icons/ArrowLeft.svg'
import TestimonialItem from './TestimonialItem'

export default function TestimonialsSlider() {
  return (
    <div className='relative flex w-full items-center justify-between space-x-4'>
      <button className='rounded-full border border-shade-grey-15 bg-shade-grey-11 p-3'>
        <ArrowLeft />
      </button>
      <div className='relative flex w-full items-center justify-between'>
        <div className='absolute inset-0 z-10 bg-gradient-to-l from-shade-grey-10 via-transparent to-shade-grey-10' />
        <TestimonialItem
          quote='YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze. '
          quoter='Sara T'
        />
        <TestimonialItem
          quote='I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.'
          quoter='John D'
        />
        <TestimonialItem
          quote="I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind."
          quoter='Emily G'
        />
      </div>
      <button className='rounded-full border border-shade-grey-15 bg-shade-grey-11 p-3'>
        <ArrowRight />
      </button>
    </div>
  )
}
