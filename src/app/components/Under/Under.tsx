import styles from './Under.module.css'

export function Under() {
  return (
    <div className={styles.main__under}>
      <div className={`${styles.under__text} ${styles.text_1}`}>
        Все девайсы включены
      </div>
      <div className={`${styles.under__text} ${styles.text_2}`}>
        Оформи за 10 минут
      </div>
      <div className={`${styles.under__text} ${styles.text_3}`}>
        Бесплатная доставка
      </div>
      <div className={`${styles.under__text} ${styles.text_4}`}>
        Аренда без залога
      </div>
    </div>
  )
}
