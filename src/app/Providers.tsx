'use client'

import { Provider } from 'react-redux'
import { store } from './store/basket.slice'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { BurgerSideBar } from './components/BurgerSideBar/BurgerSideBar'
import { useState } from 'react'

export function Providers({ children }: {
    children: React.ReactNode,
}) {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return (<Provider store={store}>
        <LazyMotion features={domAnimation}>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen && <BurgerSideBar />}
            {children}
            < Footer />
        </LazyMotion>
    </Provider>)
}
