'use client'
import { BasketPCItem } from '../../components/BasketPCItem/BasketPCItem'
import { MAIN } from '../../config/main.page.config'
import { Title } from '../../components/Title/Title'
import { useSelector } from 'react-redux'
import { BasketState } from '../../store/basket.slice'
import { usePrice } from './usePrice'
import { PrimaryBtn } from '../../components/PrimaryBtn/PrimaryBtn'


export default function Page() {
  const standartCount = useSelector((state: BasketState) => state.minimum)
  const advancedCount = useSelector((state: BasketState) => state.medium)
  const exclusiveCount = useSelector((state: BasketState) => state.maxiumum)
  const price = usePrice()

  return <>
    <div className='mb-20 max-mob:mb-10'>
      {price ? <Title description={'Корзина'} /> : <Title description={'Ваша корзина пуста'} />}
      <div className='grid grid-cols-[3fr_1fr] max-2xl:grid-cols-[2fr_1fr] max-xl:grid-cols-1 gap-10 max-mob:gap-5'>
        <div className='flex-col gap-10 flex max-mob:gap-5'>
          {!!standartCount && <BasketPCItem type='Стандартный' src='/PC/whitePC.png' count={standartCount} />}
          {!!advancedCount && <BasketPCItem type='Продвинутый' src='/PC/blackPC.png' count={advancedCount} />}
          {!!exclusiveCount && <BasketPCItem type='Эксклюзивный' src='/PC/greenPC.png' count={exclusiveCount} />}
        </div>
        {!!price && <div className='card text-xl rounded-xl font-wadik flex items-center justify-center max-h-32 max-xl:p-5 max-sm:text-base'>{`ИТОГО: ${price} руб/сутки`} </div>}
      </div>
    </div>
    <PrimaryBtn title={!!price ? 'Перейти к оформлению заказа' : 'Перейти к выбору компьютера'} size={'big'} href={!!price ? MAIN.ORDER : MAIN.GET_ID(MAIN.CHOOSE_PC)} myStyle='max-sm:text-sm!' />
  </>
}