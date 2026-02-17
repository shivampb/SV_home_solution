import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../../context/ProjectContext';
import { Project } from '../../types';

const ProjectCard: React.FC<{ project: Project; className?: string }> = ({ project, className = "" }) => (
  <Link to={`/project/${project.id}`} className={`group block relative mb-8 break-inside-avoid ${className} animate-fade-in-up`}>
    <div className="relative overflow-hidden rounded-sm bg-surface-dark">
      <img
        src={project.heroImage}
        alt={project.title}
        className="w-full h-auto object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-sm tracking-widest uppercase border border-white/30 px-6 py-3 backdrop-blur-sm hover:bg-white hover:text-black transition-all">
            View Project
        </span>
      </div>
    </div>
    <div className="mt-4 flex justify-between items-baseline border-b border-slate-800 pb-2 group-hover:border-primary/50 transition-colors">
      <h3 className="text-lg font-medium text-white group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <span className="text-xs text-slate-500 uppercase tracking-wider">
        {project.category}
      </span>
    </div>
    <p className="text-sm text-slate-500 mt-1 font-light">{project.location}</p>
  </Link>
);

const ProjectsGrid: React.FC = () => {
  const { projects } = useProjects();
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ['All', 'Residential', 'Commercial', 'Renovation'];

  const filteredProjects = useMemo(() => {
    return filter === 'All' 
      ? projects 
      : projects.filter(p => p.category === filter);
  }, [filter, projects]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setVisibleCount(6); // Reset visible count on filter change
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section id="projects" className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
              Selected Works
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              Curated Spaces
            </h2>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide text-slate-500">
             {categories.map(cat => (
                 <button 
                    key={cat}
                    onClick={() => handleFilterChange(cat)}
                    className={`transition-colors ${filter === cat ? 'text-white underline decoration-primary decoration-2 underline-offset-8' : 'hover:text-white'}`}
                 >
                    {cat}
                 </button>
             ))}
          </div>
        </div>

        {/* Masonry Layout using Tailwind columns */}
        {visibleProjects.length > 0 ? (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {visibleProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        ) : (
            <div className="text-center py-20 text-slate-500">
                <p>No projects found in this category.</p>
            </div>
        )}
        
        {visibleCount < filteredProjects.length && (
            <div className="mt-16 text-center">
                <button 
                    onClick={handleLoadMore}
                    className="px-8 py-3 border border-slate-700 text-slate-400 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300 text-xs font-bold tracking-widest uppercase rounded"
                >
                    Load More Projects
                </button>
            </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;