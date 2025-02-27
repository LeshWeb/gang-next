import DiscordIcon from '../../../../public/svgs/socialmedia/discord.svg'
import TelegramIcon from '../../../../public/svgs/socialmedia/teltgram.svg'
import TwichIcon from '../../../../public/svgs/socialmedia/twich.svg'
import WhatsUpIcon from '../../../../public/svgs/socialmedia/whatsup.svg'
import YouTubeIcon from '../../../../public/svgs/socialmedia/youtube.svg'
import styles from './SocialMediaIcons.module.css'
import { FooterProps } from './SocialMediaIcons.types'
import clsx from 'clsx'

export function SocialMediaIcons({ size }: FooterProps) {
  return (
    <div
      className={clsx(styles.social__media_footer, {
        [styles.small_gap]: size === 'small',
        [styles.big_gap]: size === 'big',
      })}
    >
      <YouTubeIcon
        className={clsx(styles.icon, {
          [styles.small]: size === 'small',
          [styles.big]: size === 'big',
        })}
      />
      <DiscordIcon
        className={clsx(styles.icon, {
          [styles.small]: size === 'small',
          [styles.big]: size === 'big',
        })}
      />
      <TwichIcon
        className={clsx(styles.icon, {
          [styles.small]: size === 'small',
          [styles.big]: size === 'big',
        })}
      />
      <TelegramIcon
        className={clsx(styles.icon, {
          [styles.small]: size === 'small',
          [styles.big]: size === 'big',
        })}
      />
      <WhatsUpIcon
        className={clsx(styles.icon, {
          [styles.small]: size === 'small',
          [styles.big]: size === 'big',
        })}
      />
    </div>
  )
}
