import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import ImageUploader from '../../components/admin/ImageUploader';
import { useNavigate } from 'react-router-dom';

interface HeroSettings {
    image: string;
    title: string;
    subtitle: string;
}

interface FooterLink {
    label: string;
    url: string;
    icon?: string;
}

interface FooterSettings {
    description: string;
    email: string;
    instagramUrl: string;
    copyrightText: string;
    extraLinks: FooterLink[];
}

const defaultHeroSettings: HeroSettings = {
    image: '/images/hero-bg.png',
    title: 'Elevating Spaces',
    subtitle: 'Crafting Legacies.'
};

const defaultFooterSettings: FooterSettings = {
    description: 'Creating environments that inspire and endure. We specialize in high-end residential and commercial interior architecture across the globe.',
    email: 'hello@svhomesolution.com',
    instagramUrl: 'https://www.instagram.com/s.v._home_solution_?igsh=bnExZjdjdDFuZzRu',
    copyrightText: '© 2024 SV Home Solution. All rights reserved.',
    extraLinks: []
};

const AdminSiteSettings: React.FC = () => {
    const navigate = useNavigate();
    const [heroSettings, setHeroSettings] = useState<HeroSettings>(defaultHeroSettings);
    const [footerSettings, setFooterSettings] = useState<FooterSettings>(defaultFooterSettings);

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        setLoading(true);
        setError(null);
        try {
            // Fetch Hero Settings
            const { data: heroData, error: heroError } = await supabase
                .from('site_settings')
                .select('value')
                .eq('key', 'hero')
                .single();

            if (!heroError && heroData && heroData.value) {
                const parsed = typeof heroData.value === 'string' ? JSON.parse(heroData.value) : heroData.value;
                setHeroSettings({ ...defaultHeroSettings, ...parsed });
            }

            // Fetch Footer Settings
            const { data: footerData, error: footerError } = await supabase
                .from('site_settings')
                .select('value')
                .eq('key', 'footer')
                .single();

            if (!footerError && footerData && footerData.value) {
                const parsed = typeof footerData.value === 'string' ? JSON.parse(footerData.value) : footerData.value;
                setFooterSettings({ ...defaultFooterSettings, ...parsed });
            }

        } catch (err: any) {
            console.error('Unexpected error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        setError(null);
        try {
            // Save Hero
            const { error: heroError } = await supabase
                .from('site_settings')
                .upsert({
                    key: 'hero',
                    value: heroSettings,
                    updated_at: new Date().toISOString()
                }, { onConflict: 'key' });

            if (heroError) throw heroError;

            // Save Footer
            const { error: footerError } = await supabase
                .from('site_settings')
                .upsert({
                    key: 'footer',
                    value: footerSettings,
                    updated_at: new Date().toISOString()
                }, { onConflict: 'key' });

            if (footerError) throw footerError;

            alert('Settings saved successfully!');
        } catch (err: any) {
            console.error('Error saving settings:', err);
            setError('Failed to save settings: ' + err.message);
        } finally {
            setSaving(false);
        }
    };

    const updateHeroField = (field: keyof HeroSettings, value: string) => {
        setHeroSettings(prev => ({ ...prev, [field]: value }));
    };

    const updateFooterField = (field: keyof FooterSettings, value: any) => {
        setFooterSettings(prev => ({ ...prev, [field]: value }));
    };

    const addFooterLink = () => {
        setFooterSettings(prev => ({
            ...prev,
            extraLinks: [...prev.extraLinks, { label: '', url: '', icon: '' }]
        }));
    };

    const updateFooterLink = (index: number, field: keyof FooterLink, value: string) => {
        const newLinks = [...footerSettings.extraLinks];
        newLinks[index] = { ...newLinks[index], [field]: value };
        setFooterSettings(prev => ({ ...prev, extraLinks: newLinks }));
    };

    const removeFooterLink = (index: number) => {
        setFooterSettings(prev => ({
            ...prev,
            extraLinks: prev.extraLinks.filter((_, i) => i !== index)
        }));
    };

    return (
        <div className="min-h-screen bg-background-dark pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-serif text-white">Site Settings</h1>
                    <button
                        onClick={() => navigate('/admin')}
                        className="text-slate-400 hover:text-white px-4 py-2"
                    >
                        Back to Dashboard
                    </button>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded mb-6">
                        <h3 className="font-bold mb-2">Error</h3>
                        <p className="text-sm">{error}</p>
                    </div>
                )}

                <div className="space-y-8">
                    {/* Hero Section */}
                    <div className="bg-surface-dark p-8 rounded-sm border border-slate-800">
                        <h3 className="text-white text-lg mb-6 border-b border-slate-800 pb-4">Hero Section</h3>

                        <div className="mb-8 font-serif">
                            {/* Preview */}
                            <div className="relative h-64 w-full rounded overflow-hidden mb-6 border border-slate-700">
                                <img src={heroSettings.image} className="w-full h-full object-cover opacity-80" alt="Preview" />
                                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
                                    <h1 className="text-2xl md:text-4xl text-white mb-2 leading-tight">
                                        {heroSettings.title}
                                    </h1>
                                    <i className="font-light text-slate-300 text-lg">{heroSettings.subtitle}</i>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-xs uppercase tracking-widest text-slate-500 mb-4">Hero Background Image</label>
                                    <ImageUploader
                                        currentImage={heroSettings.image}
                                        onUpload={(url) => updateHeroField('image', url)}
                                        label="Upload New Hero Background"
                                    />
                                    <input
                                        type="text"
                                        value={heroSettings.image}
                                        onChange={(e) => updateHeroField('image', e.target.value)}
                                        className="mt-2 w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary outline-none text-sm"
                                        placeholder="Image URL"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Title</label>
                                    <input
                                        type="text"
                                        value={heroSettings.title}
                                        onChange={(e) => updateHeroField('title', e.target.value)}
                                        className="w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Subtitle</label>
                                    <input
                                        type="text"
                                        value={heroSettings.subtitle}
                                        onChange={(e) => updateHeroField('subtitle', e.target.value)}
                                        className="w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Section */}
                    <div className="bg-surface-dark p-8 rounded-sm border border-slate-800">
                        <h3 className="text-white text-lg mb-6 border-b border-slate-800 pb-4">Footer Section</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Agency Description</label>
                                <textarea
                                    rows={3}
                                    value={footerSettings.description}
                                    onChange={(e) => updateFooterField('description', e.target.value)}
                                    className="w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                                <input
                                    type="text"
                                    value={footerSettings.email}
                                    onChange={(e) => updateFooterField('email', e.target.value)}
                                    className="w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Instagram URL</label>
                                <input
                                    type="text"
                                    value={footerSettings.instagramUrl}
                                    onChange={(e) => updateFooterField('instagramUrl', e.target.value)}
                                    className="w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary outline-none"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Copyright Text</label>
                                <input
                                    type="text"
                                    value={footerSettings.copyrightText}
                                    onChange={(e) => updateFooterField('copyrightText', e.target.value)}
                                    className="w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary outline-none"
                                />
                            </div>

                            <div className="md:col-span-2 pt-4 border-t border-slate-800">
                                <div className="flex justify-between items-center mb-4">
                                    <label className="block text-xs uppercase tracking-widest text-slate-500">Extra Links</label>
                                    <button type="button" onClick={addFooterLink} className="text-xs text-primary hover:text-white uppercase font-bold">
                                        + Add Link
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {footerSettings.extraLinks.map((link, idx) => (
                                        <div key={idx} className="flex gap-4 items-start bg-background-dark/30 p-4 border border-slate-800 rounded relative">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                                                <div>
                                                    <label className="block text-[10px] text-slate-500 mb-1">Label</label>
                                                    <input
                                                        type="text"
                                                        value={link.label}
                                                        onChange={(e) => updateFooterLink(idx, 'label', e.target.value)}
                                                        className="w-full bg-background-dark border border-slate-700 rounded p-2 text-white text-xs focus:border-primary outline-none"
                                                        placeholder="e.g. LinkedIn"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] text-slate-500 mb-1">URL</label>
                                                    <input
                                                        type="text"
                                                        value={link.url}
                                                        onChange={(e) => updateFooterLink(idx, 'url', e.target.value)}
                                                        className="w-full bg-background-dark border border-slate-700 rounded p-2 text-white text-xs focus:border-primary outline-none"
                                                        placeholder="https://..."
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] text-slate-500 mb-1">Icon Name (Material Icons)</label>
                                                    <input
                                                        type="text"
                                                        value={link.icon || ''}
                                                        onChange={(e) => updateFooterLink(idx, 'icon', e.target.value)}
                                                        className="w-full bg-background-dark border border-slate-700 rounded p-2 text-white text-xs focus:border-primary outline-none"
                                                        placeholder="e.g. language"
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeFooterLink(idx)}
                                                className="text-slate-500 hover:text-red-500 pt-6"
                                            >
                                                <span className="material-icons text-lg">delete</span>
                                            </button>
                                        </div>
                                    ))}
                                    {footerSettings.extraLinks.length === 0 && <p className="text-sm text-slate-600 italic">No extra links added.</p>}
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-800 flex justify-end mt-6">
                            <button
                                onClick={handleSave}
                                disabled={saving || loading}
                                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded uppercase tracking-widest text-xs font-bold transition-colors shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {saving ? 'Saving...' : 'Save Settings'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSiteSettings;
