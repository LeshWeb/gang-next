'use client'
import { basketCookies, sendMessage } from '@/app/sevices/telegram.service'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { MyMaskInput } from './MyMaskInput'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { resetBasket } from '@/app/store/basket.slice'
import Cookies from 'js-cookie'

export interface IForm {
    name: string;
    phone: string;
}

export function OrderForm() {
    const { handleSubmit, control, formState: { errors }, reset } = useForm<IForm>({
        mode: 'onChange'
    });

    const pathname = useRouter()
    const dispatch = useDispatch()

    const onSubmit: SubmitHandler<IForm> = (data) => {
        const basket: basketCookies = JSON.parse(Cookies.get('basket') || '{}')

        const text = `Имя: ${data.name}\nТелефон: ${data.phone}\nМинимальный - ${basket.minimum}\nПродвинутый - ${basket.medium}\nЭксклюзивный - ${basket.maxiumum}`

        sendMessage(text)
            .then(() => {
                reset({
                    phone: '',
                    name: ''
                });
                toast.success(text, {
                    duration: 5000
                })
                pathname.push('/')
                dispatch(resetBasket())
            })
            .catch((error) => {
                console.error('Ошибка при отправке:', error.message);
                toast.error('Ошибка при отправке сообщения');
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="text-xl max-md:mt-16">
            <Controller
                name="name"
                control={control}
                rules={{ required: 'Имя обязательное поле' }}
                render={({ field: { ref, onChange, value } }) => <MyMaskInput
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    placeholder="Введите имя"
                    error={errors.name?.message}
                />}
            />
            <Controller
                name="phone"
                control={control}
                rules={{
                    required: 'Телефон обязательное поле', pattern: {
                        value: /^\+7/,
                        message: 'Телефон должен начинаться с +7',
                    }
                }}
                render={({ field: { ref, onChange, value } }) => <MyMaskInput
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    mask='+0 (000) 000-00-00'
                    placeholder="Введите телефон"
                    error={errors.phone?.message}
                />}
            />
            <button type="submit" className="block font-wadik bg-primary hover:bg-secondary transition-colors text-2xl rounded-xl md:max-w-150 max-md:text-xl w-full max-sm:px-6 max-sm:py-5 px-10 py-8">
                Отправить заявку
            </button>
        </form>

    );
}