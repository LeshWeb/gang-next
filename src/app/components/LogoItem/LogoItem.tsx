import GangLogo from '@/app/public/svgs/icon.svg'
import styles from './LogoItem.module.css'
import Link from 'next/link'

export function LogoItem() {
  return (
    <Link href="/" className={styles.logo_item}>
      <GangLogo className={styles.logo} />
      <span className={styles.gang}>GANG</span>
    </Link>
  )
}
