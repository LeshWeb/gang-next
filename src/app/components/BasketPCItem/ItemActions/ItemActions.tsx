import { useDispatch } from 'react-redux'
import { ArrowButtonLeft } from '../../ArrowButtonLeft/ArrowButtonLeft'
import { ArrowButtonRight } from '../../ArrowButtonRight/ArrowButtonRight'
import { decremented, incremented, resetBasket } from '@/app/store/basket.slice'

interface IItemActions {
  count: number
  type: string
}

export function ItemActions({ count, type }: IItemActions) {
  const dispath = useDispatch()
  return (
    <div className='grid max-w-[300px] grid-cols-3 items-center justify-items-center justify-self-end'>
      <ArrowButtonLeft
        onClick={() => {
          dispath(decremented(type))
        }}
      />
      <p className='wadik text-3xl text-[#686efc]'>{count}</p>
      <ArrowButtonRight
        isSmall
        onClick={() => {
          dispath(incremented(type))
        }}
      />
    </div>
  )
}
