import styles from './page.module.css'
import { Main } from '@/app/components/01_Sections/01_Main/Main'

export default function Page() {
  return (
    <div className={styles.container}>
      <Main />
    </div>
  )
}
