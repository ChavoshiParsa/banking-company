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
      </main>
    </>
  )
}
