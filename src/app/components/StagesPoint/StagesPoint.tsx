'use client'
import styles from './StagesPoint.module.css'
import ArrowLeft from '@/app/public/svgs/indicaters/arrow-left.svg'
import ArrowRight from '@/app/public/svgs/indicaters/arrow-right.svg'
import { IndicatorFirst } from '../Indicators/IndicatorFirst/IndicatorFirst'
import { IndicatorSecond } from '../Indicators/IndicatorSecond/IndicatorSecond'
import { IndicatorThree } from '../Indicators/IndicatorThree/IndicatorThree'

export function StagesPoint() {
  return (
    <div className={styles.stages}>
      <IndicatorFirst />
      <ArrowLeft className={styles.arrow_left} />
      <IndicatorSecond />
      <ArrowRight className={styles.arrow_right} />
      <IndicatorThree />
    </div>
  )
}
