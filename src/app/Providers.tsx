'use client'
import { Provider } from 'react-redux'
import { store } from './store/basket.slice'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { BurgerSideBar } from './components/BurgerSideBar/BurgerSideBar'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'

export function Providers({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Provider store={store}>
      <LazyMotion features={domAnimation}>
        <Toaster toastOptions={{
          style: {
            backgroundColor: '#181b20',
            border: '1px solid #343d44',
            color: 'white',
            marginTop: '60px'
          }
        }} />
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && <BurgerSideBar />}
        {children}
        <Footer />
      </LazyMotion>
    </Provider>
  )
}
