'use client'
import { Title } from '../../Title/Title'
import { CommentCard } from '../../CommentCard/CommentCard'
import styles from './Comments.module.css'
import Image from 'next/image'
import { ArrowButtonLeft } from '../../ArrowButtonLeft/ArrowButtonLeft'
import { ArrowButtonRight } from '../../ArrowButtonRight/ArrowButtonRight'
import { SecondaryBtn } from '../../SecondaryBtn/SecondaryBtn'
import { Sidebar } from '../../Sidebar/Sidebar'
import { comments } from '@/app/data/comment-data'

import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

// import required modules
import { Navigation, Pagination } from 'swiper/modules'
import { MAIN } from '@/app/config/main.page.config'
import { swiperPrev } from '@/app/swiper/swiper.utils/slide.prev'
import { swiperNext } from '@/app/swiper/swiper.utils/slide.next'
import { slideHorNext, slideHorPrev } from './utills/slide.next'


export function Comments() {

  const swiperRef = useRef<SwiperRef | null>(null)
  const sidebar = useRef<HTMLDivElement | null>(null)
  const [slide, setSlide] = useState<number>(1)


  return (
    <section className="section" id={MAIN.REVIEWS}>
      <Title title="Доволен сервисом?" description="ОСТАВЬ ОТЗЫВ" />
      <Swiper
        className={styles.comment_swiper}
        modules={[Navigation]}
        ref={swiperRef}
        loop={true}
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 60,
            allowTouchMove: true
          },
          891: {
            slidesPerView: 2,
            spaceBetween: 40,
            allowTouchMove: true
          },
          931: {
            slidesPerView: 2,
            spaceBetween: 80,
            allowTouchMove: false
          },
          1341: {
            slidesPerView: 3,
            spaceBetween: 40,
            allowTouchMove: false
          },
        }}
      >
        {comments.map((comment) => {
          return <SwiperSlide key={comment.id}>
            <CommentCard comment={comment} >
              <Image
                src={comment.userAvatar}
                alt="People avatar"
                className={styles.image} />
            </CommentCard>
          </SwiperSlide>
        })}
      </Swiper>
      <div className={styles.feedback_cta}>
        <SecondaryBtn title="Оставить отзыв" />
        <Sidebar sidebar={sidebar} slide={slide} />
        <div className='flex gap-5'>
          <ArrowButtonLeft onClick={() => {
            swiperPrev({ swiperRef })
            slideHorPrev({ sidebar, slide, setSlide })
          }

          } />
          <ArrowButtonRight onClick={() => {
            swiperNext({ swiperRef })
            slideHorNext({ sidebar, slide, setSlide })
          }} />
        </div>
      </div>
    </section >
  )
}
