import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Newsletter = () => {
  const container = useRef();
  const cardRef = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop-specific unfolding invitation
      gsap.from(cardRef.current, {
        scrollTrigger: { trigger: cardRef.current, start: 'top 85%' },
        scaleY: 0, transformOrigin: 'bottom center', opacity: 0,
        duration: 1.8, ease: 'expo.inOut', clearProps: 'all'
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile-friendly simplified reveal
      gsap.from(cardRef.current, {
        scrollTrigger: { trigger: cardRef.current, start: 'top 90%' },
        opacity: 0, y: 50, duration: 1.2, ease: 'power3.out', clearProps: 'all'
      });
    });

    gsap.from('.newsletter-reveal-item', {
      scrollTrigger: { trigger: '.newsletter-content', start: 'top 80%' },
      y: 30, opacity: 0, stagger: 0.2, duration: 1, ease: 'power2.out'
    });

    gsap.from('.newsletter-image-inner', {
      scrollTrigger: { trigger: '.newsletter-image', start: 'top 85%' },
      yPercent: 100, duration: 1.5, ease: 'expo.out'
    });

    return () => mm.revert();
  }, { scope: container });

  return (
    <section ref={container} className="mx-6 md:mx-10 mb-20 md:mb-40 overflow-hidden">
      <div ref={cardRef} className="max-w-screen-2xl mx-auto bg-[#1b3022] relative overflow-hidden flex flex-col md:flex-row items-center shadow-2xl rounded-sm gpu min-h-[500px] md:min-h-[600px]">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-tertiary-fixed shadow-md z-20"></div>
        
        <div className="newsletter-content p-8 md:p-24 flex-1 relative z-10 w-full">
          <div className="newsletter-reveal-item mb-8 md:mb-12">
            <span className="font-label text-tertiary-fixed tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 block font-black">
              Exclusive Membership
            </span>
            <h2 className="text-4xl md:text-7xl font-headline text-white mb-6 leading-tight">
              Join the <span className="italic font-light">Inner Circle.</span>
            </h2>
          </div>
          
          <p className="newsletter-reveal-item text-primary-fixed/60 mb-10 md:mb-16 max-w-sm md:max-w-md font-body text-base md:text-lg leading-relaxed">
            Receive monthly bulletins from the bakery archives. Early access to seasonal drops and the Archivist Collection.
          </p>
          
          <form className="newsletter-reveal-item flex flex-col sm:flex-row gap-4 md:gap-6 max-w-md">
            <input 
              className="flex-1 bg-white/5 border border-white/20 focus:border-tertiary focus:ring-1 focus:ring-tertiary outline-none text-white text-sm py-4 md:py-5 px-6 md:px-8 rounded-sm placeholder:text-white/30 italic transition-all duration-500" 
              placeholder="Your archival email" 
              type="email" 
            />
            <button className="group relative bg-tertiary-fixed text-on-tertiary-fixed font-label uppercase tracking-widest text-[10px] md:text-xs px-8 md:px-12 py-4 md:py-5 rounded-sm overflow-hidden transition-all duration-500 font-bold">
              <span className="relative z-10 group-hover:text-white transition-colors">Subscribe</span>
              <div className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </form>
        </div>

        <div className="newsletter-image w-full md:w-1/2 h-[300px] md:h-full self-stretch overflow-hidden relative">
          <div className="newsletter-image-inner w-full h-full">
            <img 
              className="w-full h-full object-cover opacity-60 md:opacity-80 gpu" 
              alt="fresh baguettes" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4Umecy2oY30f8byY0pKmOKvx3wjR4tsLPbbHzu-AHPZFVV6kriPx6-xGE5mds8OHqL5KJRlFjysnBPPS4dISIk7VRZlM9MqXPkZWPKo2iGg6s_4O1NBoncBNPgJWDhGzG0ovtvPdrxt0J4b0M4BvGkcxWfcVuTuxp3hvfG6-8PzDgyqWWHggJNjmzxQxvU3_oL364YaA8SSHh15TqY-YJrx5-7zW1M0C0uuz8-jwVE1yJVpkxBaAmZ8zC2ThhpL3UeiwZr89htedL" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1b3022] to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
