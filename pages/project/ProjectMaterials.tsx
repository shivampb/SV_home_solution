import React from 'react';
import { Project } from '../../types';

interface ProjectMaterialsProps {
    project: Project;
}

const ProjectMaterials: React.FC<ProjectMaterialsProps> = ({ project }) => {

    if (!project.materials || project.materials.length === 0) {
        return (
            <div className="py-20 text-center text-slate-500">
                <p>No material details available for this project.</p>
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-12">
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400">Material Palette</h3>
                <div className="h-px flex-1 bg-slate-800 ml-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.materials.map((mat, idx) => (
                    <div key={idx} className="group bg-surface-dark p-6 rounded-sm border border-slate-800 hover:border-primary/50 transition-all duration-300">
                        <div className="h-64 w-full rounded-sm mb-6 overflow-hidden relative">
                            <img
                                src={mat.image}
                                alt={mat.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <h4 className="text-lg font-medium text-white mb-1">{mat.name}</h4>
                        <p className="text-sm text-slate-500">{mat.usage}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectMaterials;