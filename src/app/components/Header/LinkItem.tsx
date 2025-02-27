'use client';

import Link from 'next/link';

interface LinkProps {
    href: string;
    children?: string;
}

export function LinkItem({ href, children }: LinkProps) {
    return (
        <li>
            <Link
                className='text-desc font-inter text-xl transition-colors hover:text-white font-medium ease-in max-lg:text-lg max-md:text-[1rem] uppercase'
                href={href}
            >
                {children}
            </Link>
        </li>
    );
}