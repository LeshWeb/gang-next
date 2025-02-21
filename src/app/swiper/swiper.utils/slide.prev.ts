import { SwiperRef } from 'swiper/react'

interface SwiperProps {
  swiperRef: React.RefObject<SwiperRef | null>
}

export function swiperPrev({ swiperRef }: SwiperProps) {
  if (swiperRef?.current) {
    swiperRef.current.swiper.slidePrev()
  }
}

interface sidebarProps {
  sidebar: React.RefObject<HTMLDivElement | null>
  slide: number
  setSlide: (slide: number) => void
}

export function slidePrev({ sidebar, slide, setSlide }: sidebarProps) {
  if (sidebar.current) {
    if (slide === 1) {
      sidebar.current.style.top = '122px'
      setSlide(3)
    } else if (slide === 2) {
      sidebar.current.style.top = '-2px'
      setSlide(1)
    } else if (slide === 3) {
      sidebar.current.style.top = '62px'
      setSlide(2)
    }
  }
}
