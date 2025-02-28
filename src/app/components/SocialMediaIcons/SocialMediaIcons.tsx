import DiscordIcon from './icons/discord.svg'
import TelegramIcon from './icons/telegram.svg'
import TwichIcon from './icons/twich.svg'
import WhatsUpIcon from './icons/whatsup.svg'
import YouTubeIcon from './icons/youtube.svg'
import cn from 'clsx'

type FooterProps = {
  size: 'big' | 'small'
}

export function SocialMediaIcons({ size }: FooterProps) {

  return (
    <div className={cn('flex text-active flex-nowrap', {
      'gap-5 max-lg:gap-4': size === 'big',
      'gap-1': size === 'small',
    })}>
      <YouTubeIcon className={cn('aspect-square active:text-white hover:text-secondary', {
        'w-20 max-xl:w-15 max-lg:w-12 max-sm:w-10': size === 'big',
        'w-6': size === 'small',
      })} />
      <DiscordIcon
        className={cn('aspect-square active:text-white hover:text-secondary', {
          'w-20 max-xl:w-15 max-lg:w-12 max-sm:w-10': size === 'big',
          'w-6': size === 'small',
        })}
      />
      <TwichIcon
        className={cn('aspect-square active:text-white hover:text-secondary', {
          'w-20 max-xl:w-15 max-lg:w-12 max-sm:w-10': size === 'big',
          'w-6': size === 'small',
        })}
      />
      <TelegramIcon
        className={cn('aspect-square active:text-white hover:text-secondary', {
          'w-20 max-xl:w-15 max-lg:w-12 max-sm:w-10': size === 'big',
          'w-6': size === 'small',
        })}
      />
      <WhatsUpIcon
        className={cn('aspect-square active:text-white hover:text-secondary', {
          'w-20 max-xl:w-15 max-lg:w-12 max-sm:w-10': size === 'big',
          'w-6': size === 'small',
        })}
      />
    </div>
  )
}
