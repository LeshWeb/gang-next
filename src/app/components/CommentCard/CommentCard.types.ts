import { StaticImageData } from 'next/image'

export interface ICommendCardData {
  id: number
  text: string
  name: string
  date: string
  userAvatar: StaticImageData
}
