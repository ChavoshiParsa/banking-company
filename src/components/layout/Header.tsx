import Link from 'next/link'
import HeaderNavItem from './HeaderNavItem'
import Logo from '/public/icons/Logo.svg'
import Hamburger from '/public/icons/Hamburger.svg'

export default function Header() {
  return (
    <header className='px-4 py-[30px] text-sm md:px-20'>
      <div className='flex items-center justify-between rounded-full border border-shade-grey-15 bg-shade-grey-11 py-3.5 pl-6 pr-3.5 md:pr-6'>
        <div className='flex items-center justify-center'>
          <div className='m-1'>
            <Logo className='size-[26px] md:size-[30px]' />
          </div>
          <h1 className='text-base md:text-lg '>YourBanK</h1>
        </div>
        <button className='block rounded-full bg-shade-green-60 px-3.5 py-1.5 md:hidden'>
          <Hamburger />
        </button>
        <nav className='hidden list-none items-center justify-center space-x-6 md:flex'>
          <HeaderNavItem link='' name='Home' />
          <HeaderNavItem link='careers' name='Careers' />
          <HeaderNavItem link='about' name='About' />
          <HeaderNavItem link='security' name='Security' />
        </nav>
        <div className='hidden items-center justify-center space-x-5 md:flex'>
          <Link href='/sign-up'>Sign Up</Link>
          <Link
            className='rounded-full bg-shade-green-60 px-6 py-3 text-shade-grey-11'
            href='/login'
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}
