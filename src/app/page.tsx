import Image from 'next/image'
import TransactionCard from '@/components/hero/TransactionCard'
import Products from '@/components/products/Products'
import HeroHeading from '@/components/hero/HeroHeading'
import ProductsHeading from '@/components/products/ProductsHeading'
import UseCasesHeading from '@/components/use-cases/UseCasesHeading'
import ForIndividuals from '@/components/use-cases/ForIndividuals'
import ForBusiness from '@/components/use-cases/ForBusiness'
import FeaturesHeading from '@/components/features/FeaturesHeading'
import FeatureSelect from '@/components/features/FeatureSelect'
import FeatureGrid from '@/components/features/FeatureGrid'
import FAQHeading from '@/components/faq/FAQHeading'
import FAQGrid from '@/components/faq/FAQGrid'
import TestimonialsHeading from '@/components/testimonials/TestimonialsHeading'
import TestimonialsSlider from '@/components/testimonials/TestimonialsSlider'

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
      <main className='flex flex-col items-center justify-center [&>*]:px-20'>
        <section
          className='flex w-full items-start justify-between py-14'
          id='hero'
        >
          <HeroHeading />
          <TransactionCard />
        </section>
        <section
          className='flex w-full flex-col items-center justify-center space-y-20 py-28'
          id='products'
        >
          <ProductsHeading />
          <Products />
        </section>
        <section
          className='flex w-full flex-col items-center justify-center space-y-[60px] py-14'
          id='use-case'
        >
          <UseCasesHeading />
          <div className='flex w-full flex-col items-center justify-center space-y-10'>
            <ForIndividuals />
            <ForBusiness />
          </div>
        </section>
        <section
          className='flex w-full flex-col items-start justify-center space-y-[60px] py-14'
          id='features'
        >
          <FeaturesHeading />
          <div className='flex w-full items-start justify-center space-x-5'>
            <FeatureSelect />
            <FeatureGrid />
          </div>
        </section>
        <section
          className='flex w-full flex-col items-start justify-center space-y-[60px] py-14'
          id='features'
        >
          <FAQHeading />
          <FAQGrid />
        </section>
        <section
          className='flex w-full flex-col items-center justify-center space-y-20 py-14'
          id='products'
        >
          <TestimonialsHeading />
          <TestimonialsSlider />
        </section>
        <section className='mb-28 mt-14' id='ads'>
          <div className='relative flex w-full items-center justify-between rounded-[20px] border border-shade-grey-15 bg-shade-grey-11 p-[60px]'>
            <Image
              className='absolute left-0 top-0 z-0 h-full object-cover opacity-50'
              src='/images/Stars.png'
              alt='stars'
              width={540}
              height={440}
              priority
            />
            <Image
              className='absolute left-0 top-0 z-20'
              src='/images/Dots2.png'
              alt='dots'
              width={202}
              height={192}
              priority
            />
            <div className='absolute inset-0 z-10 w-7/12 bg-gradient-to-l from-shade-grey-11 to-transparent' />
            <div className='z-30 mr-20 flex flex-col items-start justify-center space-y-3'>
              <h1 className='text-3xl'>
                Start your financial journey with{' '}
                <span className='text-shade-green-60'>YourBank today!</span>
              </h1>
              <p className='font-light text-shade-grey-70'>
                Ready to take control of your finances? Join YourBank now, and
                let us help you achieve your financial goals with our tailored
                solutions and exceptional customer service
              </p>
            </div>
            <button className='z-30 text-nowrap rounded-full bg-shade-green-60 px-5 py-3.5 text-sm text-shade-grey-11'>
              Open Account
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
