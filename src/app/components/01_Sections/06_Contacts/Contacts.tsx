import { SocialMediaIcons } from '../../SocialMediaIcons/SocialMediaIcons'
import { Title } from '../../Title/Title'
import styles from './Contacts.module.css'
import Image from 'next/image'
import ContactsImg from '@/app/public/contacts/contacts.png'
import { MAIN } from '@/app/config/main.page.config'
import { twMerge } from 'tailwind-merge'

export function Contacts() {
  return (
    <section className="section">
      <div className={styles.contacts_container}>
        <Title description={'Свяжись для заказа'} title={'Наши контакты'} id={MAIN.CONTACTS} />
        <div className={styles.social_media}>
          <SocialMediaIcons size="big" />
        </div>
        <Image
          src={ContactsImg}
          alt="Игровое стол с ПК"
          layout="fill"
          objectFit="cover"
          quality={100}
          className={styles.image}
        />
      </div>
    </section>
  )
}
