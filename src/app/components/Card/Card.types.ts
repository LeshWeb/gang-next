import { ReactNode } from 'react'
import { type BasketPayload } from '@/app/store/basket.slice'

export interface ICard {
  title: string
  data: ICardData[]
  children: ReactNode
  price: number
  href?: string
  type: BasketPayload
  id?: string
}

export interface ICardData {
  id: number
  key: string
  value: string
}
