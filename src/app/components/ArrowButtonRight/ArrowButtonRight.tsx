import styles from './ArrowButtonRight.module.css'
import RightArrow from '@/app/public/svgs/right-arrow.svg'
import { IArrowButton } from './ArrowButtonRight.types'
import { twMerge } from 'tailwind-merge'

export function ArrowButtonRight({ onClick }: IArrowButton) {
  return (
    <button onClick={onClick} className={twMerge(styles.arrow_btn_right, 'flex justify-center items-center')}>
      <RightArrow />
    </button>
  )
}
