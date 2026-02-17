import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHome) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#projects');
    }
  };

  // On project detail pages, always show background or if scrolled on home
  const showBackground = scrolled || !isHome;

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        showBackground
          ? 'bg-background-dark/90 backdrop-blur-md border-b border-slate-800'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="text-xl font-light tracking-widest uppercase text-white group">
          SV Home <span className="font-bold text-primary group-hover:text-white transition-colors">Solution</span>
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          <a
            href="#projects"
            onClick={handleProjectsClick}
            className="text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Projects
          </a>
        </div>

        <button className="md:hidden text-white">
          <span className="material-icons">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;