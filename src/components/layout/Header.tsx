import Link from 'next/link'
import HeaderNavItem from './HeaderNavItem'
import Logo from '/public/icons/Logo.svg'
import Hamburger from '/public/icons/Hamburger.svg'

export default function Header() {
  return (
    <header className='xs:px-20 px-4 py-[30px] text-sm'>
      <div className='xs:pr-6 flex items-center justify-between rounded-full border border-shade-grey-15 bg-shade-grey-11 py-3.5 pl-6 pr-3.5'>
        <div className='flex items-center justify-center'>
          <div className='m-1'>
            <Logo className='xs:size-[30px] size-[26px]' />
          </div>
          <h1 className='xs:text-lg text-base '>YourBanK</h1>
        </div>
        <button className='xs:hidden block rounded-full bg-shade-green-60 px-3.5 py-1.5'>
          <Hamburger />
        </button>
        <nav className='xs:flex hidden list-none items-center justify-center space-x-6'>
          <HeaderNavItem link='' name='Home' />
          <HeaderNavItem link='careers' name='Careers' />
          <HeaderNavItem link='about' name='About' />
          <HeaderNavItem link='security' name='Security' />
        </nav>
        <div className='xs:flex hidden items-center justify-center space-x-5'>
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
