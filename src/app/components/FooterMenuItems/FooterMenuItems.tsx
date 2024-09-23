import { arend, contacts, helps, IFooterMenu } from '@/app/data/footer-links'
import { FooterMenuItem } from './../FooterMenuItem/FooterMenuItem'
import styles from './FooterMenuItems.module.css'

export function FooterMenuItems() {
  const menuItems: IFooterMenu[] = [contacts, arend, helps]
  return (
    <div className={styles.navigation_items}>
      {menuItems.map((item, index) => (
        <FooterMenuItem key={index} {...item} />
      ))}
    </div>
  )
}
