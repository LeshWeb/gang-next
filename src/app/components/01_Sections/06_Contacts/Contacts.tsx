import { SocialMediaIcons } from '../../SocialMediaIcons/SocialMediaIcons'
import { Title } from '../../Title/Title'
import styles from './Contacts.module.css'

export function Contacts() {
  return (
    <section className="contacts">
      <div className={styles.contacts_container}>
        <Title description={'Свяжись для заказа'} title={'Наши контакты'} />
        <div className={styles.social_media}>
          <SocialMediaIcons size="big" />
        </div>
      </div>
    </section>
  )
}
