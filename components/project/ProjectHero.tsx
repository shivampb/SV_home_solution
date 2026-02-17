import React from 'react';
import { Project } from '../../types';

const ProjectHero: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <header className="relative w-full h-[80vh] min-h-[600px] flex items-end pb-12 md:pb-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full animate-fade-in-up">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 mb-6 rounded border border-primary/30 bg-primary/10 text-primary text-xs tracking-widest uppercase font-semibold">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight leading-tight text-white mb-4">
              {project.title}
            </h1>
            <div className="flex items-center space-x-2 text-slate-300">
              <span className="material-icons text-primary text-sm">location_on</span>
              <span className="text-sm tracking-widest uppercase">{project.location}</span>
            </div>
          </div>
          <div className="hidden md:block">
            <a href="#narrative" className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                <span className="text-xs uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">Explore Project</span>
                <span className="material-icons animate-bounce">arrow_downward</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProjectHero;
