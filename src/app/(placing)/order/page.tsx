import { Title } from '../../components/Title/Title'
import { OrderForm } from './OrderForm/OrderForm'

export default function Page() {
    return <>
        <Title description={'Оформление заказа'} />
        <OrderForm />
    </>
}
