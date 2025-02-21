'use client'
import { useDispatch } from 'react-redux'
import { PrimaryBtn } from '../PrimaryBtn/PrimaryBtn'
import styles from './Card.module.css'
import { ICard } from './Card.types'
import { incremented } from '@/app/store/basket.slice'

export function Card({ title, data, children, href, price, type, id }: ICard) {
  const dispath = useDispatch()
  return (
    <div className={styles.card_item} id={id}>
      <div className={styles.card_image}>{children}</div>
      <h3 className={styles.desc_title}>{title}</h3>
      <div className={styles.card_statistics}>
        <div className={styles.key_of_card}>
          {data.map((item) => (
            <p key={item.id}>{item.key}</p>
          ))}
        </div>
        <div className={styles.statistics_of_card}>
          {data.map((item) => (
            <p key={item.id}>{item.value}</p>
          ))}
        </div>
      </div>
      <div className={styles.card_down}>
        <div className={styles.card_price}>
          <p className={styles.card_price_bold}>{price}</p>
          <p className={styles.card_price_descr}>руб/сутки</p>
        </div>
        <PrimaryBtn title="GO" size="small" onClick={() => { dispath(incremented(type)) }} href={href} />
      </div>
    </div>
  )
}
