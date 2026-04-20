import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#eae8e3] w-full px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row justify-between items-start gap-12 border-t border-outline-variant/10">
      <div className="max-w-sm">
        <span className="font-serif text-3xl tracking-tighter text-[#1B3022] mb-6 block">Arun Bakery</span>
        <p className="text-[#1B3022] font-sans text-sm tracking-widest uppercase mb-8 leading-relaxed">
          © 2024 The Tactile Archivist Bakery. Heritage Grains. Hand-Forged Sourdough.
        </p>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-primary cursor-pointer hover:text-tertiary transition-colors">language</span>
          <span className="material-symbols-outlined text-primary cursor-pointer hover:text-tertiary transition-colors">share</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 flex-1 md:justify-end w-full md:w-auto">
        <div className="flex flex-col gap-4">
          <span className="font-bold text-[#e9c176] font-sans text-xs tracking-widest uppercase mb-2">Explore</span>
          <a className="text-[#1B3022]/70 hover:text-[#e9c176] transition-colors duration-200 font-sans text-sm tracking-widest uppercase" href="#">Our Story</a>
          <a className="text-[#1B3022]/70 hover:text-[#e9c176] transition-colors duration-200 font-sans text-sm tracking-widest uppercase" href="#">The Archivist Collection</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-[#e9c176] font-sans text-xs tracking-widest uppercase mb-2">Connect</span>
          <a className="text-[#1B3022]/70 hover:text-[#e9c176] transition-colors duration-200 font-sans text-sm tracking-widest uppercase" href="#">Wholesale</a>
          <a className="text-[#1B3022]/70 hover:text-[#e9c176] transition-colors duration-200 font-sans text-sm tracking-widest uppercase" href="#">Visit Us</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-[#e9c176] font-sans text-xs tracking-widest uppercase mb-2">Policies</span>
          <a className="text-[#1B3022]/70 hover:text-[#e9c176] transition-colors duration-200 font-sans text-sm tracking-widest uppercase" href="#">Sustainability</a>
          <a className="text-[#1B3022]/70 hover:text-[#e9c176] transition-colors duration-200 font-sans text-sm tracking-widest uppercase" href="#">Terms</a>
        </div>
        <div className="flex flex-col gap-4">
          <img 
            alt="Logo" 
            className="h-10 w-auto object-contain self-start" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfWy0NVSyikk34bwK9fEzpiocoftAOSikbpT3jOb92AKk9YVOnTidf1CK7WPURPr7RSQS3y__My805fpd9Q5WkVq9qbTM2RLgX6gjhn6HRh5y0OZclBdjE8nq3LTWSFHdeYueEF85YLYZqj5SA3ztQKMK7YNtBoKHO3V2QFgkZnxZu5Vt4w1ySZO2Ib_NcTygpl1QdB1DgdT0EFxp8MMmp4H_sArsnzFJ5f5omWhgGtXZRCfhfjMiTRpnDOZ6N23ZqAyNet8PBhn99" 
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
