'use server'
import axios from 'axios'
import { IForm } from '../(placing)/order/OrderForm/OrderForm'

const TOKEN = '7398419695:AAHyEwS8T_8wOFLMCmNoCmBbnUDi4-85b9U'
const CHAT_ID = '-4785099777'
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

export type basketCookies = {
  minimum?: string
  medium?: string
  maxiumum?: string
}

export const sendMessage = async (data: IForm, basket: basketCookies) => {
  const text = `Имя: ${data.name}\nТелефон: ${data.phone}\nМинимальный ${basket.minimum}\nПродвинутый ${basket.medium}\nЭксклюзивный ${basket.maxiumum}`

  axios.post(URL_API, {
    chat_id: CHAT_ID,
    text: text,
  })
}
