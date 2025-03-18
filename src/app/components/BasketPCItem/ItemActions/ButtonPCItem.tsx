interface Props {
    onClick?: () => void
    children: React.ReactNode
}

export function ButtonPCItem({ onClick, children }: Props) {
    return <button onClick={onClick} className='flex items-center justify-center
     border-2 border-h-border rounded-xl w-max transition-colors hover:border-secondary fill-desc active:fill-primary active:bg-white'>{children}</button>
}
