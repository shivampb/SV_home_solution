import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project } from '../types';
import { supabase } from '../lib/supabase';
import { projects as initialProjects } from '../data';

interface ProjectContextType {
  projects: Project[];
  loading: boolean;
  addProject: (project: Project) => Promise<void>;
  updateProject: (project: Project) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from('projects').select('*');
      if (error) {
        console.error('Error fetching projects form Supabase:', error.message);
        // Fallback to local data only if Supabase fails (optional, good for demo purposes)
        // If you want strict DB usage, remove the next line.
        setProjects(initialProjects);
      } else {
        setProjects(data || []);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setProjects(initialProjects);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const addProject = async (project: Project) => {
    const { error } = await supabase.from('projects').insert([project]);
    if (error) {
      console.error('Error adding project:', error.message);
      throw error;
    }
    await fetchProjects();
  };

  const updateProject = async (project: Project) => {
    const { error } = await supabase
      .from('projects')
      .update(project)
      .eq('id', project.id);
    
    if (error) {
      console.error('Error updating project:', error.message);
      throw error;
    }
    await fetchProjects();
  };

  const deleteProject = async (id: string) => {
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) {
      console.error('Error deleting project:', error.message);
      throw error;
    }
    await fetchProjects();
  };

  return (
    <ProjectContext.Provider value={{ projects, loading, addProject, updateProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};