import { SocialMediaIcons } from '../SocialMediaIcons/SocialMediaIcons'
import { LogoItem } from '../LogoItem/LogoItem'
import { FooterMenuItems } from '@/app/components/FooterMenuItems/FooterMenuItems'

export function Footer() {
  return (
    <footer className='flex flex-col bg-footer w-full py-10 px-[2vw] max-sm:py-7'>
      <div className='flex justify-between items-center w-full'>
        <LogoItem />
        <SocialMediaIcons size='small' />
      </div>
      <div className='flex justify-between items-end w-full max-lg:flex-col max-lg:gap-5 max-lg:items-start'>
        <FooterMenuItems />
        <p className='font-inter text-base text-h-border max-lg:w-full text-center max-sm:text-sm'>
          © All Rights Reserved. Ivan Ivanov.
        </p>
      </div>
    </footer>
  )
}
