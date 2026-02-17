import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProjects } from '../../context/ProjectContext';
import ProjectHero from '../../components/project/ProjectHero';
import NextProject from '../../components/project/NextProject';
import ProjectConcept from './ProjectConcept';
import ProjectMaterials from './ProjectMaterials';
import ProjectGalleryPage from './ProjectGalleryPage';

const ProjectLayout: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { projects } = useProjects();
    const project = projects.find((p) => p.id === id);
    const [activeSection, setActiveSection] = useState('concept');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['concept', 'materials', 'gallery'];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Offset for sticky header/nav if needed, though scrollIntoView usually puts it at top
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    if (!project) {
        return (
            <div className="min-h-screen bg-background-dark flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-3xl mb-4">Project Not Found</h2>
                    <button onClick={() => navigate('/')} className="text-primary hover:underline">Return Home</button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background-dark min-h-screen">
            <ProjectHero project={project} />

            {/* Meta Data Grid - Always Visible */}
            <section className="border-b border-slate-800 bg-background-dark relative z-20">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800 border-x border-slate-800">
                    {project.details?.map((detail, idx) => (
                        <div key={idx} className="p-8 md:p-10 text-center">
                            <span className="block text-xs uppercase tracking-widest text-slate-500 mb-2">{detail.label}</span>
                            <span className="block text-lg md:text-xl font-light text-white">{detail.value}</span>
                        </div>
                    )) || (
                            <>
                                <div className="p-8 md:p-10 text-center">
                                    <span className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Completion</span>
                                    <span className="block text-xl font-light text-white">{project.completionYear}</span>
                                </div>
                                <div className="p-8 md:p-10 text-center">
                                    <span className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Area</span>
                                    <span className="block text-xl font-light text-white">{project.area}</span>
                                </div>
                            </>
                        )}
                </div>
            </section>

            <section className="py-24 bg-background-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Sidebar Nav (Desktop) */}
                        <div className="lg:col-span-3 hidden lg:block">
                            <div className="sticky top-32 space-y-8">
                                <div className="h-px w-12 bg-primary"></div>
                                <nav className="flex flex-col space-y-4 text-sm tracking-wide">
                                    <button
                                        onClick={() => scrollToSection('concept')}
                                        className={`text-left transition-colors ${activeSection === 'concept' ? "text-primary font-medium" : "text-slate-500 hover:text-primary"}`}
                                    >
                                        01. Concept
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('materials')}
                                        className={`text-left transition-colors ${activeSection === 'materials' ? "text-primary font-medium" : "text-slate-500 hover:text-primary"}`}
                                    >
                                        02. Materials
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('gallery')}
                                        className={`text-left transition-colors ${activeSection === 'gallery' ? "text-primary font-medium" : "text-slate-500 hover:text-primary"}`}
                                    >
                                        03. Gallery
                                    </button>
                                </nav>
                            </div>
                        </div>

                        {/* Mobile Nav */}
                        <div className="lg:hidden mb-8 border-b border-slate-800 pb-4 flex space-x-6 text-sm tracking-widest uppercase overflow-x-auto">
                            <button
                                onClick={() => scrollToSection('concept')}
                                className={`${activeSection === 'concept' ? "text-primary border-b-2 border-primary pb-1" : "text-slate-500 pb-1"}`}
                            >
                                Concept
                            </button>
                            <button
                                onClick={() => scrollToSection('materials')}
                                className={`${activeSection === 'materials' ? "text-primary border-b-2 border-primary pb-1" : "text-slate-500 pb-1"}`}
                            >
                                Materials
                            </button>
                            <button
                                onClick={() => scrollToSection('gallery')}
                                className={`${activeSection === 'gallery' ? "text-primary border-b-2 border-primary pb-1" : "text-slate-500 pb-1"}`}
                            >
                                Gallery
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-9 space-y-24">
                            <div id="concept" className="animate-fade-in-up">
                                <ProjectConcept project={project} />
                            </div>
                            <div id="materials" className="animate-fade-in-up">
                                <ProjectMaterials project={project} />
                            </div>
                            <div id="gallery" className="animate-fade-in-up">
                                <ProjectGalleryPage project={project} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <NextProject currentId={project.id} />
        </div>
    );
};

export default ProjectLayout;