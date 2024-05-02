import Link from 'next/link'
import { BankLogo } from '../ui/Icons'
import NavItem from './NavItem'

export default function Navbar() {
  return (
    <header className='px-20 py-[30px] text-sm'>
      <div className='flex items-center justify-between rounded-full border border-shade-grey-15 bg-shade-grey-11 px-6 py-4'>
        <div className='flex items-center justify-center'>
          <div className='m-1'>
            <BankLogo size={26} />
          </div>
          <h1 className='text-lg'>YourBanK</h1>
        </div>
        <nav className='flex list-none items-center justify-center space-x-6'>
          <NavItem link='' name='Home' />
          <NavItem link='careers' name='Careers' />
          <NavItem link='about' name='About' />
          <NavItem link='security' name='Security' />
        </nav>
        <div className='flex items-center justify-center space-x-5'>
          <Link href='/sign-up'>Sign Up</Link>
          <Link
            className='rounded-[82px] bg-shade-green-60 px-6 py-3 text-shade-grey-11'
            href='/login'
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}
