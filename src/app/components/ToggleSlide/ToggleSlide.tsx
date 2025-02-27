import { twMerge } from 'tailwind-merge'
import styles from './Main.module.css'

interface Props {
  slide: number
  sidebar: React.RefObject<HTMLDivElement | null>
  toggleClassName?: string
}

export function ToggleSlide({ slide, sidebar, toggleClassName }: Props) {
  return (
    <div className={twMerge(styles.main_slidebar, toggleClassName)}>
      <p className={styles.slidebar_start}>0{slide}</p>
      <div className={styles.main_case}>
        <div className={styles.main_loading} ref={sidebar}></div>
      </div>
      <p className={styles.slidebar_end}>03</p>
    </div>
  )
}
