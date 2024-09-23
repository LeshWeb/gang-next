import styles from './page.module.css'
import { Main } from '@/app/components/01_Sections/01_Main/Main'
import { Stages } from './components/01_Sections/02_Stages/Stages'

export default function Page() {
  return (
    <div className={styles.container}>
      <Main />
      <Stages />
    </div>
  )
}
