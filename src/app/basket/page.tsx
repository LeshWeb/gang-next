'use client'
import { BasketPCItem } from '../components/BasketPCItem/BasketPCItem'
import { MAIN } from '../config/main.page.config'
import Link from 'next/link'
import { Title } from '../components/Title/Title'
import { useSelector } from 'react-redux'
import { BasketState } from '../store/basket.slice'
import { usePrice } from './usePrice'
import { PrimaryBtn } from '../components/PrimaryBtn/PrimaryBtn'
import cn from 'clsx'


export default function Page() {
    const standartCount = useSelector((state: BasketState) => state.minimum)
    const advancedCount = useSelector((state: BasketState) => state.medium)
    const exclusiveCount = useSelector((state: BasketState) => state.maxiumum)
    const price = usePrice()

    return <section className={cn('section', 'max-w-[96vw] mx-auto w-full mt-24 border')}>
        <div className='mb-20'>
            <div className='flex gap-10 mb-10'>
                <Link href={MAIN.GET_ID(MAIN.HOME)} className='font-inter text-active font-medium text-2xl uppercase'>Главная</Link>
                <Link href={MAIN.GET_ID(MAIN.BASKET)} className='font-inter text-active font-medium text-2xl uppercase'>Корзина</Link>
                <Link href={MAIN.GET_ID(MAIN.HOME)} className='font-inter text-active font-medium text-2xl uppercase'>Оформление заказа</Link>
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
    </section >
}