'use client'
import Indicate from '@/app/public/svgs/indicaters/indicate2.svg'
import Circle from '@/app/public/svgs/circle.svg'
import indicators from './IndicatorSecond.module.css'
import styles from './../Indicators.module.css'
import clsx from 'clsx'

import { useInView } from 'react-intersection-observer'

export function IndicatorSecond() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-200px 0px',
  })

  return (
    <div className={styles.stages}>
      <div className={styles.stages_card}>
        <div className={styles.stages_circle} ref={ref}>
          <Indicate
            className={clsx(indicators.position, {
              [styles.opacity]: inView === false,
              [indicators.animate]: inView === true,
            })}
          />
          <Circle className={styles.circle_svg} />
          <p className={styles.circle_text}>02</p>
        </div>
        <p className={styles.circle_desc}>Доставка и установка компьютера</p>
      </div>
    </div>
  )
}
