import GangLogo from '@/app/public/svgs/icon.svg'
import styles from './LogoItem.module.css'

export function LogoItem() {
  return (
    <div className={styles.logo_item}>
      <GangLogo className={styles.logo} />
      <span className={styles.gang}>GAN</span>
    </div>
  )
}
