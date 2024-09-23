import styles from './ArrowButtonLeft.module.css'
import LeftArrow from '@/app/public/svgs/left-arrow.svg'

export function ArrowButtonLeft() {
  return (
    <button className={styles.arrow_btn_left}>
      <LeftArrow />
    </button>
  )
}
