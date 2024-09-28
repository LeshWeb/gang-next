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

export function Comments() {
  return (
    <section className="section">
      <Title title="Доволен сервисом?" description="ОСТАВЬ ОТЗЫВ" />
      <div className={styles.feedback_cards}>
        <CommentCard
          text={
            'Компьютер привезли быстро, работает отлично, к девайсам нареканий нет. Отличный сервис, давно ждал такого в нашем городе. Все чистое и почти новое.'
          }
          name={'Олег Петров'}
          date={'12.01.2023 г.'}
        >
          <Image
            src={userOne}
            alt="People comment`s"
            className={styles.image}
          />
        </CommentCard>
        <CommentCard
          text={
            'Доставили на служебном автомобиле, помогли с установкой. Стандартный ПК в играх показывает себя отлично. Dota 2 стабильные 120 fps.'
          }
          name={'Дима Трунов'}
          date={'24.03.2023 г.'}
        >
          <Image
            src={userTwo}
            alt="People comment`s"
            className={styles.image}
          />
        </CommentCard>
        <CommentCard
          text={
            'Премиальный ПК, работает тихо, не греется. В играх показывает 200 и более fps. Очень доволен серисом. Очень удобно. Не приходится слушать крики школьников в клубе.'
          }
          name={'Саша Белов'}
          date={'24.03.2023 г.'}
        >
          <Image
            src={userThree}
            alt="People comment`s"
            className={styles.image}
          />
        </CommentCard>
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
