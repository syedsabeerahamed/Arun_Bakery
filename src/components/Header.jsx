import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const tl = useRef();

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true })
      .to(menuRef.current, {
        clipPath: 'circle(150% at 100% 0%)',
        duration: 1,
        ease: 'expo.inOut'
      })
      .from('.mobile-nav-link', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5');
  }, { scope: menuRef });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  };

  return (
    <>
      <header className="bg-[#fbf9f4]/80 backdrop-blur-2xl docked full-width top-0 sticky z-[60] shadow-[0px_12px_32px_rgba(27,28,25,0.06)] border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-6 md:px-10 py-5 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-4">
            <span 
              className="material-symbols-outlined text-[#1B3022] cursor-pointer hover:text-tertiary transition-colors z-[70]"
              onClick={toggleMenu}
            >
              {isMenuOpen ? 'close' : 'menu'}
            </span>
            <span className="font-serif italic text-xl md:text-2xl text-[#1B3022] font-semibold tracking-tight">Arun Bakery</span>
          </div>
          
          <nav className="hidden md:flex gap-12 items-center">
            <a className="font-serif tracking-tight text-3xl font-light text-[#1B3022] border-b-2 border-tertiary-fixed pb-1 hover:border-primary transition-all" href="#">
              The Artisanal Hearth
            </a>
            <a className="text-[#1B3022]/60 hover:text-[#1B3022] transition-colors font-label uppercase tracking-widest text-xs font-bold" href="#">
              Collection
            </a>
            <a className="text-[#1B3022]/60 hover:text-[#1B3022] transition-colors font-label uppercase tracking-widest text-xs font-bold" href="#">
              Story
            </a>
          </nav>
          
          <button className="bg-primary text-on-primary px-6 md:px-8 py-3 rounded-sm font-label uppercase tracking-[0.2em] text-xs transition-all duration-300 hover:bg-primary-container active:scale-95 duration-150 ease-in-out font-bold">
            Order Now
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        ref={menuRef}
        className="fixed inset-0 bg-[#1b3022] z-[55] flex items-center justify-center pointer-events-none"
        style={{ clipPath: 'circle(0% at 100% 0%)', pointerEvents: isMenuOpen ? 'all' : 'none' }}
      >
        <nav className="flex flex-col gap-12 text-center">
          <a className="mobile-nav-link text-tertiary-fixed text-6xl font-headline italic" href="#" onClick={toggleMenu}>Home</a>
          <a className="mobile-nav-link text-white text-4xl font-headline" href="#" onClick={toggleMenu}>Collection</a>
          <a className="mobile-nav-link text-white text-4xl font-headline" href="#" onClick={toggleMenu}>Our Story</a>
          <a className="mobile-nav-link text-white text-4xl font-headline" href="#" onClick={toggleMenu}>Contact</a>
          
          <div className="mobile-nav-link pt-12 flex justify-center gap-8">
            <span className="material-symbols-outlined text-tertiary-fixed text-3xl">language</span>
            <span className="material-symbols-outlined text-tertiary-fixed text-3xl">share</span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
