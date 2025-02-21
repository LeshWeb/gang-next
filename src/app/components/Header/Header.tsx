import { LogoItem } from '../LogoItem/LogoItem'
import Link from 'next/link'
import styles from './Header.module.css'
import { Basket } from '../Basket/Basket'
import { MAIN } from '@/app/config/main.page.config'
import { BurgerMenu } from '../Burger/Burger'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_items}>
        <LogoItem />
        <nav>
          <ul className={styles.navigation}>
            <li>
              <Link className={styles.link} href={MAIN.GET_ID(MAIN.CHOOSE_PC)}>
                Выбор ПК
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={MAIN.GET_ID(MAIN.DEVICES)}>
                Девайсы
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={MAIN.GET_ID(MAIN.REVIEWS)}>
                Отзывы
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={MAIN.GET_ID(MAIN.CONTACTS)}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header_icons}>
          <Basket />
          <BurgerMenu />
        </div>
      </div>
    </header>
  )
}
