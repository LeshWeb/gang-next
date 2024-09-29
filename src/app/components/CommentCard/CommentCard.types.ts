import { ReactNode } from 'react'

export interface ICommendCard {
  text: string
  children: ReactNode
  name: string
  date: string
}

export interface ICommendCardData {
  text: string
  name: string
  date: string
}
