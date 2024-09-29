'use client'
import { Title } from '../../Title/Title'
import { CommentCard } from '../../CommentCard/CommentCard'
import styles from './Comments.module.css'
import Image from 'next/image'
import userOne from '@/app/public/users_comment/user_1.png'
import userTwo from '@/app/public/users_comment/user_2.png'
import userThree from '@/app/public/users_comment/user_3.png'
import { ArrowButtonLeft } from '../../ArrowButtonLeft/ArrowButtonLeft'
import { ArrowButtonRight } from '../../ArrowButtonRight/ArrowButtonRight'
import { SecondaryBtn } from '../../SecondaryBtn/SecondaryBtn'
import { Sidebar } from '../../Sidebar/Sidebar'
import {
  comment_one,
  comment_two,
  comment_three,
} from '@/app/data/comment-data'

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

import './styles.css'

export function Comments() {
  return (
    <section className="section">
      <Title title="Доволен сервисом?" description="ОСТАВЬ ОТЗЫВ" />
      <div className={styles.feedback_cards}>
        <Swiper
          spaceBetween={40}
          className={styles.comment_swiper}
          modules={[Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            951: {
              slidesPerView: 2,
            },
            1480: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <CommentCard {...comment_one}>
              <Image
                src={userOne}
                alt="People comment`s"
                className={styles.image}
              />
            </CommentCard>
          </SwiperSlide>
          <SwiperSlide>
            <CommentCard {...comment_two}>
              <Image
                src={userTwo}
                alt="People comment`s"
                className={styles.image}
              />
            </CommentCard>
          </SwiperSlide>
          <SwiperSlide>
            <CommentCard {...comment_three}>
              <Image
                src={userThree}
                alt="People comment`s"
                className={styles.image}
              />
            </CommentCard>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.feedback_cta}>
        <SecondaryBtn title="Оставить отзыв" href={'#'} />
        <Sidebar scrollbar="horizontal" />
        <div>
          <ArrowButtonLeft />
          <ArrowButtonRight />
        </div>
      </div>
    </section>
  )
}
