interface Props {
  slide: number
  sidebar: React.RefObject<HTMLDivElement | null>
  setSlide: (slide: number) => void
}

export function slideHorNext({ sidebar, slide, setSlide }: Props) {
  if (sidebar.current) {
    if (slide >= 1 && slide <= 8) {
      sidebar.current.style.left = `${slide * 20}px`
      setSlide(slide + 1)
    } else if (slide === 9) {
      sidebar.current.style.left = '-2px'
      setSlide(1)
    }
  }
}

export function slideHorPrev({ sidebar, slide, setSlide }: Props) {
  if (sidebar.current) {
    if (slide === 1) {
      sidebar.current.style.left = '158px'
      setSlide(9)
    } else if (slide >= 2 && slide <= 9) {
      sidebar.current.style.left = `${(slide - 2) * 20 - 2}px`
      setSlide(slide - 1)
    }
  }
}
