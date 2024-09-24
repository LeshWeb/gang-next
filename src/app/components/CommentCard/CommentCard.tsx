import styles from './CommentCard.module.css'
import { ICommendCard } from './CommentCard.types'

export function CommentCard({ text, children, name, date }: ICommendCard) {
  return (
    <div className={styles.feedback_card}>
      <p className={styles.feedback_text}>{text}</p>
      <div className={styles.feedback_usercard}>
        <div className={styles.feedback_image}>{children}</div>
        <div>
          <div className={styles.feedback_name}>{name}</div>
          <div className={styles.feedback_date}>{date}</div>
        </div>
      </div>
    </div>
  )
}
