'use server'
import axios from 'axios'

const URL_API = `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`

export type basketCookies = {
  minimum?: string
  medium?: string
  maxiumum?: string
}

export const sendMessage = async (text: string) => {
  if (!!process.env.CHAT_ID) {
    axios.post(URL_API, {
      chat_id: process.env.CHAT_ID,
      text: text,
    })
  } else {
    console.log(
      'Сообщение не отправляется в чат телеграм на бесплатном хостинге Versel'
    )
  }
}
