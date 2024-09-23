export interface IFooterMenu {
  title: string
  links: IFooterMenuLinks[]
}

export interface IFooterMenuLinks {
  id: number
  text: string
  href: string
}

export const arend: IFooterMenu = {
  title: 'Аренда',
  links: [
    { id: 1, text: 'Стандартный', href: '#' },
    { id: 2, text: 'Продвинутый', href: '#' },
    { id: 3, text: 'Эксклюзивный', href: '#' },
    { id: 4, text: 'Девайсы', href: '#' },
  ],
}

export const contacts: IFooterMenu = {
  title: 'Контакты',
  links: [
    { id: 5, text: 'gang@gmail.com', href: '#' },
    { id: 6, text: '8 (800) 555 35 35', href: '#' },
    { id: 7, text: 'Москва, ул. Новый Арбат, д.7', href: '#' },
  ],
}

export const helps: IFooterMenu = {
  title: 'Помощь',
  links: [
    { id: 8, text: 'Контакты', href: '#' },
    { id: 9, text: 'Политика конф.', href: '#' },
    { id: 10, text: 'Обратная связь', href: '#' },
  ],
}
