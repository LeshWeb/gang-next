import styles from './Devices.module.css'
import Image from 'next/image'
import { Title } from '../../Title/Title'
import { MAIN } from '@/app/config/main.page.config'

export function Devices() {
  return (
    <section className='section' id={MAIN.DEVICES}>
      <Title title='Наши девайсы' description='В комплекте с каждым пк' />
      <div className={styles.gallery}>
        <div className={`${styles.grid_item} ${styles.grid_item_1}`}>
          <p className={styles.grid_text}>
            Мы подобрали качественные и универсальные девайсы без дополнительных
            плат. Монитор, мышка, наушники и клавиатура в каждом комплекте.
          </p>
        </div>
        <div className={`${styles.grid_item} ${styles.grid_item_2}`}>
          <div className={styles.caption}>
            <p className={styles.caption_text}>Наушники - Razer Barracuda X</p>
          </div>
          <Image
            src='/devices_image/headphones.jpg'
            alt='headphones'
            className={`${styles.grid_image} ${styles.grid_image_1}`}
            fill={true}
          />
        </div>
        <div className={`${styles.grid_item} ${styles.grid_item_3}`}>
          <div className={styles.caption}>
            <p className={styles.caption_text}>Мышь - Razer DeathAdder V2</p>
          </div>
          <Image
            src='/devices_image/mouse.jpg'
            alt='mouse'
            className={`${styles.grid_image} ${styles.grid_image_2}`}
            fill={true}
          />
        </div>
        <div className={`${styles.grid_item} ${styles.grid_item_4}`}>
          <div className={styles.caption}>
            <p className={styles.caption_text}>Клавиатура - Keychron V2 Max</p>
          </div>
          <Image
            src='/devices_image/keyboard.jpg'
            alt='keyboard'
            className={`${styles.grid_image} ${styles.grid_image_3}`}
            fill={true}
          />
        </div>
        <div className={`${styles.grid_item} ${styles.grid_item_5}`}>
          <div className={styles.caption}>
            <p className={styles.caption_text}>Монитор - Razer Raptor 27</p>
          </div>
          <Image
            src='/devices_image/girl.jpg'
            alt='girl'
            className={`${styles.grid_image} ${styles.grid_image_4}`}
            fill={true}
          />
        </div>
      </div>
    </section>
  )
}
