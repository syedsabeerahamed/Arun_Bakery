import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PromoSection = () => {
  const container = useRef();
  const imageRef = useRef();
  const contentRef = useRef();
  const revealMaskRef = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop: Horizontal Mask reveal
      const tl = gsap.timeline({
        scrollTrigger: { trigger: container.current, start: 'top 70%' }
      });
      tl.from(revealMaskRef.current, { scaleX: 0, transformOrigin: 'left center', duration: 1.5, ease: 'expo.inOut' })
        .from('.promo-image-wrapper', { xPercent: -100, duration: 1.5, ease: 'expo.inOut' }, '-=1.5')
        .from(contentRef.current, { x: 100, opacity: 0, duration: 1.2, ease: 'power4.out' }, '-=0.5');

      gsap.to(imageRef.current, {
        scrollTrigger: { trigger: container.current, start: 'top bottom', end: 'bottom top', scrub: true },
        scale: 1.3, yPercent: 30, ease: 'none'
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile: Simple Fade-in
      gsap.from(contentRef.current, {
        scrollTrigger: { trigger: contentRef.current, start: 'top 85%' },
        opacity: 0, y: 30, duration: 1, ease: 'power2.out'
      });
      gsap.from('.promo-image-wrapper', {
        scrollTrigger: { trigger: '.promo-image-wrapper', start: 'top 85%' },
        opacity: 0, y: 30, duration: 1, ease: 'power2.out'
      });
    });

    gsap.from('.promo-feature', {
      scrollTrigger: { trigger: '.promo-features', start: 'top 85%' },
      y: 40, opacity: 0, stagger: 0.2, duration: 1.2, ease: 'power3.out'
    });

    return () => mm.revert();
  }, { scope: container });

  return (
    <section ref={container} className="bg-[#0a110a] py-20 md:py-32 overflow-hidden relative min-h-screen flex items-center">
      <div ref={revealMaskRef} className="absolute inset-0 bg-[#0a110a] z-0 hidden md:block"></div>
      
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-center">
          <div className="promo-image-wrapper relative perspective-container group w-full lg:w-1/2">
            <div className="absolute -top-6 -left-6 md:-top-12 md:-left-12 w-40 h-40 md:w-80 md:h-80 border border-tertiary-fixed/10 z-0"></div>
            <div className="overflow-hidden rounded-sm shadow-2xl bg-black aspect-[4/5] md:aspect-auto">
              <img 
                ref={imageRef}
                className="w-full h-[450px] md:h-[750px] object-cover md:scale-150 gpu opacity-60 md:opacity-80 group-hover:opacity-100 transition-opacity duration-1000" 
                alt="chocolate cake" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACplF6Mxtu2IFMCg2cHRaxHxKOzZedw6NlMZxZ0vCq5kK1ew1aIjiZfnfp1tXf1pptmgtWBKekUNYDNwj7Rvy_XG5XXjhfzrO6PE341hy6uYztrq0CfNkj8VjMW6eOiTQHHqqTIN_O6R0fLh0_MfBBdrgNtlOe0p__D5-FJeIUL1EfHRyyZRBfsE6zfqZLOYQaeBwBq4PUOaH1-WKS_SrdtlN7R6g1Cs11NeRFFTkbpj8uwCy-Zzkg9I3QCwYiE-YsiP8-F4ll02gr" 
              />
            </div>
          </div>
          
          <div ref={contentRef} className="text-white w-full lg:w-1/2">
            <div className="mb-8 md:mb-12">
              <span className="font-label text-tertiary-fixed tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 md:mb-8 block font-black">
                Noir Series — Chapter I
              </span>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-headline mb-8 md:mb-10 leading-[0.8] tracking-tighter">
                Rich Black Forest <span className="italic font-light text-tertiary-fixed-dim">Noir</span>
              </h2>
              <div className="w-16 md:w-20 h-1 bg-tertiary-fixed mb-8 md:mb-12"></div>
            </div>
            
            <p className="text-primary-fixed/60 text-lg md:text-xl font-body mb-12 md:mb-16 leading-relaxed max-w-lg italic">
              An architectural marvel of 70% dark Valrhona cocoa, Kirsch-soaked cherries from our archives, and a silence that only true luxury provides.
            </p>
            
            <div className="space-y-10 md:space-y-12 promo-features mb-12 md:mb-16">
              <div className="flex gap-6 md:gap-8 items-start promo-feature">
                <span className="text-tertiary-fixed font-headline text-2xl md:text-3xl opacity-50">01</span>
                <div>
                  <h4 className="font-label uppercase tracking-[0.2em] text-[10px] md:text-sm mb-2 md:mb-3 font-bold text-tertiary-fixed">The Cocoa Base</h4>
                  <p className="text-primary-fixed/40 text-sm md:text-base leading-relaxed">Single-origin beans roasted to a deep, smoky profile.</p>
                </div>
              </div>
              <div className="flex gap-6 md:gap-8 items-start promo-feature">
                <span className="text-tertiary-fixed font-headline text-2xl md:text-3xl opacity-50">02</span>
                <div>
                  <h4 className="font-label uppercase tracking-[0.2em] text-[10px] md:text-sm mb-2 md:mb-3 font-bold text-tertiary-fixed">The Archivist Cherries</h4>
                  <p className="text-primary-fixed/40 text-sm md:text-base leading-relaxed">Aged for six months in heritage oak barrels.</p>
                </div>
              </div>
            </div>
            
            <button className="w-full sm:w-auto group relative overflow-hidden bg-transparent border border-tertiary-fixed/30 text-tertiary-fixed px-10 md:px-14 py-5 md:py-6 rounded-sm font-label uppercase tracking-widest text-[10px] md:text-xs font-black transition-all duration-500">
              <span className="relative z-10 group-hover:text-primary transition-colors">Pre-order the Noir Series</span>
              <div className="absolute inset-0 bg-tertiary-fixed translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
