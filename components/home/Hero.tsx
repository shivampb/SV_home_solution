import React from 'react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1eVlrhAHiu7twen_DkwtD7Gh2ZZLYsP-Hm6Dn47GWopLPyNhodbLc6QXm1DdFC6QABsulDt4UAg3fYWqcpdpPdsEX8VzWyXJQ-d8N8dPExMOFAxyFX0rybyzXGmg-8EPNgFgIofJOUdgZ-PCTqu59ka126oUNrEckz8Tm8ZvYqK4EGzizwOZoQAi6GXkKWSiRtrXbzvEPbv9vbMLYio9zW-oMWhbVUEDQXFH-p3q1ckYTo_mXaNVJVLlsxFoCpBIiZwyn8fCRNhI"
          alt="Modern luxury living room"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/40 via-background-dark/20 to-background-dark/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6 animate-fade-in-up">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
          Elevating Spaces,<br />
          <i className="font-light text-slate-300">Crafting Legacies.</i>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Award-winning interior architecture for the modern connoisseur. We merge light, texture, and form to create sanctuaries of silence and beauty.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#projects"
            onClick={handleScroll}
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded hover:bg-primary-dark transition-all duration-300 text-sm font-medium tracking-widest uppercase shadow-lg shadow-primary/25"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 cursor-pointer" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}>
        <span className="material-icons text-3xl">keyboard_arrow_down</span>
      </div>
    </header>
  );
};

export default Hero;