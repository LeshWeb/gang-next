import { PrimaryBtn } from '../../PrimaryBtn/PrimaryBtn'
import styles from './Main.module.css'
import { ArrowButtonRight } from '../../ArrowButtonRight/ArrowButtonRight'
import { ArrowButtonLeft } from '../../ArrowButtonLeft/ArrowButtonLeft'
import { Under } from '../../Under/Under'
import { Sidebar } from '../../Sidebar/Sidebar'
import Image from 'next/image'
import FirstImage from '@/app/public/main_image/main-fitst.png'

export function Main() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.bg_image}
        src={FirstImage}
        alt="Main page image"
        width="1200"
        height="844"
      />
      <div className={styles.main_body}>
        <div>
          <div className={styles.main_bollet}>
            <p className={styles.main_desc}>
              Лучшие решения для командной игры
              <br />и свежих новинок с доставкой на дом
            </p>
            <h1 className={styles.main_title}>
              Арендуй ПК
              <br />и играй дома
            </h1>
          </div>
          <PrimaryBtn title="Арендовать" size="big" href="#" />
        </div>
        <Sidebar />
      </div>
      <div className={styles.main_down}>
        <Under />
        <div>
          <ArrowButtonLeft />
          <ArrowButtonRight />
        </div>
      </div>
    </main>
  )
}
