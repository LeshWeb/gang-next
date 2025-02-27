import styles from './BasketPCItem.module.scss'
import Image from 'next/image'
import { typeOfState } from '@/app/utils/typeOfState'
import { ItemActions } from './ItemActions/ItemActions'

interface Props {
  type: string
  src: string
  count: number
}

export function BasketPCItem({ type, src, count }: Props) {
  const payloadType = typeOfState(type)

  return (
    <div className={styles.basket_item}>
      <Image src={src} alt={'PC'} width={80} height={80} />
      <p className={styles.item_name}>{type}</p>
      <ItemActions type={payloadType} count={count} />
    </div>
  )
}
