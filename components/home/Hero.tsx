import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

const Hero: React.FC = () => {
  const [heroBg, setHeroBg] = useState('/images/hero-bg.png');
  const [heroTitle, setHeroTitle] = useState('Elevating Spaces,');
  const [heroSubtitle, setHeroSubtitle] = useState('Crafting Legacies.');

  useEffect(() => {
    const fetchHeroBg = async () => {
      try {
        const { data } = await supabase
          .from('site_settings')
          .select('value')
          .eq('key', 'hero')
          .single();

        if (data && data.value) {
          const parsed = typeof data.value === 'string' ? JSON.parse(data.value) : data.value;
          if (parsed.image) setHeroBg(parsed.image);
          if (parsed.title) setHeroTitle(parsed.title);
          if (parsed.subtitle) setHeroSubtitle(parsed.subtitle);
        }
      } catch (error) {
        console.warn('Failed to fetch hero background settings:', error);
      }
    };

    fetchHeroBg();
  }, []);

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
          src={heroBg}
          alt="Modern luxury living room"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/40 via-background-dark/20 to-background-dark/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6 animate-fade-in-up">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
          {heroTitle}<br />
          <i className="font-light text-slate-300">{heroSubtitle}</i>
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
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 cursor-pointer" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="material-icons text-3xl">keyboard_arrow_down</span>
      </div>
    </header>
  );
};

export default Hero;