import { LogoItem } from '../LogoItem/LogoItem'
import Link from 'next/link'
import styles from './Header.module.css'
const DynamicBasket = dynamic(() => import('../Basket/Basket').then((mod) => mod.Basket))
import { MAIN } from '@/app/config/main.page.config'
import { BurgerMenu } from '../Burger/Burger'
import dynamic from 'next/dynamic'

interface HeaderProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function Header({ isOpen, setIsOpen }: HeaderProps) {
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
          <DynamicBasket />
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  )
}
