import Image from 'next/image'
import Link from 'next/link'

export function LogoItem() {
  return (
    <Link href='/' className='flex items-center'>
      <Image src='svgs/icon.svg' alt='GANG-logo' height={24} width={24} className='block mr-3' />
      <span className='text-white text-2xl uppercase font-wadik'>gang</span>
    </Link>
  )
}