import { Title } from '@/app/components/Title/Title'
import { StagesPoint } from '../../StagesPoint/StagesPoint'

export function Stages() {
  return (
    <section className="section">
      <Title title="Аренда без залога" description="все, что нужно - паспорт" />
      <StagesPoint />
    </section>
  )
}
