import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProjects } from '../../context/ProjectContext';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard: React.FC = () => {
  const { projects, deleteProject, loading: projectsLoading } = useProjects();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      try {
        await deleteProject(id);
      } catch (error) {
        alert('Failed to delete project.');
      }
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  if (projectsLoading) {
      return (
          <div className="min-h-screen bg-background-dark flex items-center justify-center">
              <span className="text-slate-500 animate-pulse">Loading projects...</span>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-background-dark pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif text-white mb-2">Project Dashboard</h1>
            <p className="text-slate-400">Manage your portfolio content.</p>
          </div>
          <div className="flex gap-4">
             <button
                onClick={handleSignOut}
                className="px-6 py-3 border border-slate-700 text-slate-400 hover:text-white hover:border-white transition-colors text-sm uppercase tracking-widest font-bold"
             >
                Sign Out
             </button>
             <Link 
                to="/admin/new" 
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded transition-colors text-sm uppercase tracking-widest font-bold flex items-center gap-2"
              >
                <span className="material-icons text-sm">add</span>
                New Project
              </Link>
          </div>
        </div>

        <div className="bg-surface-dark rounded-sm border border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-black/20 text-xs uppercase tracking-widest text-slate-500">
                  <th className="p-6 font-medium">Project</th>
                  <th className="p-6 font-medium">Category</th>
                  <th className="p-6 font-medium">Location</th>
                  <th className="p-6 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-sm">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-white/5 transition-colors group">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <img src={project.heroImage} alt="" className="w-12 h-12 object-cover rounded-sm bg-slate-800" />
                        <div>
                          <h4 className="text-white font-medium text-base">{project.title}</h4>
                          <span className="text-slate-500 text-xs">{project.id}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-slate-300">{project.category}</td>
                    <td className="p-6 text-slate-300">{project.location}</td>
                    <td className="p-6">
                      <div className="flex items-center justify-end gap-3">
                        <Link 
                          to={`/project/${project.id}`} 
                          target="_blank"
                          className="p-2 text-slate-500 hover:text-white transition-colors"
                          title="View Live"
                        >
                          <span className="material-icons text-lg">visibility</span>
                        </Link>
                        <Link 
                          to={`/admin/edit/${project.id}`} 
                          className="p-2 text-slate-500 hover:text-primary transition-colors"
                          title="Edit"
                        >
                          <span className="material-icons text-lg">edit</span>
                        </Link>
                        <button 
                          onClick={() => handleDelete(project.id)}
                          className="p-2 text-slate-500 hover:text-red-500 transition-colors"
                          title="Delete"
                        >
                          <span className="material-icons text-lg">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {projects.length === 0 && (
                   <tr>
                     <td colSpan={4} className="p-12 text-center text-slate-500">
                       No projects found. Create your first one!
                     </td>
                   </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;