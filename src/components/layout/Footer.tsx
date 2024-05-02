import Link from 'next/link'
import {
  BankLogo,
  EmailIcon,
  FacebookIcon,
  LinkedInIcon,
  LocationIcon,
  PhoneIcon,
  TwitterIcon,
} from '../ui/Icons'
import Divider from '../ui/Divider'

export default function Footer() {
  return (
    <footer className='bg-shade-grey-11 px-20 pb-[30px] pt-[60px]'>
      <div className='flex flex-col items-center justify-center space-y-10'>
        <div className='flex flex-col items-center justify-center space-y-10'>
          <div className='flex items-center justify-center'>
            <div className='m-1'>
              <BankLogo size={28} />
            </div>
            <h1 className='text-xl'>YourBanK</h1>
          </div>
          <nav className='flex list-none items-center justify-center space-x-6 text-shade-white-90'>
            <NavItem link='' name='Home' />
            <NavItem link='careers' name='Careers' />
            <NavItem link='about' name='About' />
            <NavItem link='security' name='Security' />
          </nav>
        </div>
        <Divider color='border-shade-grey-15' />
        <div className='flex items-center justify-center space-x-5 text-shade-white-90'>
          <div className='flex items-center justify-center space-x-1.5'>
            <EmailIcon size={20} />
            <span>hello@skillbirdge.com</span>
          </div>
          <div className='flex items-center justify-center space-x-1.5'>
            <PhoneIcon size={20} />
            <span>+91 91813 23 2309</span>
          </div>
          <div className='flex items-center justify-center space-x-1.5'>
            <LocationIcon size={20} />
            <span>Somewhere in the World</span>
          </div>
        </div>
        <Divider color='border-shade-grey-15' />
        <div className='flex w-full items-center justify-between rounded-full border border-shade-grey-15 bg-shade-grey-10 py-3 pl-3 pr-6 text-shade-grey-70'>
          <div className='flex items-center justify-center space-x-2'>
            <div className='rounded-full bg-shade-green-60 p-3'>
              <FacebookIcon size={20} />
            </div>
            <div className='rounded-full bg-shade-green-60 p-3'>
              <TwitterIcon size={20} />
            </div>
            <div className='rounded-full bg-shade-green-60 p-3'>
              <LinkedInIcon size={20} />
            </div>
          </div>
          <span className='text-sm font-light'>
            YourBank All Rights Reserved
          </span>
          <span className='text-sm font-light'>
            Privacy Policy | Terms of Service
          </span>
        </div>
      </div>
    </footer>
  )
}

function NavItem({ name, link }: { name: string; link: string }) {
  return (
    <li>
      <Link href={`/${link}`}>{name}</Link>
    </li>
  )
}
