import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BentoSection = () => {
  const container = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop: 3D Flip reveals
      const items = gsap.utils.toArray('.bento-item');
      items.forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: 'top 90%' },
          rotateX: -45, rotateY: i % 2 === 0 ? 15 : -15, scale: 0.8,
          opacity: 0, y: 100, duration: 1.5, ease: 'elastic.out(1, 0.75)',
          delay: i * 0.1, clearProps: 'all'
        });
      });

      gsap.to('.bento-item', {
        y: -10, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut',
        stagger: { each: 0.5, from: 'random' }
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile: Simplified Fade & Slide
      gsap.from('.bento-item', {
        scrollTrigger: { trigger: '.bento-grid', start: 'top 85%' },
        opacity: 0, y: 50, stagger: 0.1, duration: 1, ease: 'power2.out',
        clearProps: 'all'
      });
    });

    gsap.from('.bento-header-text', {
      scrollTrigger: { trigger: '.bento-header', start: 'top 85%' },
      opacity: 0, filter: 'blur(20px)', y: 30, duration: 1.5, ease: 'power3.out'
    });

    return () => mm.revert();
  }, { scope: container });

  return (
    <section ref={container} className="py-20 md:py-32 px-6 md:px-10 bg-surface-container-low overflow-hidden perspective-container">
      <div className="max-w-screen-2xl mx-auto">
        <div className="bento-header flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-xl bento-header-text">
            <span className="font-label text-on-surface-variant tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4 block font-bold">
              The Savory Archive
            </span>
            <h2 className="text-display-md text-primary leading-tight">Savory Heritage Puffs</h2>
          </div>
          <p className="bento-header-text text-on-surface-variant font-body max-w-sm text-base md:text-lg italic opacity-70">
            Layers of laminated dough, hand-folded 144 times to achieve the perfect structural integrity of flavor and crunch.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 bento-grid">
          <div className="bento-item md:col-span-8 group relative overflow-hidden bg-white shadow-xl md:shadow-2xl rounded-sm gpu">
            <img 
              className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110" 
              alt="pastry puff" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpRvVsVEOZycNlnyqxg_EhH7ajfa-QWXA6rcebiQvdjx8PxxOmfx5U1YEZ99ok7eHkotfk5i-ZuzYu9eQW3862s_2k6CmGY2z4v5Xen6uPY2jiUNzI8vfXIPPk07__fIGmMK_gp5I2onqNeoeAA_CnAXPQszDD2FpPDnfkX0Rz5kpMws-ebB3BFPmmV6ZS2-Wj1reactBo9sruhgeznKLV9fUkTR7-Y_zYNXXBNjLikubD8kGwsxjaFJ7m__irfSEeCBhFzKcnQkZt" 
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-primary via-primary/40 to-transparent text-white">
              <span className="text-tertiary-fixed text-[10px] md:text-sm font-label uppercase tracking-widest mb-2 md:mb-4 block font-bold">
                Signature Selection
              </span>
              <h3 className="text-3xl md:text-4xl font-headline italic">The Truffle & Wild Leek Shell</h3>
            </div>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-8 md:gap-10">
            <div className="bento-item bg-primary-container p-8 md:p-12 flex-1 flex flex-col justify-center text-on-primary-container gpu border border-white/5">
              <span className="material-symbols-outlined text-tertiary-fixed text-4xl md:text-5xl mb-6 md:mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>
                workspace_premium
              </span>
              <h3 className="text-2xl md:text-3xl font-headline text-white mb-4 md:mb-6">Gold-Crust Technique</h3>
              <p className="text-on-primary-container/70 text-sm md:text-base leading-relaxed font-light">
                Our proprietary baking process uses steam-injection at 240°C to create the iconic golden shell.
              </p>
            </div>
            <div className="bento-item bg-tertiary-fixed p-8 md:p-12 flex-1 flex flex-col justify-center gpu">
              <h3 className="text-primary font-headline text-2xl md:text-3xl mb-6 italic leading-snug">"The crunch that defines a morning."</h3>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-primary/30"></div>
                <span className="font-label text-on-tertiary-fixed text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">— Chef Arun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
