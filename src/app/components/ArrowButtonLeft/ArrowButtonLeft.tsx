import styles from './ArrowButtonLeft.module.css'
import LeftArrow from '@/app/public/svgs/left-arrow.svg'
import { IArrowButton } from './ArrowButtonLeft.types'
import { twMerge } from 'tailwind-merge'

export function ArrowButtonLeft({ onClick }: IArrowButton) {
  return (
    <button className={twMerge(styles.arrow_btn_left, 'flex items-center justify-center')} onClick={onClick}>
      <LeftArrow />
    </button>
  )
}
