export interface ICard {
  title: string
  data: ICardData[]
  image: string
  price: number
  href: string
}

export interface ICardData {
  id: number
  key: string
  value: string
}

export const white: ICardData[] = [
  { id: 21, key: 'Процессор', value: 'Intel Core i5 - 12400' },
  { id: 22, key: 'Материнская плата', value: 'IntMSI PRO B660M-G DDR' },
  { id: 23, key: 'Оперативная память', value: 'Netac Shadow II 16GB 3200MH' },
  { id: 24, key: 'Видеокарта', value: 'GeForce RTX 3060 Ti' },
  { id: 25, key: 'Накопитель', value: 'SSD 2T' },
]

export const black: ICardData[] = [
  { id: 26, key: 'Процессор', value: 'Intel Core i5 - 13600KF' },
  { id: 27, key: 'Материнская плата', value: 'ASUS PRIME Z690-P D4' },
  { id: 28, key: 'Оперативная память', value: 'ADATA XPG SPECTRIX D60G' },
  { id: 29, key: 'Видеокарта', value: 'Geforce RTX 4070 Ti' },
  { id: 30, key: 'Накопитель', value: 'SSD M.2 Netac 2TB' },
]

export const green: ICardData[] = [
  { id: 31, key: 'Процессор', value: 'Intel Core i5 - 13600KF' },
  { id: 32, key: 'Материнская плата', value: 'AASUS PRIME Z690-P D4' },
  { id: 33, key: 'Оперативная память', value: 'ADATA XPG SPECTRIX D60G' },
  { id: 34, key: 'Видеокарта', value: 'Geforce RTX 4070 Ti' },
  { id: 35, key: 'Накопитель', value: 'SSD M.2 Netac 2TB' },
]
