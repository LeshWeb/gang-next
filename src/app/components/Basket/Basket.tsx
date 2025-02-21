'use client'

import styles from './Basket.module.css'
import BasketLogo from '@/app/public/svgs/basket.svg'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie';
import { setBasket } from '@/app/store/basket.slice';

export function Basket() {
  const dispatch = useDispatch()
  useEffect(() => {
    const basketFromCookie = Cookies.get('basket');
    if (basketFromCookie) {
      dispatch(setBasket(JSON.parse(basketFromCookie)));
    }
  }, [dispatch]);

  const BasketCount = useSelector((state: any) => state.length)
  const isBasketEmpty = BasketCount !== 0
  return <div className='relative'>
    {isBasketEmpty && <div className={styles.count}>{BasketCount}</div>}
    <BasketLogo className={styles.basket} />
  </div>
}


