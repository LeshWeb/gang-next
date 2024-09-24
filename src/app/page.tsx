import styles from './page.module.css'
import { Main } from '@/app/components/01_Sections/01_Main/Main'
import { Stages } from './components/01_Sections/02_Stages/Stages'
import { Cards } from './components/01_Sections/03_Cards/Cards'
import { Devices } from './components/01_Sections/04_Devices/Devices'

export default function Page() {
  return (
    <div className={styles.container}>
      <Main />
      <Stages />
      <Cards />
      <Devices />
    </div>
  )
}
