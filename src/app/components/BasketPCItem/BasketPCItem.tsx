import Image from 'next/image'
import { typeOfState } from '@/app/utils/typeOfState'
import { ItemActions } from './ItemActions/ItemActions'

interface Props {
  type: string
  src: string
  count: number
}

export function BasketPCItem({ type, src, count }: Props) {
  const payloadType = typeOfState(type)

  return (
    <div className='@container grid grid-cols-[max-content_1fr_1fr] items-center w-full card rounded-xl p-5 max-h-40 gap-x-10 max-sm:gap-x-5 max-mob:p-5 max-mob:gap-x-3 max-mob:grid-cols-2 max-mob:gap-y-5'>
      <Image src={src} alt={'PC'} width={80} height={80} className='max-sm:h-10 max-sm:w-10' />
      <p className='font-wadik font-bold text-3xl text-active max-md:text-2xl max-sm:text-xl max-40:text-base @max-lg:text-xl max-mob:col-span-2 max-mob:text-left-right max-mob:row-start-1'>{type}</p>
      <ItemActions type={payloadType} count={count} />
    </div>
  )
}