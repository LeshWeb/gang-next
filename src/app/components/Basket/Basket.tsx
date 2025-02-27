'use client'

import BasketLogo from '../../../../public/svgs/basket.svg'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { BasketState, setBasket } from '@/app/store/basket.slice'
import Link from 'next/link'
import { MAIN } from '@/app/config/main.page.config'


export function Basket() {

  const dispatch = useDispatch()

  useEffect(() => {
    const basketFromCookie = Cookies.get('basket')
    if (basketFromCookie) {
      dispatch(setBasket(JSON.parse(basketFromCookie)))
    }
  }, [dispatch])

  const basketCount = useSelector((state: BasketState) => state.length)

  return (
    <div className='relative'>
      {!!basketCount && <div className='flex font-inter text-[0.6rem] sm:-bottom-0.5 sm:-left-2 absolute bg-secondary rounded p-0.5 bottom-0.25 -left-0.5 sm:text-xs sm:p-0.75'>{basketCount}</div>}
      <Link href={MAIN.BASKET} >
        <BasketLogo className='w-11 h-11 stroke-2 stroke-desc hover:stroke-white transition-colors active:stroke-secondary' />
      </Link>
    </div>
  )
}