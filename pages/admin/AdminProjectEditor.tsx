import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProjects } from '../../context/ProjectContext';
import { Project } from '../../types';
import ImageUploader from '../../components/admin/ImageUploader';

const emptyProject: Project = {
    id: '',
    title: '',
    location: '',
    category: 'Residential',
    completionYear: new Date().getFullYear().toString(),
    area: '',
    description: '',
    conceptSubtitle: '',
    conceptQuote: '',
    conceptContent: '',
    heroImage: '',
    images: [],
    materials: [],
    details: []
};

const AdminProjectEditor: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { projects, addProject, updateProject } = useProjects();

    const [formData, setFormData] = useState<Project>(emptyProject);
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (id) {
            const existing = projects.find(p => p.id === id);
            if (existing) {
                setFormData(JSON.parse(JSON.stringify(existing))); // Deep copy
                setIsEditing(true);
            }
        }
    }, [id, projects]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // --- Dynamic List Handlers ---

    const handleArrayChange = (index: number, value: string, arrayName: 'images') => {
        const newArray = [...formData[arrayName]];
        newArray[index] = value;
        setFormData(prev => ({ ...prev, [arrayName]: newArray }));
    };

    const addArrayItem = (arrayName: 'images') => {
        setFormData(prev => ({ ...prev, [arrayName]: [...prev[arrayName], ''] }));
    };

    const removeArrayItem = (index: number, arrayName: 'images') => {
        setFormData(prev => ({ ...prev, [arrayName]: prev[arrayName].filter((_, i) => i !== index) }));
    };

    // Materials are objects, so they need special handling
    const handleMaterialChange = (index: number, field: string, value: string) => {
        const newMaterials = [...(formData.materials || [])];
        newMaterials[index] = { ...newMaterials[index], [field]: value };
        setFormData(prev => ({ ...prev, materials: newMaterials }));
    };

    const addMaterial = () => {
        setFormData(prev => ({
            ...prev,
            materials: [...(prev.materials || []), { name: '', usage: '', image: '' }]
        }));
    };

    const removeMaterial = (index: number) => {
        setFormData(prev => ({
            ...prev,
            materials: (prev.materials || []).filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        // Auto-generate ID if new and empty
        let submitData = { ...formData };
        if (!isEditing && !submitData.id) {
            submitData.id = submitData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        }

        try {
            if (isEditing) {
                await updateProject(submitData);
            } else {
                // Check for ID collision (locally first)
                if (projects.some(p => p.id === submitData.id)) {
                    alert('A project with this ID already exists. Please choose a unique title or ID.');
                    setIsSaving(false);
                    return;
                }
                await addProject(submitData);
            }
            navigate('/admin');
        } catch (error) {
            console.error(error);
            alert('Failed to save project. Check console for details.');
            setIsSaving(false);
        }
    };

    return (
        <div className="min-h-screen bg-background-dark pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-serif text-white">
                        {isEditing ? `Edit: ${formData.title}` : 'New Project'}
                    </h1>
                    <div className="space-x-4">
                        <button
                            type="button"
                            onClick={() => navigate('/admin')}
                            className="text-slate-400 hover:text-white px-4 py-2"
                            disabled={isSaving}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            form="projectForm"
                            disabled={isSaving}
                            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded uppercase tracking-widest text-xs font-bold transition-colors shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSaving ? 'Saving...' : 'Save Project'}
                        </button>
                    </div>
                </div>

                <form id="projectForm" onSubmit={handleSubmit} className="space-y-12">

                    {/* Basic Info */}
                    <div className="bg-surface-dark p-8 rounded-sm border border-slate-800">
                        <h3 className="text-white text-lg mb-6 border-b border-slate-800 pb-4">Basic Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Project Title</label>
                                <input
                                    required
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                />
                            </div>
                            {!isEditing && (
                                <div className="md:col-span-2">
                                    <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Project ID (Auto-generated if empty)</label>
                                    <input
                                        type="text"
                                        name="id"
                                        value={formData.id}
                                        onChange={handleChange}
                                        placeholder="e.g. obsidian-penthouse"
                                        className="w-full bg-background-dark border border-slate-700 rounded p-3 text-slate-400 focus:border-primary outline-none"
                                    />
                                </div>
                            )}
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Category</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary outline-none"
                                >
                                    <option value="Residential">Residential</option>
                                    <option value="Commercial">Commercial</option>
                                    <option value="Renovation">Renovation</option>
                                    <option value="Hospitality">Hospitality</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Completion Year</label>
                                <input
                                    type="text"
                                    name="completionYear"
                                    value={formData.completionYear}
                                    onChange={handleChange}
                                    className="w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Area</label>
                                <input
                                    type="text"
                                    name="area"
                                    value={formData.area}
                                    onChange={handleChange}
                                    className="w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary outline-none"
                                />
                            </div>

                            {/* Concept Section */}
                            <div className="md:col-span-2 space-y-6 pt-4 border-t border-slate-800">
                                <h4 className="text-white text-sm uppercase tracking-widest font-bold">Concept & Narrative</h4>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Concept Subtitle (Header)</label>
                                    <input
                                        type="text"
                                        name="conceptSubtitle"
                                        value={formData.conceptSubtitle || ''}
                                        onChange={handleChange}
                                        placeholder="e.g. A dialogue between light and shadow"
                                        className="w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Primary Description (First Paragraph)</label>
                                    <textarea
                                        name="description"
                                        rows={6}
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary outline-none"
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Pull Quote</label>
                                    <textarea
                                        name="conceptQuote"
                                        rows={3}
                                        value={formData.conceptQuote || ''}
                                        onChange={handleChange}
                                        placeholder="e.g. The goal wasn't just to design a home..."
                                        className="w-full bg-background-dark border border-slate-700 rounded p-3 text-white italic focus:border-primary outline-none"
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Additional Content (After Quote)</label>
                                    <textarea
                                        name="conceptContent"
                                        rows={6}
                                        value={formData.conceptContent || ''}
                                        onChange={handleChange}
                                        placeholder="e.g. Natural light plays a pivotal role..."
                                        className="w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary outline-none"
                                    ></textarea>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Media */}
                    <div className="bg-surface-dark p-8 rounded-sm border border-slate-800">
                        <h3 className="text-white text-lg mb-6 border-b border-slate-800 pb-4">Media</h3>

                        <div className="mb-8">
                            <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Hero Image</label>
                            <div className="flex flex-col gap-2">
                                <ImageUploader
                                    currentImage={formData.heroImage}
                                    onUpload={(url) => setFormData(prev => ({ ...prev, heroImage: url }))}
                                    label="Upload Hero Image"
                                />
                                <input
                                    type="text"
                                    name="heroImage"
                                    value={formData.heroImage}
                                    onChange={handleChange}
                                    placeholder="Or paste URL here"
                                    className="w-full bg-background-dark border border-slate-700 rounded p-3 text-slate-400 text-xs focus:border-primary outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="block text-xs uppercase tracking-widest text-slate-500">Gallery Images</label>
                                <button type="button" onClick={() => addArrayItem('images')} className="text-xs text-primary hover:text-white uppercase font-bold">
                                    + Add Image Slot
                                </button>
                            </div>

                            {formData.images.map((img, idx) => (
                                <div key={idx} className="flex gap-4 items-start animate-fade-in-up bg-background-dark/30 p-4 border border-slate-800 rounded">
                                    <span className="text-slate-600 text-xs w-6 mt-3">{idx + 1}.</span>
                                    <div className="flex-1 space-y-2">
                                        <ImageUploader
                                            currentImage={img}
                                            onUpload={(url) => handleArrayChange(idx, url, 'images')}
                                            label="Upload Gallery Image"
                                        />
                                        <input
                                            type="text"
                                            value={img}
                                            onChange={(e) => handleArrayChange(idx, e.target.value, 'images')}
                                            className="w-full bg-background-dark border border-slate-700 rounded p-2 text-slate-400 text-xs focus:border-primary outline-none"
                                            placeholder="Or paste URL here"
                                        />
                                    </div>
                                    <button type="button" onClick={() => removeArrayItem(idx, 'images')} className="text-slate-500 hover:text-red-500 mt-2">
                                        <span className="material-icons">close</span>
                                    </button>
                                </div>
                            ))}
                            {formData.images.length === 0 && <p className="text-sm text-slate-600 italic">No gallery images added.</p>}
                        </div>
                    </div>

                    {/* Materials */}
                    <div className="bg-surface-dark p-8 rounded-sm border border-slate-800">
                        <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                            <h3 className="text-white text-lg">Materials</h3>
                            <button type="button" onClick={addMaterial} className="text-xs text-primary hover:text-white uppercase font-bold">
                                + Add Material
                            </button>
                        </div>

                        <div className="space-y-6">
                            {(formData.materials || []).map((mat, idx) => (
                                <div key={idx} className="p-4 bg-background-dark/50 border border-slate-800 rounded relative animate-fade-in-up">
                                    <button
                                        type="button"
                                        onClick={() => removeMaterial(idx)}
                                        className="absolute top-2 right-2 text-slate-600 hover:text-red-500"
                                    >
                                        <span className="material-icons">close</span>
                                    </button>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs text-slate-500 mb-1">Name</label>
                                            <input
                                                type="text"
                                                value={mat.name}
                                                onChange={(e) => handleMaterialChange(idx, 'name', e.target.value)}
                                                className="w-full bg-background-dark border border-slate-700 rounded p-2 text-white text-sm focus:border-primary outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs text-slate-500 mb-1">Usage</label>
                                            <input
                                                type="text"
                                                value={mat.usage}
                                                onChange={(e) => handleMaterialChange(idx, 'usage', e.target.value)}
                                                className="w-full bg-background-dark border border-slate-700 rounded p-2 text-white text-sm focus:border-primary outline-none"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-xs text-slate-500 mb-2">Material Image</label>
                                            <div className="flex flex-col gap-2">
                                                <ImageUploader
                                                    currentImage={mat.image}
                                                    onUpload={(url) => handleMaterialChange(idx, 'image', url)}
                                                    label="Upload Material Texture"
                                                />
                                                <input
                                                    type="text"
                                                    value={mat.image}
                                                    onChange={(e) => handleMaterialChange(idx, 'image', e.target.value)}
                                                    className="w-full bg-background-dark border border-slate-700 rounded p-2 text-slate-400 text-xs focus:border-primary outline-none"
                                                    placeholder="Or paste URL"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {(!formData.materials || formData.materials.length === 0) && <p className="text-sm text-slate-600 italic">No materials added.</p>}
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AdminProjectEditor;