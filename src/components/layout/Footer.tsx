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
    <footer className='bg-shade-grey-11 px-4 pb-[30px] pt-[50px] md:px-20 md:pt-[60px]'>
      <div className='flex flex-col items-center justify-center space-y-[30px]'>
        <div className='flex flex-col items-center justify-center space-y-6 md:space-y-10'>
          <div className='flex items-center justify-center'>
            <div className='m-1'>
              <Logo className='size-[34px]' />
            </div>
            <h1 className='text-xl'>YourBanK</h1>
          </div>
          <nav className='flex list-none items-center justify-center space-x-3.5 text-sm text-shade-white-90 md:space-x-6 md:text-base'>
            <FooterNavItem link='' name='Home' />
            <FooterNavItem link='careers' name='Careers' />
            <FooterNavItem link='about' name='About' />
            <FooterNavItem link='security' name='Security' />
          </nav>
        </div>
        <div className='w-full border-t border-shade-grey-15' />
        <div className='flex flex-wrap items-center justify-center text-sm text-shade-white-90 md:space-x-5 md:text-base'>
          <div className='mb-5 mr-3 flex items-center justify-center space-x-1.5 md:mb-0 md:mr-0'>
            <Email />
            <span>hello@skillbirdge.com</span>
          </div>
          <div className='mb-5 flex items-center justify-center space-x-1.5 md:mb-0 md:mr-0'>
            <Phone />
            <span>+91 91813 23 2309</span>
          </div>
          <div className='flex items-center justify-center space-x-1.5'>
            <Location />
            <span>Somewhere in the World</span>
          </div>
        </div>
        <div className='w-full border-t border-shade-grey-15' />
        <div className='flex w-full flex-col items-center justify-between space-y-5 rounded-xl border border-shade-grey-15 bg-shade-grey-10 pb-6 pl-3 pr-6 pt-3 text-shade-grey-70 md:flex-row md:space-y-0 md:rounded-full md:py-3'>
          <div className='-mt-8 flex items-center justify-center space-x-2 md:mt-0'>
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
