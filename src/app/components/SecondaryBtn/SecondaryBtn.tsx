import Link from 'next/link'
import styles from './SecondaryBtn.module.css'
import { SecondaryBtnProps } from './SecondaryBtn.types'

export function SecondaryBtn({ title, href }: SecondaryBtnProps) {
  return (
    <Link href={href}>
      <span className={styles.title}>{title}</span>
    </Link>
  )
}
