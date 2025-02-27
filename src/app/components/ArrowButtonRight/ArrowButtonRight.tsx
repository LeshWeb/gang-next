import styles from './ArrowButtonRight.module.css'
import RightArrow from '../../../../public/svgs/right-arrow.svg'
import { IArrowButton } from './ArrowButtonRight.types'
import { twMerge } from 'tailwind-merge'

export function ArrowButtonRight({ onClick, isSmall }: IArrowButton) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        styles.arrow_btn_right,
        'flex items-center justify-center',
        isSmall && styles.small
      )}
    >
      <RightArrow />
    </button>
  )
}
