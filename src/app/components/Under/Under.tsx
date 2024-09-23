import styles from './Under.module.css'

export function Under() {
  return (
    <div className={styles.main__under}>
      <div className={styles.under__item}>
        <p className={styles.under__text}>Все девайсы включены</p>
      </div>
      <div className={styles.under__item}>
        <p className={styles.under__text}>Оформи за 10 минут</p>
      </div>
      <div className={styles.under__item}>
        <p className={styles.under__text}>Бесплатная доставка</p>
      </div>
      <div className={styles.under__item}>
        <p className={styles.under__text}>Аренда без залога</p>
      </div>
    </div>
  )
}
