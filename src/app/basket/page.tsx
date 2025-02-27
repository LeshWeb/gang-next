'use client'
import styles from './basket.page.module.scss'
import { BasketPCItem } from '../components/BasketPCItem/BasketPCItem'
import { MAIN } from '../config/main.page.config'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Title } from '../components/Title/Title'
import { useSelector } from 'react-redux'
import { BasketState } from '../store/basket.slice'
import { usePrice } from './usePrice'
import { PrimaryBtn } from '../components/PrimaryBtn/PrimaryBtn'


export default function Page() {
    const standartCount = useSelector((state: BasketState) => state.minimum)
    const advancedCount = useSelector((state: BasketState) => state.medium)
    const exclusiveCount = useSelector((state: BasketState) => state.maxiumum)
    const price = usePrice()

    return <section className={styles.container}>
        <div className={styles.basket}>
            <div className={styles.basket_items}>
                <Link href={MAIN.GET_ID(MAIN.HOME)} className={twMerge(styles.link, 'opacity-50')}>Главная</Link>
                <Link href={MAIN.GET_ID(MAIN.BASKET)} className={styles.link}>Корзина</Link>
                <Link href={MAIN.GET_ID(MAIN.HOME)} className={twMerge(styles.link, 'opacity-50')}>Оформление заказа</Link>
            </div>
            {price ? <Title description={'Корзина'} /> : <Title description={'Ваша корзина пуста'} />}
            <div className='grid grid-cols-[3fr_1fr] gap-10'>
                <div className='flex-col gap-10 flex '>
                    {!!standartCount && <BasketPCItem type='Стандартный' src='/PC/whitePC.png' count={standartCount} />}
                    {!!advancedCount && <BasketPCItem type='Продвинутый' src='/PC/blackPC.png' count={advancedCount} />}
                    {!!exclusiveCount && <BasketPCItem type='Эксклюзивный' src='/PC/greenPC.png' count={exclusiveCount} />}
                </div>
                {!!price && <div className='card text-xl rounded-xl wadik flex items-center justify-center max-h-32'>{`ИТОГО: ${price} руб/сутки`} </div>}
            </div>
        </div>
        <PrimaryBtn title={!!price ? 'Перейти к оформлению заказа' : 'Перейти к выбору компьютера'} size={'big'} />
        <p className='bg-sexy'>Если у вас остались вопросы, пожалуйста, свяжитесь с нами</p>
    </section >
}
