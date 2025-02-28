import { MAIN } from '../config/main.page.config'

export interface IFooterMenu {
  title: string
  links: IFooterMenuLinks[]
}

export interface IFooterMenuLinks {
  id: number
  text: string
  href: string
  target?: string
}

export const footerData: IFooterMenu[] = [
  {
    title: 'Аренда',
    links: [
      { id: 1, text: 'Стандартный', href: MAIN.GET_ID(MAIN.STANDART) },
      { id: 2, text: 'Продвинутый', href: MAIN.GET_ID(MAIN.ADVANCED) },
      { id: 3, text: 'Эксклюзивный', href: MAIN.GET_ID(MAIN.EXCLUSIVE) },
      { id: 4, text: 'Девайсы', href: MAIN.GET_ID(MAIN.DEVICES) },
    ],
  },
  {
    title: 'Помощь',
    links: [
      { id: 5, text: 'Контакты', href: MAIN.GET_ID(MAIN.CONTACTS) },
      { id: 6, text: 'Политика конф.', href: 'javascript:void(0)' },
      { id: 7, text: 'Обратная связь', href: 'mailto:gang@gmail.com' },
    ],
  },
  {
    title: 'Контакты',
    links: [
      { id: 8, text: 'gang@gmail.com', href: 'mailto:gang@gmail.com' },
      { id: 9, text: '8 (800) 555 35 35', href: 'tel:8 (800) 555 35 35' },
      {
        id: 10,
        text: 'Москва, ул. Новый Арбат, д.7',
        href: 'https://maps.app.goo.gl/PH18PQ6PkYPyp6AXA',
        target: '_blank',
      },
    ],
  },
]
