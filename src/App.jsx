import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Header from './components/Header';
import Hero from './components/Hero';
import BentoSection from './components/BentoSection';
import PromoSection from './components/PromoSection';
import HeritageStory from './components/HeritageStory';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  useSmoothScroll();
  const appRef = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Section Transitions (Zoom and Fade) - Desktop only
      const sections = gsap.utils.toArray('section');
      
      sections.forEach((section, i) => {
        if (i === 0) return; 

        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
          scale: 0.8,
          opacity: 0,
          backgroundColor: '#000',
          ease: 'none',
        });
      });
    });

    // Ambient background motion (stays on both)
    gsap.to('.ambient-bg', {
      opacity: 0.5,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    return () => mm.revert();
  }, { scope: appRef });

  return (
    <div ref={appRef} className="bg-surface relative">
      <div className="ambient-bg fixed inset-0 pointer-events-none z-[-1] opacity-0 bg-gradient-to-tr from-surface via-surface-container-low to-surface-container-high transition-opacity duration-1000"></div>
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <BentoSection />
        <PromoSection />
        <HeritageStory />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
