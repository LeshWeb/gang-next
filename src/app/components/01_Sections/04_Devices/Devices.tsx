import styles from './Devices.module.css'
import Image from 'next/image'
import { Title } from '../../Title/Title'
import Headphones from '@/app/public/devices_image/headphones.jpg'
import Mouse from '@/app/public/devices_image/mouse.jpg'
import Keyboard from '@/app/public/devices_image/keyboard.jpg'
import Girl from '@/app/public/devices_image/girl.jpg'
import { MAIN } from '@/app/config/main.page.config'

export function Devices() {
  return (
    <section className="section" id={MAIN.DEVICES}>
      <Title title="Наши девайсы" description="В комплекте с каждым пк" />
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
            src={Headphones}
            alt="headphones"
            className={`${styles.grid_image} ${styles.grid_image_1}`}
          />
        </div>
        <div className={`${styles.grid_item} ${styles.grid_item_3}`}>
          <div className={styles.caption}>
            <p className={styles.caption_text}>Мышь - Razer DeathAdder V2</p>
          </div>
          <Image
            src={Mouse}
            alt="mouse"
            className={`${styles.grid_image} ${styles.grid_image_2}`}
          />
        </div>
        <div className={`${styles.grid_item} ${styles.grid_item_4}`}>
          <div className={styles.caption}>
            <p className={styles.caption_text}>Клавиатура - Keychron V2 Max</p>
          </div>
          <Image
            src={Keyboard}
            alt="keyboard"
            className={`${styles.grid_image} ${styles.grid_image_3}`}
          />
        </div>
        <div className={`${styles.grid_item} ${styles.grid_item_5}`}>
          <div className={styles.caption}>
            <p className={styles.caption_text}>Монитор - Razer Raptor 27</p>
          </div>
          <Image
            src={Girl}
            alt="girl"
            className={`${styles.grid_image} ${styles.grid_image_4}`}
          />
        </div>
      </div>
    </section >
  )
}
