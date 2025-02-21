class MainPage {
  CHOOSE_PC = 'choopse-pc'
  DEVICES = 'devices'
  REVIEWS = 'reviews'
  CONTACTS = 'contacts'

  STANDART = 'standart'
  ADVANCED = 'advanced'
  EXCLUSIVE = 'exclusive'

  GET_ID(id: string) {
    return `#${id}`
  }

  BASKET(path?: string) {
    return `/basket/${path ? `/${path}` : ''}`
  }
}

export const MAIN = new MainPage()
