'use client'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

interface Props {
    children: React.ReactNode
}
export function PageLayout({ children }: Props) {
    return <Header />
    { children }
    < Footer />
}
