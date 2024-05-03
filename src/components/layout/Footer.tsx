import Divider from './Divider'
import Logo from '/public/icons/Logo.svg'
import Email from '/public/icons/Email.svg'
import Phone from '/public/icons/Phone.svg'
import Location from '/public/icons/Location.svg'
import Facebook from '/public/icons/Facebook.svg'
import Twitter from '/public/icons/Twitter.svg'
import Linkedin from '/public/icons/Linkedin.svg'
import FooterNavItem from './FooterNavItem'

export default function Footer() {
  return (
    <footer className='mt-28 bg-shade-grey-11 px-20 pb-[30px] pt-[60px]'>
      <div className='flex flex-col items-center justify-center space-y-10'>
        <div className='flex flex-col items-center justify-center space-y-10'>
          <div className='flex items-center justify-center'>
            <div className='m-1'>
              <Logo className='size-[34px]' />
            </div>
            <h1 className='text-xl'>YourBanK</h1>
          </div>
          <nav className='flex list-none items-center justify-center space-x-6 text-shade-white-90'>
            <FooterNavItem link='' name='Home' />
            <FooterNavItem link='careers' name='Careers' />
            <FooterNavItem link='about' name='About' />
            <FooterNavItem link='security' name='Security' />
          </nav>
        </div>
        <Divider />
        <div className='flex items-center justify-center space-x-5 text-shade-white-90'>
          <div className='flex items-center justify-center space-x-1.5'>
            <Email />
            <span>hello@skillbirdge.com</span>
          </div>
          <div className='flex items-center justify-center space-x-1.5'>
            <Phone />
            <span>+91 91813 23 2309</span>
          </div>
          <div className='flex items-center justify-center space-x-1.5'>
            <Location />
            <span>Somewhere in the World</span>
          </div>
        </div>
        <Divider />
        <div className='flex w-full items-center justify-between rounded-full border border-shade-grey-15 bg-shade-grey-10 py-3 pl-3 pr-6 text-shade-grey-70'>
          <div className='flex items-center justify-center space-x-2'>
            <div className='rounded-full bg-shade-green-60 p-3'>
              <Facebook />
            </div>
            <div className='rounded-full bg-shade-green-60 p-3'>
              <Twitter />
            </div>
            <div className='rounded-full bg-shade-green-60 p-3'>
              <Linkedin />
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
