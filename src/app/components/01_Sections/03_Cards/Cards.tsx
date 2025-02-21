import styles from './Cards.module.css'
import { white, black, green } from '@/app/data/card-data'
import { Card } from '../../Card/Card'
import { Title } from '../../Title/Title'
import Image from 'next/image'
import WhitePC from '@/app/public/PC/whitePC.png'
import BlackPC from '@/app/public/PC/blackPC.png'
import GreenPC from '@/app/public/PC/greenPC.png'
import { MAIN } from '@/app/config/main.page.config'

export function Cards() {
  return (
    <section className="section">
      <Title description={'Cо своей сборкой'} title={'Выбирай и выигрывай'} id={MAIN.CHOOSE_PC} />
      <Card data={white} title="Стандартный" price={300} type='minimum' id={MAIN.STANDART}>
        <Image
          src={WhitePC}
          alt="White PC"
          className={styles.shadow}
          width={330}
          height={340}
        />
      </Card>
      <Card data={black} title="Продвинутый" price={400} type='medium' id={MAIN.ADVANCED}>
        <Image
          src={BlackPC}
          alt="Black PC"
          className={styles.shadow}
          width={330}
          height={340}
        />
      </Card>
      <Card data={green} title="Эксклюзивный" price={500} type='maxiumum' id={MAIN.EXCLUSIVE}>
        <Image src={GreenPC} alt="Green PC" className={styles.shadow} width={330}
          height={340} />
      </Card>
    </section>
  )
}
