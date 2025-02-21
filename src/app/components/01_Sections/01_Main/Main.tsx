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
import { slidePrev, swiperPrev } from '@/app/swiper/swiper.utils/slide.prev'
import { slideNext, swiperNext } from '@/app/swiper/swiper.utils/slide.next'
import { ToggleSlide } from '../../ToggleSlide/ToggleSlide'

export function Main() {
  const swiperRef = useRef<SwiperRef | null>(null)
  const sidebar = useRef<HTMLDivElement | null>(null)
  const [slide, setSlide] = useState<number>(1)
  return (
    <main className="section">
      <div className={styles.main}>
        <div className={swiper.swiper_view}>
          <Swiper
            className={swiper.swiper}
            modules={[Navigation]}
            navigation
            ref={swiperRef}
            loop={true}
          >
            <SwiperSlide>
              <Image
                className='absolute inset-0 w-full h-full bg-[radial-gradient(circle,transparent_40%,[var(--bg-color)]_90%)] pointer-events-none'
                src={FirstImage}
                alt="Main first page image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className='absolute inset-0 w-full h-full bg-[radial-gradient(circle,transparent_40%,var(--bg-color)_90%)] pointer-events-none'
                src={SecondImage}
                alt="Main second page image"
                fill={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className='absolute inset-0 w-full h-full bg-[radial-gradient(circle,transparent_40%,var(--bg-color)_90%)] pointer-events-none'
                src={ThreeImage}
                alt="Main threed page image"
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
        <PrimaryBtn title="Арендовать" size="big" />
        <ToggleSlide slide={slide} sidebar={sidebar} toggleClassName='z-3' />
        <div className={styles.main_down}>
          <Under />
          <div className='flex gap-5'>
            <ArrowButtonLeft
              onClick={() => {
                swiperPrev({ swiperRef })
                slidePrev({ sidebar, slide, setSlide })
              }}
            />
            <ArrowButtonRight
              onClick={() => {
                swiperNext({ swiperRef })
                slideNext({ sidebar, slide, setSlide })
              }}
            />
          </div>
        </div>
      </div>
    </main>
  )
}