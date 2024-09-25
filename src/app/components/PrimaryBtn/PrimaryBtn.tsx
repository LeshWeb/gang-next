import Link from 'next/link'
import styles from './PrimaryBtn.module.css'
import { PrimaryBtnProps } from './PrimaryBtn.types'
import clsx from 'clsx'

export function PrimaryBtn({ title, size, href }: PrimaryBtnProps) {
  return (
    <Link href={href}>
      <div
        className={clsx(styles.title, {
          [styles.small]: size === 'small',
          [styles.big]: size === 'big',
        })}
      >
        {title}
      </div>
    </Link>
  )
}
