import styles from './ArrowButtonRight.module.css'
import RightArrow from '@/app/public/svgs/right-arrow.svg'
import { IArrowButton } from './ArrowButtonRight.types'

export function ArrowButtonRight({ onClick }: IArrowButton) {
  return (
    <button className={styles.arrow_btn_right} onClick={onClick}>
      <RightArrow />
    </button>
  )
}
