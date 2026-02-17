import React from 'react';
import { Project } from '../../types';

interface ProjectGalleryPageProps {
    project: Project;
}

const ProjectGalleryPage: React.FC<ProjectGalleryPageProps> = ({ project }) => {

    if (!project.images || project.images.length === 0) {
        return (
            <div className="py-20 text-center text-slate-500">
                <p>Gallery coming soon.</p>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-12">
                <h3 className="text-2xl font-light text-white mb-2">Visual Narrative</h3>
                <p className="text-slate-500 font-light text-sm">Explore the intricate details.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((img, idx) => (
                    <div
                        key={idx}
                        className="relative group rounded-sm overflow-hidden h-[400px]"
                    >
                        <img
                            src={img}
                            alt={`Gallery ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                            View {idx + 1}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectGalleryPage;