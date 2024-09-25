import styles from './Basket.module.css'
import BasketLogo from '@/app/public/svgs/basket.svg'

export function Basket() {
  return <BasketLogo className={styles.basket} />
}
