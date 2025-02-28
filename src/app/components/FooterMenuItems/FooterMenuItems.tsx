import { footerData } from '@/app/data/footer-links'
import { FooterMenuItem } from './../FooterMenuItem/FooterMenuItem'

export function FooterMenuItems() {
  return (
    <div className='flex gap-x-12 max-sm:gap-x-6 max-md:flex-wrap'>
      {footerData.map((item, index) => (
        <FooterMenuItem key={index} {...item} />
      ))}
    </div>
  )
}
