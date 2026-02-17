import React from 'react';
import { Project } from '../../types';

interface ProjectConceptProps {
    project: Project;
}

const ProjectConcept: React.FC<ProjectConceptProps> = ({ project }) => {
    return (
        <div>
            {project.conceptSubtitle ? (
                <h2 className="text-3xl md:text-5xl font-light mb-12 text-white leading-tight">
                    {project.conceptSubtitle}
                </h2>
            ) : (
                <h2 className="text-3xl md:text-5xl font-light mb-12 text-white leading-tight">
                    A dialogue between <span className="italic font-normal text-slate-500">light</span> and shadow.
                </h2>
            )}

            <div className="prose prose-lg prose-invert max-w-none font-light text-slate-300">
                {project.description.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-8 leading-relaxed">
                        {i === 0 && <span className="text-5xl float-left mr-3 mt-[-6px] font-thin text-primary">{para.charAt(0)}</span>}
                        {i === 0 ? para.slice(1) : para}
                    </p>
                ))}

                {project.conceptQuote && (
                    <blockquote className="border-l-2 border-primary pl-6 py-2 my-12 italic text-2xl font-thin text-white">
                        "{project.conceptQuote}"
                    </blockquote>
                )}

                {project.conceptContent && (
                    <div className="mb-8 leading-relaxed">
                        {project.conceptContent.split('\n\n').map((para, i) => (
                            <p key={i} className="mb-8">{para}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectConcept;