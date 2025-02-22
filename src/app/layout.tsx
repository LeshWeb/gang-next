import type { Metadata } from 'next'
import './globals.css'
import 'normalize.css'
import { Providers } from './Providers'

export const metadata: Metadata = {
  icons: {
    icon: '/public/svgs/icon.svg',
  },
  title: 'GANG',
  description: 'Portfolio Landing page by Aleksey Cherkasov',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
