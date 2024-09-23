import styles from './ArrowButtonLeft.module.css'
import LeftArrow from '@/app/public/svgs/left-arrow.svg'
import { IArrowButton } from './ArrowButtonLeft.types'

export function ArrowButtonLeft({ onClick }: IArrowButton) {
  return (
    <button className={styles.arrow_btn_left} onClick={onClick}>
      <LeftArrow />
    </button>
  )
}
