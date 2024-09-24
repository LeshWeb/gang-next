import styles from './Devices.module.css'
import Image from 'next/image'
import { Title } from '../../Title/Title'
import Headphones from '@/app/public/devices_image/headphones.jpg'
import Mouse from '@/app/public/devices_image/mouse.jpg'
import Keyboard from '@/app/public/devices_image/keyboard.jpg'
import Girl from '@/app/public/devices_image/girl.jpg'

export function Devices() {
  return (
    <section className="devices">
      <Title title="Наши девайсы" description="В комплекте с каждым пк" />
      <div className={styles.gallery}>
        <div className={`${styles.grid_item} ${styles.grid_item_1}`}>
          <p className={styles.grid_text}>
            Мы подобрали качественные и универсальные девайсы без дополнительных
            плат. Монитор, мышка, наушники и клавиатура в каждом комплекте.
          </p>
        </div>
        <div className={`${styles.grid_item} ${styles.grid_item_2}`}>
          <Image
            src={Headphones}
            alt="headphones"
            className={`${styles.grid_image} ${styles.grid_image_1}`}
          />
        </div>
        <div className={`${styles.grid_item} ${styles.grid_item_3}`}>
          <Image
            src={Mouse}
            alt="mouse"
            className={`${styles.grid_image} ${styles.grid_image_2}`}
          />
        </div>
        <div className={`${styles.grid_item} ${styles.grid_item_4}`}>
          <Image
            src={Keyboard}
            alt="keyboard"
            className={`${styles.grid_image} ${styles.grid_image_3}`}
          />
        </div>
        <div className={`${styles.grid_item} ${styles.grid_item_5}`}>
          <Image
            src={Girl}
            alt="girl"
            className={`${styles.grid_image} ${styles.grid_image_4}`}
          />
        </div>
      </div>
    </section>
  )
}
