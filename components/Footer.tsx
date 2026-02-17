import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark border-t border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-serif text-white mb-6 block">
              SV Home Solution<span className="text-primary">.</span>
            </Link>
            <p className="text-slate-400 font-light max-w-sm leading-relaxed">
              Creating environments that inspire and endure. We specialize in high-end residential and commercial interior architecture across the globe.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-light">
              <li className="flex items-center gap-2">
                <span className="material-icons text-sm">email</span>
                hello@svhomesolution.com
              </li>
              <li className="flex items-center gap-2">
                <a href="https://www.instagram.com/s.v._home_solution_?igsh=bnExZjdjdDFuZzRu" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="material-icons text-sm">photo_camera</span>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-light">
          <p>&copy; 2024 SV Home Solution. All rights reserved.</p>
          <div className="mt-4 md:mt-0 opacity-50 hover:opacity-100 transition-opacity">
            <Link to="/admin" className="hover:text-white">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;