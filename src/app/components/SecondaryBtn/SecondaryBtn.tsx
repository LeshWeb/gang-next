import Link from 'next/link'
import styles from './SecondaryBtn.module.css'
import { SecondaryBtnProps } from './SecondaryBtn.types'
import { MAIN } from '@/app/config/main.page.config'

export function SecondaryBtn({ title, href }: SecondaryBtnProps) {
  return (
    <Link href={href ? href : MAIN.GET_ID(MAIN.REVIEWS)}>
      <span className={styles.title}>{title}</span>
    </Link>
  )
}
