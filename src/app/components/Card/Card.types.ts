import { ReactNode } from 'react'

export interface ICard {
  title: string
  data: ICardData[]
  children: ReactNode
  price: number
  href: string
}

export interface ICardData {
  id: number
  key: string
  value: string
}
