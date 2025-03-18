import styles from './Cards.module.css'
import { white, black, green } from '@/app/data/card-data'
import { Card } from '../../Card/Card'
import { Title } from '../../Title/Title'
import Image from 'next/image'
import { MAIN } from '@/app/config/main.page.config'

export function Cards() {
  return (
    <section className='section' id={MAIN.CHOOSE_PC}>
      <Title description={'Cо своей сборкой'} title={'Выбирай и выигрывай'} />
      <Card
        data={white}
        title='Стандартный'
        price={300}
        type='minimum'
        id={MAIN.STANDART}
        href='javascript:void(0)'
      >
        <Image
          src='/PC/whitePC.png'
          alt='White PC'
          className={styles.shadow}
          width={330}
          height={340}

        />
      </Card>
      <Card
        data={black}
        title='Продвинутый'
        price={400}
        type='medium'
        id={MAIN.ADVANCED}
        href='javascript:void(0)'
      >
        <Image
          src='/PC/blackPC.png'
          alt='Black PC'
          className={styles.shadow}
          width={330}
          height={340}
        />
      </Card>
      <Card
        data={green}
        title='Эксклюзивный'
        price={500}
        type='maxiumum'
        id={MAIN.EXCLUSIVE}
        href='javascript:void(0)'
      >
        <Image
          src='/PC/greenPC.png'
          alt='Green PC'
          className={styles.shadow}
          width={330}
          height={340}
        />
      </Card>
    </section>
  )
}
