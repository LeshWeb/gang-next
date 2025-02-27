class MainPage {
  HOME = '/'
  BASKET = '/basket/'
  CHOOSE_PC = 'choopse-pc'
  DEVICES = 'devices'
  REVIEWS = 'reviews'
  CONTACTS = 'contacts'

  STANDART = 'standart'
  ADVANCED = 'advanced'
  EXCLUSIVE = 'exclusive'

  GET_ID(id: string) {
    return `/#${id}`
  }
}

export const MAIN = new MainPage()
