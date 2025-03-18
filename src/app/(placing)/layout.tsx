import cn from 'clsx'
import { LinkBreadcrumbs } from './basket/LinkBreadcrumbs'
import { MAIN } from '../config/main.page.config'

export default function OrderLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section className={cn('section', 'max-w-[96vw] mx-auto w-full mt-24 ')}>
        <div className='flex gap-x-10 md:mb-10 mb-5 gap-y-2 max-sm:gap-x-5 max-sm:flex-wrap'>
            <LinkBreadcrumbs page={MAIN.HOME} text='Главная' />
            <LinkBreadcrumbs page={MAIN.BASKET} text='Корзина' />
            <LinkBreadcrumbs page={MAIN.ORDER} text='Оформление заказа' />
        </div>
        {children}
    </section>
}