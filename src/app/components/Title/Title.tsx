import styles from './Title.module.css'
import { ITitleProp } from './Title.types'

export function Title({ description, title }: ITitleProp) {
  return (
    <div>
      <h2 className={styles.text_descr}>{title}</h2>
      <p className={styles.text_title}>{description}</p>
    </div>
  )
}
