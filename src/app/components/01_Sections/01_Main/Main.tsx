'use client'
import { PrimaryBtn } from '../../PrimaryBtn/PrimaryBtn'
import styles from './Main.module.css'
import swiper from './Swiper.module.css'
import { ArrowButtonRight } from '../../ArrowButtonRight/ArrowButtonRight'
import { ArrowButtonLeft } from '../../ArrowButtonLeft/ArrowButtonLeft'
import { Under } from '../../Under/Under'

import Image from 'next/image'
import FirstImage from '@/app/public/main_image/main-fitst.png'
import SecondImage from '@/app/public/main_image/main-second.png'
import ThreeImage from '@/app/public/main_image/main-three.png'

import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'

// import required modules
import { Navigation } from 'swiper/modules'

export function Main() {
  const swiperRef = useRef<SwiperRef | null>(null)
  const sidebar = useRef<HTMLDivElement | null>(null)
  const [slide, setSlide] = useState<number>(1)
  return (
    <main className="main">
      <div className={styles.main}>
        <div className={swiper.swiper_view}>
          <Swiper
            className={swiper.swiper}
            modules={[Navigation]}
            navigation
            ref={swiperRef}
          >
            <SwiperSlide>
              <Image
                className={swiper.swiper_image}
                src={FirstImage}
                alt="Main first page image"
                fill={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={swiper.swiper_image}
                src={SecondImage}
                alt="Main first page image"
                fill={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={swiper.swiper_image}
                src={ThreeImage}
                alt="Main first page image"
                fill={true}
              />
            </SwiperSlide>
          </Swiper>
        </div>
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
        <div className={styles.main_slidebar}>
          <p className={styles.slidebar_start}>0{slide}</p>
          <div className={styles.main_case}>
            <div className={styles.main_loading} ref={sidebar}></div>
          </div>
          <p className={styles.slidebar_end}>03</p>
        </div>
        <div className={styles.main_down}>
          <Under />
          <div>
            <ArrowButtonLeft
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.swiper.slidePrev()
                }

                if (sidebar.current) {
                  if (slide === 2) {
                    sidebar.current.style.top = '0px'
                    setSlide(1)
                  } else if (slide === 3) {
                    sidebar.current.style.top = '64px'
                    setSlide(2)
                  }
                }
              }}
            />
            <ArrowButtonRight
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.swiper.slideNext()
                }
                if (sidebar.current) {
                  if (slide === 1) {
                    sidebar.current.style.top = '62px'
                    setSlide(2)
                  } else if (slide === 2) {
                    sidebar.current.style.top = '124px'
                    setSlide(3)
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
