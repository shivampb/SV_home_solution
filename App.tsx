import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ProjectLayout from './pages/project/ProjectLayout';
import ProjectConcept from './pages/project/ProjectConcept';
import ProjectMaterials from './pages/project/ProjectMaterials';
import ProjectGalleryPage from './pages/project/ProjectGalleryPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProjectEditor from './pages/admin/AdminProjectEditor';
import AdminSiteSettings from './pages/admin/AdminSiteSettings';
import Login from './pages/admin/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { ProjectProvider } from './context/ProjectContext';
import { AuthProvider } from './context/AuthContext';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ProjectProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project/:id" element={<ProjectLayout />} />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<Login />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/admin/new" element={<AdminProjectEditor />} />
                  <Route path="/admin/edit/:id" element={<AdminProjectEditor />} />
                  <Route path="/admin/settings" element={<AdminSiteSettings />} />
                </Route>

              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ProjectProvider>
    </AuthProvider>
  );
};

export default App;