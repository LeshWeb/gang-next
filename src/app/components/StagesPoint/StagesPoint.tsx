import styles from './StagesPoint.module.css'
import Circle from '@/app/public/svgs/circle.svg'
import Indicate from '@/app/public/svgs/indicaters/indicate1.svg'

export function StagesPoint() {
  return (
    <>
      <div className={styles.stages_card}>
        <div className={styles.stages_circle}>
          <Indicate className={styles.indicate_svg} />
          <Circle className={styles.circle_svg} />
          <p className={styles.circle_text}>01</p>
        </div>
        <p className={styles.circle_desc}>Отправь паспортные данные</p>
      </div>
    </>
  )
}
