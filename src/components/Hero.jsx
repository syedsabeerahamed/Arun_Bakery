import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

const Hero = () => {
  const container = useRef();
  const headlineRef = useRef();
  const subtitleRef = useRef();
  const descriptionRef = useRef();
  const buttonsRef = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();

    const headlineSplit = new SplitType(headlineRef.current, { types: 'chars' });
    const descriptionSplit = new SplitType(descriptionRef.current, { types: 'lines' });

    mm.add("(min-width: 768px)", () => {
      // Desktop-specific heavy animations
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });

      gsap.set(headlineSplit.chars, { 
        y: 100, 
        opacity: 0, 
        rotateX: -90,
        transformOrigin: 'top center'
      });
      gsap.set(subtitleRef.current, { opacity: 0, x: -50, letterSpacing: '0.8em' });
      gsap.set(descriptionRef.current, { opacity: 0, filter: 'blur(10px)' });
      gsap.set(buttonsRef.current, { opacity: 0, scale: 0.8 });
      gsap.set(imageRef.current, { scale: 1.5, filter: 'brightness(0)' });

      tl.to(imageRef.current, { scale: 1, filter: 'brightness(1)', duration: 3, ease: 'expo.inOut' })
        .to(subtitleRef.current, { opacity: 1, x: 0, letterSpacing: '0.3em', duration: 2 }, '-=2')
        .to(headlineSplit.chars, { y: 0, opacity: 1, rotateX: 0, stagger: 0.02, duration: 1.2 }, '-=1.5')
        .to(descriptionRef.current, { opacity: 1, filter: 'blur(0px)', duration: 1.5 }, '-=1')
        .to(buttonsRef.current, { opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(1, 0.5)' }, '-=1');

      // Mouse parallax only on desktop
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 50;
        const yPos = (clientY / window.innerHeight - 0.5) * 50;
        gsap.to(imageRef.current, { x: xPos, y: yPos, duration: 2, ease: 'power2.out' });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile-friendly simplified animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

      gsap.set(headlineRef.current, { opacity: 0, scale: 0.9, y: 30 });
      gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
      gsap.set(descriptionRef.current, { opacity: 0, y: 20 });
      gsap.set(buttonsRef.current, { opacity: 0, y: 30 });
      gsap.set(imageRef.current, { scale: 1.2, filter: 'brightness(0.5)' });

      tl.to(imageRef.current, { scale: 1.05, filter: 'brightness(0.7)', duration: 2 })
        .to(subtitleRef.current, { opacity: 1, y: 0 }, '-=1.5')
        .to(headlineRef.current, { opacity: 1, scale: 1, y: 0 }, '-=1.2')
        .to(descriptionRef.current, { opacity: 1, y: 0 }, '-=1')
        .to(buttonsRef.current, { opacity: 1, y: 0 }, '-=0.8');
    });

    // Persistent subtle bg drift
    gsap.to(imageRef.current, {
      scale: 1.1,
      xPercent: 1.5,
      yPercent: 1.5,
      duration: 30,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    return () => {
      headlineSplit.revert();
      descriptionSplit.revert();
      mm.revert();
    };
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-[100svh] flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img 
          ref={imageRef}
          className="w-full h-full object-cover opacity-80 gpu" 
          alt="artisan bread" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZS7_dq15fpbWwZPNBsIClVfq1EuhHKiw42U3IlXvmomjeSJkRyCvE5uMNja7RJWSswcZplu7GE6Xmzt2cXY9yijriynGohG6Ocwzn_B70RlSZD2MX1dD88Gw61UqzaDXMUqbLK0a_AxLnrkThqhdxhJWOrff67JvbqMS2eXI2p7K2BM0a7Cz1TxulZZCo203V4i18T9ACChjBDx7BznQ01GCr5ut3MDZInalGsATqAZI0jBY7heO5icDJjh_W6gGg-THPgQ1oIzFF" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-4xl pt-20">
          <span ref={subtitleRef} className="font-label text-tertiary-fixed-dim uppercase text-[10px] md:text-xs mb-6 md:mb-8 block font-bold tracking-[0.4em]">
            Est. 1996 — Heritage
          </span>
          <h1 ref={headlineRef} className="text-display-lg text-white font-headline leading-[0.9] mb-8 md:mb-12 -ml-1 md:-ml-2">
            Soul in Every <span className="italic font-light text-tertiary-fixed">Crumb.</span>
          </h1>
          <div className="max-w-xl">
            <p ref={descriptionRef} className="text-white/70 text-lg md:text-2xl font-body mb-10 md:mb-12 leading-relaxed">
              Where ancient grains meet the patient hands of the archivist. Our sourdough is born of a 28-year-old mother culture and the morning mist.
            </p>
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-5 md:gap-8">
              <button className="group relative bg-tertiary-fixed text-on-tertiary-fixed px-10 md:px-12 py-4 md:py-5 rounded-sm font-label uppercase tracking-widest text-[10px] md:text-xs font-black overflow-hidden transition-all duration-500">
                <span className="relative z-10">Explore Collection</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
              <button className="group relative border border-white/30 text-white px-10 md:px-12 py-4 md:py-5 rounded-sm font-label uppercase tracking-widest text-[10px] md:text-xs overflow-hidden transition-all duration-500">
                <span className="relative z-10">Our Process</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
