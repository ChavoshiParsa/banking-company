import Image from 'next/image'
import Tick from 'public/icons/Tick.svg'

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
          className='flex items-center justify-between px-20 py-14'
          id='hero'
        >
          <div>
            <Tick />
          </div>
          <div></div>
        </section>
      </main>
    </>
  )
}
