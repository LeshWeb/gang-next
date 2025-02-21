import { ReactNode } from 'react'
import styles from './CommentCard.module.css'
import { ICommendCardData } from './CommentCard.types'

interface Props {
  comment: ICommendCardData
  children?: ReactNode
}

export function CommentCard({ comment, children }: Props) {
  const { text, name, date } = comment
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
