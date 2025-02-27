interface BurgerProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const BurgerMenu = ({ isOpen, setIsOpen }: BurgerProps) => {

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <button className='hidden max-sm:flex h-11 w-11 flex-col items-center justify-center space-y-2 p-2 focus:outline-none' onClick={toggleMenu}>
      <div className={`h-0.5 w-9 rounded bg-desc transition-transform ease-in ${isOpen && 'translate-y-2.5 rotate-45 rounded'}`}></div>
      <div className={`h-0.5 w-9 rounded bg-desc transition-opacity ease-in ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
      <div className={`h-0.5 w-9 rounded bg-desc transition-transform ease-in ${isOpen && '-translate-y-2.5 -rotate-45 rounded'}`}></div>
    </button>
  )
}
