'use client'
import styles from './Sidebar.module.css'
import { useRef } from 'react'

export function Sidebar() {
  const sidebar = useRef(null)
  return (
    <div className={styles.main_slidebar}>
      <p className={styles.slidebar_start}>01</p>
      <div className={styles.main_case}>
        <div className={styles.main_loading} ref={sidebar}></div>
      </div>
      <p className={styles.slidebar_end}>03</p>
    </div>
  )
}
