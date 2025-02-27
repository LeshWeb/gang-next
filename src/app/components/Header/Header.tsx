'use client'
import { LogoItem } from '../LogoItem/LogoItem'
const DynamicBasket = dynamic(() =>
  import('../Basket/Basket').then((mod) => mod.Basket)
)
import { MAIN } from '@/app/config/main.page.config'
import { BurgerMenu } from '../Burger/Burger'
import dynamic from 'next/dynamic'
import { LinkItem } from './LinkItem'

interface HeaderProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function Header({ isOpen, setIsOpen }: HeaderProps) {
  return (
    <header className='flex bg-bg fixed z-15 top-0 left-0 w-full py-3 border-b-2 border-h-border max-h-20 sm:max-h-24'>
      <div className='flex justify-between items-center w-full max-w-[96vw] mx-auto'>
        <LogoItem />
        <nav className='hidden sm:flex'>
          <ul className='flex gap-12 max-lg:gap-10 max-md:gap-5'>
            <LinkItem href={MAIN.GET_ID(MAIN.CHOOSE_PC)}>
              Выбор ПК
            </LinkItem>
            <LinkItem href={MAIN.GET_ID(MAIN.DEVICES)}>
              Девайсы
            </LinkItem>
            <LinkItem href={MAIN.GET_ID(MAIN.REVIEWS)}>
              Отзывы
            </LinkItem>
            <LinkItem href={MAIN.GET_ID(MAIN.CONTACTS)}>
              Контакты
            </LinkItem>
          </ul>
        </nav>
        <div className='flex gap-5 items-center'>
          <DynamicBasket />
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  )
}