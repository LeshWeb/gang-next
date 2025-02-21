'use client'

import styles from './Basket.module.css'
import BasketLogo from '@/app/public/svgs/basket.svg'
import { useSelector } from 'react-redux'

export function Basket() {
  const BasketCount = useSelector((state: any) => state.length)
  const isBasketEmpty = BasketCount !== 0
  return <div className='relative'>
    {isBasketEmpty && <div className={styles.count}>{BasketCount}</div>}
    <BasketLogo className={styles.basket} />
  </div>
}
