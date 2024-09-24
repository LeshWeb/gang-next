'use client'

import styles from './StagesPoint.module.css'
import Circle from '@/app/public/svgs/circle.svg'
import Indicate1 from '@/app/public/svgs/indicaters/indicate1.svg'
import Indicate2 from '@/app/public/svgs/indicaters/indicate2.svg'
import Indicate3 from '@/app/public/svgs/indicaters/indicate3.svg'
import ArrowLeft from '@/app/public/svgs/indicaters/arrow-left.svg'
import ArrowRight from '@/app/public/svgs/indicaters/arrow-right.svg'
import clsx from 'clsx'

import { useInView } from 'react-intersection-observer'

export function StagesPoint() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-200px 0px',
    delay: 5,
  })

  return (
    <div className={styles.stages}>
      <div className={styles.stages_card}>
        <div className={styles.stages_circle} ref={ref}>
          <Indicate1
            className={clsx(styles.indicate_svg, {
              [styles.opacity]: inView === false,
              [styles.animate1]: inView === true,
            })}
          />
          <Circle className={styles.circle_svg} />
          <p className={styles.circle_text}>01</p>
        </div>
        <p className={styles.circle_desc}>Отправь паспортные данные</p>
      </div>
      <ArrowLeft />
      <div className={styles.stages_card}>
        <div className={styles.stages_circle}>
          <Indicate2 className={styles.indicate_svg2} />
          <Circle className={styles.circle_svg} />
          <p className={styles.circle_text}>02</p>
        </div>
        <p className={styles.circle_desc}>Доставка и установка компьютера</p>
      </div>
      <ArrowRight className={styles.arrow_right} />
      <div className={styles.stages_card}>
        <div className={styles.stages_circle}>
          <Indicate3 className={styles.indicate_svg3} />
          <Circle className={styles.circle_svg} />
          <p className={styles.circle_text}>03</p>
        </div>
        <p className={styles.circle_desc}>Готово, наслаждайся игрой</p>
      </div>
    </div>
  )
}
