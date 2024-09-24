'use client'
import styles from './Sidebar.module.css'
import { useRef } from 'react'
import { SidebarProps } from './Sidebar.types'
import clsx from 'clsx'

export function Sidebar({ scrollbar }: SidebarProps) {
  const sidebar = useRef(null)
  return (
    <div
      className={clsx(styles.main_slidebar, {
        [styles.main_slidebar_vertical]: scrollbar === 'vertical',
        [styles.main_slidebar_horizontal]: scrollbar === 'horizontal',
      })}
    >
      <p className={styles.slidebar_start}>01</p>
      <div
        className={clsx(styles.main_case, {
          [styles.main_case_vertical]: scrollbar === 'vertical',
          [styles.main_case_horizontal]: scrollbar === 'horizontal',
        })}
      >
        <div
          className={clsx(styles.main_loading, {
            [styles.main_loading_vertical]: scrollbar === 'vertical',
            [styles.main_loading_horizontal]: scrollbar === 'horizontal',
          })}
          ref={sidebar}
        ></div>
      </div>
      <p className={styles.slidebar_end}>03</p>
    </div>
  )
}
