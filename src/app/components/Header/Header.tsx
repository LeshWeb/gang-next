import { LogoItem } from '../LogoItem/LogoItem'
import Link from 'next/link'
import styles from './Header.module.css'
import { Basket } from '../Basket/Basket'
import { Burger } from '../Burger/Burger'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_items}>
        <LogoItem />
        <nav>
          <ul className={styles.navigation}>
            <li>
              <Link className={styles.link} href={'#'}>
                Выбор ПК
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={'#'}>
                Девайсы
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={'#'}>
                Отзывы
              </Link>
            </li>
            <li>
              <Link className={styles.link} href={'#'}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header_icons}>
          <Basket />
          <Burger />
        </div>
      </div>
    </header>
  )
}
