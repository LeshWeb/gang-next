'use client'
// swiper imports
import { useRef, useState } from 'react'
import React from 'react'
// import { useSwiper } from 'swiper/react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
// import required modules
import { Scrollbar } from 'swiper/modules'

import Image from 'next/image'
import FirstImage from '@/app/public/main_image/main-fitst.png'
import SecondImage from '@/app/public/main_image/main-second.png'
import ThreeImage from '@/app/public/main_image/main-three.png'

// import styles from './MainSwiper.module.css'

export function MainSwiper() {
  // const swiper = useSwiper()
  return (
    <div>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={FirstImage}
            alt="Main first page image"
            width="1200"
            height="844"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={SecondImage}
            alt="Main second page image"
            width="1200"
            height="844"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ThreeImage}
            alt="Main three page image"
            width="1200"
            height="844"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
