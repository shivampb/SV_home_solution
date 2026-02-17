import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import ImageUploader from '../../components/admin/ImageUploader';
import { useNavigate } from 'react-router-dom';

interface HeroSettings {
    image: string;
    title: string;
    subtitle: string;
}

const defaultHeroSettings: HeroSettings = {
    image: '/images/hero-bg.png',
    title: 'Elevating Spaces',
    subtitle: 'Crafting Legacies.'
};

const AdminSiteSettings: React.FC = () => {
    const navigate = useNavigate();
    const [heroSettings, setHeroSettings] = useState<HeroSettings>(defaultHeroSettings);
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
            const { data, error } = await supabase
                .from('site_settings')
                .select('value')
                .eq('key', 'hero')
                .single();

            if (error) {
                if (error.code === 'PGRST116') {
                    // Row not found, stick with defaults
                    console.log('Hero settings not found, using defaults');
                } else {
                    console.error('Error fetching settings:', error);
                    setError(error.message);
                }
            } else if (data && data.value) {
                // Handle both stringified JSON (if returned as text) or object (if returned as jsonb)
                const parsed = typeof data.value === 'string' ? JSON.parse(data.value) : data.value;
                setHeroSettings({ ...defaultHeroSettings, ...parsed });
            }
        } catch (err: any) {
            console.error('Unexpected error:', err);
            // Don't show error to user if it's just a parsing issue or missing data, stick to defaults
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        setError(null);
        try {
            const { error: upsertError } = await supabase
                .from('site_settings')
                .upsert({
                    key: 'hero',
                    value: heroSettings,
                    updated_at: new Date().toISOString()
                }, { onConflict: 'key' });

            if (upsertError) throw upsertError;

            alert('Settings saved successfully!');
        } catch (err: any) {
            console.error('Error saving settings:', err);
            setError('Failed to save settings: ' + err.message);
        } finally {
            setSaving(false);
        }
    };

    const updateField = (field: keyof HeroSettings, value: string) => {
        setHeroSettings(prev => ({ ...prev, [field]: value }));
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
                                    onUpload={(url) => updateField('image', url)}
                                    label="Upload New Hero Background"
                                />
                                <input
                                    type="text"
                                    value={heroSettings.image}
                                    onChange={(e) => updateField('image', e.target.value)}
                                    className="mt-2 w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary outline-none text-sm"
                                    placeholder="Image URL"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Title</label>
                                <input
                                    type="text"
                                    value={heroSettings.title}
                                    onChange={(e) => updateField('title', e.target.value)}
                                    className="w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Subtitle</label>
                                <input
                                    type="text"
                                    value={heroSettings.subtitle}
                                    onChange={(e) => updateField('subtitle', e.target.value)}
                                    className="w-full bg-background-dark border border-slate-700 rounded p-3 text-white focus:border-primary outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-slate-800 flex justify-end">
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
    );
};

export default AdminSiteSettings;
