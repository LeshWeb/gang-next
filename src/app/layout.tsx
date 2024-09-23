import type { Metadata } from 'next'
import './globals.css'
import 'normalize.css'
import { Header } from './components/Header/Header'
import { Footer } from '@/app/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'NextGANG',
  description: 'Portfolio Landing page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>
        <link rel="icon" href="/public/svgs/icon.svg" sizes="any" />
      </body>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
