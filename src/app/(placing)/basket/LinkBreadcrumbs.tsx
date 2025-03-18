'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'clsx'

interface Props {
    page: string
    text: string
}

export function LinkBreadcrumbs({ page, text }: Props) {
    const path = usePathname()
    return <Link href={page} className={cn('font-inter text-active font-medium text-2xl uppercase opacity-50 max-lg:text-xl max-sm:text-base', {
        'opacity-100': path === page,
    })}>{text}</Link>
}
