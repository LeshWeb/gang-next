'use client'
import styles from './Sidebar.module.css'
import clsx from 'clsx'

interface SidebarProps {
  slide: number
  sidebar: React.RefObject<HTMLDivElement | null>
}

export function Sidebar({ slide, sidebar }: SidebarProps) {
  return (
    <div className={clsx(styles.main_slidebar, styles.main_slidebar_horizontal)}>
      <p className={styles.slidebar_start}>0{slide}</p>
      <div className={clsx(styles.main_case, styles.main_case_horizontal)}>
        <div
          className={clsx(styles.main_loading, styles.main_loading_horizontal)}
          ref={sidebar}
        ></div>
      </div>
      <p className={styles.slidebar_end}>09</p>
    </div>
  )
}
