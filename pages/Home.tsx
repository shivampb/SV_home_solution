import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import Philosophy from '../components/home/Philosophy';
import ProjectsGrid from '../components/home/ProjectsGrid';

const Home: React.FC = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Add a small delay to ensure DOM is ready
            setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

  return (
    <div className="bg-background-dark min-h-screen">
      <Hero />
      <Philosophy />
      <ProjectsGrid />
      
      {/* Expertise Section */}
      <section className="py-24 bg-surface-dark relative border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                {[
                    { icon: 'architecture', title: 'Spatial Planning', desc: 'Optimizing flow and functionality without compromising aesthetic integrity. We shape the void.' },
                    { icon: 'style', title: 'Material Curation', desc: 'Sourcing rare stones, sustainable woods, and artisanal textiles that age gracefully over time.' },
                    { icon: 'light_mode', title: 'Lighting Design', desc: 'Sculpting with light to enhance mood and texture, creating dynamic atmospheres for day and night.' }
                ].map((item, idx) => (
                    <div key={idx} className="group">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:bg-primary transition-colors duration-300">
                             <span className="material-icons text-slate-300 group-hover:text-white">{item.icon}</span>
                        </div>
                        <h3 className="text-lg font-medium text-white mb-3">{item.title}</h3>
                        <p className="text-slate-400 font-light text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;