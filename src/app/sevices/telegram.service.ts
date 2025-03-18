'use server'
import axios from 'axios'
import { IForm } from '../(placing)/order/OrderForm/OrderForm'

const URL_API = `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`

export type basketCookies = {
  minimum?: string
  medium?: string
  maxiumum?: string
}

export const sendMessage = async (data: IForm, basket: basketCookies) => {
  const text = `Имя: ${data.name}\nТелефон: ${data.phone}\nМинимальный ${basket.minimum}\nПродвинутый ${basket.medium}\nЭксклюзивный ${basket.maxiumum}`

  axios.post(URL_API, {
    chat_id: process.env.CHAT_ID,
    text: text,
  })
}
