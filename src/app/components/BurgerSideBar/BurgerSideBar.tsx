'use client'
import Link from 'next/link'
import styles from './BurgerSideBar.module.css'
import { MAIN } from '@/app/config/main.page.config'
import { SocialMediaIcons } from '../SocialMediaIcons/SocialMediaIcons'
import * as m from 'framer-motion/m'

export function BurgerSideBar() {
    return <m.aside className={styles.burger}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}

    >
        <nav className={styles.navigation_container}>
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
            <ul className={styles.navigation}>
                <li>
                    <Link className={styles.link} href={MAIN.GET_ID(MAIN.STANDART)}>
                        Стандартный
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} href={MAIN.GET_ID(MAIN.ADVANCED)}>
                        Продвинутый
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} href={MAIN.GET_ID(MAIN.EXCLUSIVE)}>
                        Эксклюзивный
                    </Link>
                </li>
            </ul>
            <SocialMediaIcons size="small" />
        </nav>
    </m.aside>
}
