import Link from 'next/link'
import { IFooterMenu, IFooterMenuLinks } from '@/app/data/footer-links'

export function FooterMenuItem(data: IFooterMenu) {
  return (
    <div>
      <h4 className='font-inter font-medium text-2xl text-white mb-4 mt-8 max-sm:text-[1.12rem] max-sm:mb-3'>{data.title}</h4>
      <ul>
        {data.links.map((link: IFooterMenuLinks) => {
          return (
            <li className='mb-1' key={link.id}>
              <Link href={link.href} target={link.target ? link.target : ''}>
                <span className='font-inter text-h-border text-[1.12rem] hover:text-footer-hover max-sm:text-base'>{link.text}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
