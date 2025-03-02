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
    <div className='grid grid-cols-[max-content_1fr_1fr] grid-rows-1 row-gap-5 items-center w-full card rounded-xl p-5 max-h-40 gap-10'>
      <Image src={src} alt={'PC'} width={80} height={80} />
      <p className='font-wadik font-bold text-3xl text-active'>{type}</p>
      <ItemActions type={payloadType} count={count} />
    </div>
  )
}