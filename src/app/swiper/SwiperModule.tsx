'use client'
import styles from './SwiperModule.module.css'
import Image from 'next/image'
import FirstImage from '@/app/public/main_image/main-fitst.png'
import SecondImage from '@/app/public/main_image/main-second.png'
import ThreeImage from '@/app/public/main_image/main-three.png'
import { ArrowButtonLeft } from '../components/ArrowButtonLeft/ArrowButtonLeft'
import { ArrowButtonRight } from '../components/ArrowButtonRight/ArrowButtonRight'

import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'

// import required modules
import { Navigation } from 'swiper/modules'

export function SwiperModule() {
  const swiperRef = useRef<SwiperRef | null>(null)
  //   const swiper = useSwiper()
  return (
    <>
      {/* <div className={styles.view}> */}
      <Swiper
        className={styles.mySwiper}
        modules={[Navigation]}
        navigation
        ref={swiperRef}
      >
        <SwiperSlide>
          <Image
            className={styles.bg_image}
            src={FirstImage}
            alt="Main first page image"
            width="1200"
            height="844"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.bg_image}
            src={SecondImage}
            alt="Main first page image"
            width="1200"
            height="844"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.bg_image}
            src={ThreeImage}
            alt="Main first page image"
            width="1200"
            height="844"
          />
        </SwiperSlide>
        <ArrowButtonLeft onClick={() => console.log('hello')} />
        <ArrowButtonRight onClick={() => console.log('hello')} />
      </Swiper>
      {/* </div> */}
    </>
  )
}
