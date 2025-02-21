'use client'

import { Provider } from 'react-redux'
import { store } from './store/basket.slice'
import { LazyMotion, domAnimation } from 'framer-motion'

export function Providers({ children }: {
    children: React.ReactNode,
}) {
    return (<Provider store={store}>
        <LazyMotion features={domAnimation}>
            {children}
        </LazyMotion>
    </Provider>)
}
