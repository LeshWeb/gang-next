import { useDispatch } from 'react-redux'
import { decremented, incremented } from '@/app/store/basket.slice'
import { ButtonPCItem } from './ButtonPCItem'
import LeftArrow from '../../../../../public/svgs/left-arrow.svg'
import RightArrow from '../../../../../public/svgs/right-arrow.svg'

interface IItemActions {
  count: number
  type: string
}

export function ItemActions({ count, type }: IItemActions) {
  const dispath = useDispatch()
  return (
    <div className='grid max-w-[300px] grid-cols-3 items-center justify-items-center justify-self-end gap-8 max-md:gap-x-4 max-sm:gap-x-0'>
      <ButtonPCItem onClick={() => {
        dispath(decremented(type))
      }} >
        <LeftArrow className='scale-70' />
      </ButtonPCItem>
      <p className='wadik text-3xl text-[#686efc] font-wadik max-md:text-2xl max-sm:text-xl'>{count}</p>
      <ButtonPCItem onClick={() => {
        dispath(incremented(type))
      }} >
        <RightArrow className='scale-70' />
      </ButtonPCItem>
    </div>
  )
}
