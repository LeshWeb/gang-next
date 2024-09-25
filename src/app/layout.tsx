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
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0"
        />
      </body>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
