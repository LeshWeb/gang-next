import styles from './Footer.module.css'
import { SocialMediaIcons } from '../SocialMediaIcons/SocialMediaIcons'
import { LogoItem } from '../LogoItem/LogoItem'
import { FooterMenuItems } from '@/app/components/FooterMenuItems/FooterMenuItems'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_up}>
        <LogoItem />
        <SocialMediaIcons size="small" />
      </div>
      <div className={styles.footer_down}>
        <FooterMenuItems />
        <p className={styles.all_rights}>© All Rights Reserved. Ivan Ivanov.</p>
      </div>
    </footer>
  )
}
