import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HeritageStory = () => {
  const container = useRef();
  const imageRef = useRef();
  const counter1Ref = useRef();
  const counter2Ref = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop-specific heavy reveal
      gsap.from(imageRef.current, {
        scrollTrigger: { trigger: imageRef.current, start: 'top 80%' },
        filter: 'blur(30px) grayscale(100%) brightness(2)',
        scale: 1.2, opacity: 0, duration: 2.5, ease: 'power2.out'
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile-friendly reveal
      gsap.from(imageRef.current, {
        scrollTrigger: { trigger: imageRef.current, start: 'top 85%' },
        opacity: 0, y: 30, duration: 1.5, ease: 'power2.out'
      });
    });

    gsap.from('.heritage-text-line', {
      scrollTrigger: { trigger: '.heritage-text-content', start: 'top 85%' },
      opacity: 0, y: 20, stagger: 0.2, duration: 1.2, ease: 'power3.out'
    });

    const statsTl = gsap.timeline({
      scrollTrigger: { trigger: '.heritage-stats', start: 'top 85%' }
    });

    statsTl.from([counter1Ref.current, counter2Ref.current], {
      textContent: 0, duration: 2, ease: 'power4.out',
      snap: { textContent: 1 }, stagger: 0.3
    }).from('.stat-label', { opacity: 0, y: 10, duration: 1 }, '-=1.5');

    return () => mm.revert();
  }, { scope: container });

  return (
    <section ref={container} className="py-20 md:py-40 bg-surface overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low/50 -skew-x-12 transform origin-top translate-x-1/2 pointer-events-none hidden md:block"></div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-10 relative z-10">
        <div className="heritage-header mb-20 md:mb-32 flex flex-col md:flex-row items-baseline gap-6 md:gap-12 border-b border-outline-variant/10 pb-12 md:pb-16 text-center md:text-left">
          <h2 className="text-display-md text-primary -tracking-tighter">Our Heritage</h2>
          <span className="font-label text-on-surface-variant tracking-[0.4em] uppercase text-[10px] md:text-xs font-light">
            Legacy / Est. 1996
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 items-center">
          <div className="md:col-span-4 heritage-stats flex flex-row md:flex-col justify-around md:justify-start gap-12 md:space-y-24 order-2 md:order-1">
            <div className="text-center md:text-left">
              <div className="flex items-baseline justify-center md:justify-start">
                <span ref={counter1Ref} className="text-6xl md:text-8xl font-headline text-primary">28</span>
                <span className="text-2xl md:text-4xl font-headline text-tertiary-fixed ml-1">+</span>
              </div>
              <span className="stat-label font-label uppercase tracking-[0.2em] text-[10px] md:text-xs text-on-surface-variant font-bold">Years</span>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-baseline justify-center md:justify-start">
                <span ref={counter2Ref} className="text-6xl md:text-8xl font-headline text-primary">50</span>
                <span className="text-2xl md:text-4xl font-headline text-tertiary-fixed ml-1">k+</span>
              </div>
              <span className="stat-label font-label uppercase tracking-[0.2em] text-[10px] md:text-xs text-on-surface-variant font-bold">Loaves</span>
            </div>
          </div>
          
          <div className="md:col-span-4 relative group order-1 md:order-2">
            <div className="absolute -inset-4 border border-outline-variant/20 rotate-2 md:rotate-3 transition-transform group-hover:rotate-0 duration-1000"></div>
            <img 
              ref={imageRef}
              className="relative z-10 w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-[2000ms] aspect-[4/5] object-cover shadow-2xl rounded-sm gpu" 
              alt="baker" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwWYs_kaoCc8nxwUbwP3IY9lu0tasRUwQCLLaZkzRWBu02yClIanQoGUcQk64CxCBShsAmCJerRw9izRfbvturR9ZXOpjryg8tIMJ7NTqsn6Bi3oJ2GP5D6T46qZSnc6bKKuSp7xgS9b67hsR3u1uwRORwrSDgdIecsExnxggurO3c1mlxPhDhtkiAWmjrT4mfk2NpCzLyb5s0U0JKk971X5jHj8iZyI4OMpQ09a8pWtCUkeiljdj5-hBvoLJ68BQGGdljkGgJHzwt" 
            />
          </div>
          
          <div className="md:col-span-4 heritage-text-content space-y-12 md:space-y-16 order-3">
            <div className="space-y-6">
              <p className="heritage-text-line font-body italic text-xl md:text-2xl text-primary leading-relaxed border-l-4 border-tertiary-fixed pl-6 md:pl-8">
                "We don't just bake; we preserve."
              </p>
              <p className="heritage-text-line font-body text-base md:text-lg text-on-surface-variant leading-relaxed pl-7 md:pl-9 opacity-80">
                Each loaf is a document of the season, the grain, and the patient passage of time.
              </p>
            </div>
            
            <div className="heritage-text-line flex flex-col items-center md:items-start gap-8">
              <img 
                alt="Logo" 
                className="h-10 md:h-14 w-auto opacity-30 hover:opacity-100 transition-opacity duration-1000" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-DZgYyoa3HkxHC_0uVT5wbBY5BLPnSmXOORhMN5zpqZ5lQigyynHW3kg8ra1Mup3d9ekVykeai3M1xRuUP7urLdJr8BYT1R-7i9ebx4avyrun9GOa1L2D5ULXtbQlc85fRSt9sTa1LniS9eu7y44MZ9x8EdAESPWukVJcXsBS77f7YaY3ic-jbN_vfhe6mbp6yWOBtCjL_R1hTF_ZnyAF3FzofgH8vdFGfD8qhTf1MhRc4BH2SLIEvlGq5jEa4M_9Zuyyn4ViWTHQ" 
              />
              <p className="text-on-surface-variant text-[10px] md:text-sm font-body tracking-[0.2em] font-medium text-center md:text-left">Founded in the valley, 1996.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageStory;
