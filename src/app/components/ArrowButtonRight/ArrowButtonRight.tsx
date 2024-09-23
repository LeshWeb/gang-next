import styles from './ArrowButtonRight.module.css'
import RightArrow from '@/app/public/svgs/right-arrow.svg'

export function ArrowButtonRight() {
  return (
    <button className={styles.arrow_btn_right}>
      <RightArrow />
    </button>
  )
}
