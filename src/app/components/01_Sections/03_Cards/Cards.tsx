import { white, black, green } from '@/app/data/card-data'
import { Card } from '../../Card/Card'
import { Title } from '../../Title/Title'
import Image from 'next/image'
import WhitePC from '@/app/public/PC/whitePC.png'
import BlackPC from '@/app/public/PC/blackPC.png'
import GreenPC from '@/app/public/PC/greenPC.png'

export function Cards() {
  return (
    <section className="section">
      <Title description={'Cо своей сборкой'} title={'Выбирай и выигрывай'} />
      <Card data={white} title="Стандартный" price={300} href={'#'}>
        <Image src={WhitePC} alt="White PC" />
      </Card>
      <Card data={black} title="Продвинутый" price={400} href={'#'}>
        <Image src={BlackPC} alt="White PC" />
      </Card>
      <Card data={green} title="Эксклюзивный" price={500} href={'#'}>
        <Image src={GreenPC} alt="White PC" />
      </Card>
    </section>
  )
}
