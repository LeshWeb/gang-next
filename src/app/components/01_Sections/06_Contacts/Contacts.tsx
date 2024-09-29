import { SocialMediaIcons } from '../../SocialMediaIcons/SocialMediaIcons'
import { Title } from '../../Title/Title'
import styles from './Contacts.module.css'
import Image from 'next/image'
import ContactsImg from '@/app/public/contacts/contacts.png'

export function Contacts() {
  return (
    <section className="section">
      <div className={styles.contacts_container}>
        <Image
          src={ContactsImg}
          alt="Игровое стол с ПК"
          className={styles.image}
        />
        <Title description={'Свяжись для заказа'} title={'Наши контакты'} />
        <div className={styles.social_media}>
          <SocialMediaIcons size="big" />
        </div>
      </div>
    </section>
  )
}
