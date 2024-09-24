import styles from './Burger.module.css'

export function Burger() {
  return (
    <div className={styles.burger}>
      <div className={styles.burger_line1}></div>
      <div className={styles.burger_line2}></div>
      <div className={styles.burger_line3}></div>
    </div>
  )
}
