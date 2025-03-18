import { useSelector } from 'react-redux'
import { BasketState } from '../../store/basket.slice'

export function usePrice(): number {
  const standartCount = useSelector((state: BasketState) => state.minimum)
  const advancedCount = useSelector((state: BasketState) => state.medium)
  const exclusiveCount = useSelector((state: BasketState) => state.maxiumum)

  const price = standartCount * 300 + advancedCount * 400 + exclusiveCount * 500
  return price
}
