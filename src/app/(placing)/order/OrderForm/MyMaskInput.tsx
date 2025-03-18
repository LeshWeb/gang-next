import { FormEventHandler, useId } from 'react'
import { IMaskInput } from 'react-imask'
import cn from 'clsx'

interface Props {
    onChange?: FormEventHandler<HTMLInputElement>
    value?: string
    ref?: any
    error?: string
    mask?: string
    placeholder?: string
}

export function MyMaskInput({ onChange, value, ref, error, mask, placeholder }: Props) {
    const inputId = useId()

    return <div className='mb-12 relative'>
        <IMaskInput
            id={inputId}
            onChange={onChange}
            value={value}
            inputRef={ref}
            mask={mask}
            placeholder={placeholder}
            className={cn(
                'peer border border-h-border rounded-xl p-5 md:max-w-150 w-full block mb-2 transition-colors focus:outline-none focus:ring-0 focus:border-secondary bg-h-border/50 placeholder-transparent',
                { 'border-red-500': error }
            )}
        />
        <label
            htmlFor={inputId}
            className="block text-xl mb-2 absolute left-5 -top-10 text-gray-400 peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5 peer-placeholder-shown:left-5 peer-focus:-top-10 peer-focus:left-5 peer-focus:text-gray-400 transition-all" >
            {placeholder}
        </label>
        <p className="text-red-500 h-8 max-w-max pl-5">{error && error}</p>
    </div>
}
