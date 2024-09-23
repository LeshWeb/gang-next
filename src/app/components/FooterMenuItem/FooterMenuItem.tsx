import Link from 'next/link'
import { IFooterMenu, IFooterMenuLinks } from '@/app/data/footer-links'
import styles from './FooterMenuItem.module.css'

export function FooterMenuItem(data: IFooterMenu) {
  return (
    <div>
      <h4 className={styles.menu_title}>{data.title}</h4>
      <ul className={styles.footer_list}>
        {data.links.map((link: IFooterMenuLinks) => {
          return (
            <li className={styles.footer_list_item} key={link.id}>
              <Link href={link.href}>
                <span className={styles.links}>{link.text}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
