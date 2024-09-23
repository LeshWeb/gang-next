import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <div className={styles.main_slidebar}>
      <p className={styles.slidebar_start}>01</p>
      <div className={styles.main_case}>
        <div className={styles.main_loading}></div>
      </div>
      <p className={styles.slidebar_end}>03</p>
    </div>
  )
}
