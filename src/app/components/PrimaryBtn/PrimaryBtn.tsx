import Link from 'next/link'
import styles from './PrimaryBtn.module.css'
import { PrimaryBtnProps } from './PrimaryBtn.types'
import clsx from 'clsx'
import { MAIN } from '@/app/config/main.page.config'

export function PrimaryBtn({ title, size, onClick, href, myStyle }: PrimaryBtnProps) {
  return (
    <Link href={href ? href : MAIN.GET_ID(MAIN.CHOOSE_PC)}>
      <div
        className={clsx(styles.title, {
          [styles.small]: size === 'small',
          [styles.big]: size === 'big',
        })}
        onClick={onClick}
      >
        <p className={myStyle}>{title}</p>
      </div>
    </Link>
  )
}
