'use client'
import Indicate from '@/app/public/svgs/indicaters/indicate3.svg'
import Circle from '@/app/public/svgs/circle.svg'
import indicators from './IndicatorThree.module.css'
import styles from './../Indicators.module.css'
import clsx from 'clsx'

import { useInView } from 'react-intersection-observer'

export function IndicatorThree() {
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
          <p className={styles.circle_text}>03</p>
        </div>
        <p className={styles.circle_desc}>Готово, наслаждайся игрой</p>
      </div>
    </div>
  )
}
