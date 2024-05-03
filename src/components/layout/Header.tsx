import Link from 'next/link'
import HeaderNavItem from './HeaderNavItem'
import Logo from '/public/icons/Logo.svg'

export default function Header() {
  return (
    <header className='px-20 py-[30px] text-sm'>
      <div className='flex items-center justify-between rounded-full border border-shade-grey-15 bg-shade-grey-11 px-6 py-4'>
        <div className='flex items-center justify-center'>
          <div className='m-1'>
            <Logo className='size-[30px]' />
          </div>
          <h1 className='text-lg'>YourBanK</h1>
        </div>
        <nav className='flex list-none items-center justify-center space-x-6'>
          <HeaderNavItem link='' name='Home' />
          <HeaderNavItem link='careers' name='Careers' />
          <HeaderNavItem link='about' name='About' />
          <HeaderNavItem link='security' name='Security' />
        </nav>
        <div className='flex items-center justify-center space-x-5'>
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
