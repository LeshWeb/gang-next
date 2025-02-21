import { SwiperRef } from 'swiper/react'

interface SwiperProps {
  swiperRef: React.RefObject<SwiperRef | null>
}
interface sidebarProps {
  sidebar: React.RefObject<HTMLDivElement | null>
  slide: number
  setSlide: (slide: number) => void
}

export function swiperNext({ swiperRef }: SwiperProps) {
  if (swiperRef.current) {
    swiperRef.current.swiper.slideNext()
  }
}

export function slideNext({ sidebar, slide, setSlide }: sidebarProps) {
  if (sidebar.current) {
    if (slide === 1) {
      sidebar.current.style.top = '60px'
      setSlide(2)
    } else if (slide === 2) {
      sidebar.current.style.top = '122px'
      setSlide(3)
    } else if (slide === 3) {
      sidebar.current.style.top = '-2px'
      setSlide(1)
    }
  }
}
