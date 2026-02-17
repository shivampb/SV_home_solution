import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjects } from '../../context/ProjectContext';

const NextProject: React.FC<{ currentId: string }> = ({ currentId }) => {
    const navigate = useNavigate();
    const { projects } = useProjects();
    const currentIndex = projects.findIndex(p => p.id === currentId);
    
    if (currentIndex === -1) return null;
    const nextProject = projects[(currentIndex + 1) % projects.length];

    if (!nextProject) return null;

    return (
      <section className="py-24 bg-surface-dark border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div 
                    onClick={() => {
                        navigate(`/project/${nextProject.id}`);
                        window.scrollTo(0, 0);
                    }}
                    className="group relative overflow-hidden rounded-sm h-[400px] cursor-pointer"
                >
                     <img 
                        src={nextProject.heroImage} 
                        alt="Next Project" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100" 
                     />
                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                     <div className="absolute bottom-8 left-8">
                        <span className="text-xs uppercase tracking-widest text-slate-300 mb-2 block">Next Project</span>
                        <h4 className="text-3xl font-light text-white group-hover:text-primary transition-colors flex items-center gap-2">
                            {nextProject.title} 
                            <span className="material-icons text-2xl">arrow_forward</span>
                        </h4>
                     </div>
                </div>
                
                <div className="flex flex-col justify-center md:pl-12">
                    <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Work With Us</span>
                    <h2 className="text-4xl md:text-5xl font-thin text-white mb-6 leading-tight">
                        Ready to transform <br /> your space?
                    </h2>
                    <p className="text-slate-400 mb-10 text-lg font-light max-w-md">
                        Let's discuss how we can bring your vision to life with our bespoke architectural services.
                    </p>
                    <div>
                        <a 
                            href="mailto:hello@svhomesolution.com"
                            className="inline-flex bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full transition-all hover:shadow-[0_0_20px_rgba(25,93,230,0.4)] text-sm tracking-widest uppercase font-semibold items-center gap-2 group"
                        >
                            Book Consultation
                            <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">calendar_today</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
};

export default NextProject;