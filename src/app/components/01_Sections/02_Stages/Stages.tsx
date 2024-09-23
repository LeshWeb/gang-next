import { Title } from '@/app/components/Title/Title'
import { StagesPoint } from '../../StagesPoint/StagesPoint'
import styles from './Stages.module.css'

export function Stages() {
  return (
    <section className={styles.stages}>
      <Title title="Аренда без залога" description="все, что нужно - паспорт" />
      <StagesPoint />
    </section>
  )
}
