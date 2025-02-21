'use client'
import { useState } from 'react';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button
      className="hidden [@media(max-width:600px)]:flex flex-col justify-center items-center w-11 h-11 p-2 space-y-2 focus:outline-none"
      onClick={toggleMenu}
    >
      <div
        className={`w-9 h-[2px] bg-[#b5c1c9] transition-transform duration-300 rounded ${isOpen && 'rotate-45 translate-y-2.5 rounded'
          }`}
      ></div>
      <div
        className={`w-9 h-[2px] bg-[#b5c1c9] transition-opacity duration-300 rounded ${isOpen ? 'opacity-0' : 'opacity-100'
          }`}
      ></div>
      <div
        className={`w-9 h-[2px] bg-[#b5c1c9] transition-transform duration-300 rounded ${isOpen && '-rotate-45 -translate-y-2.5 rounded'
          }`}
      ></div>
    </button>
  );
};