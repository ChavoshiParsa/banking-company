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
import AdsCard from '@/components/AdsCard'

export default function Home() {
  return (
    <>
      <Image
        className='absolute -left-2.5 -top-5 -z-10 h-[300px] w-[380px] xs:-left-10 xs:-top-20 xs:h-[440px] xs:w-[540px]'
        src='/images/Dots1.png'
        alt='curved dots'
        width={540}
        height={440}
        priority
      />
      <main className='flex flex-col items-center justify-center overflow-hidden [&>*]:px-4 xs:[&>*]:px-20'>
        <section
          className='flex w-full flex-col items-center justify-between space-y-20 py-6 md:flex-row md:items-start md:space-y-0 md:py-14'
          id='hero'
        >
          <HeroHeading />
          <TransactionCard />
        </section>

        <section
          className='flex w-full flex-col items-center justify-center space-y-16 py-14 md:space-y-20 md:py-28'
          id='products'
        >
          <ProductsHeading />
          <Products />
        </section>
        <section
          className='flex w-full flex-col items-center justify-center space-y-[60px] py-7 md:py-14'
          id='use-case'
        >
          <UseCasesHeading />
          <div className='flex w-full flex-col items-center justify-center space-y-10'>
            <ForIndividuals />
            <ForBusiness />
          </div>
        </section>
        <section
          className='flex w-full flex-col items-center justify-center space-y-[60px] py-7 md:items-start md:py-14'
          id='features'
        >
          <FeaturesHeading />
          <div className='flex w-full flex-col items-start justify-center space-y-5 md:flex-row md:space-x-5 md:space-y-0'>
            <FeatureSelect />
            <FeatureGrid />
          </div>
        </section>
        <section
          className='flex w-full flex-col items-center justify-center space-y-[60px] py-7 md:items-start md:py-14'
          id='features'
        >
          <FAQHeading />
          <FAQGrid />
        </section>
        <section
          className='flex w-full flex-col items-center justify-center space-y-20 py-7 md:py-14'
          id='products'
        >
          <TestimonialsHeading />
          <TestimonialsSlider />
        </section>
        <section className='mb-16 mt-14 md:mb-28' id='ads'>
          <AdsCard />
        </section>
      </main>
    </>
  )
}
