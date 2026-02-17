import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';

interface ImageUploaderProps {
    onUpload: (url: string) => void;
    currentImage?: string;
    label?: string;
    className?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onUpload, currentImage, label = "Upload Image", className = "" }) => {
    const [uploading, setUploading] = useState(false);

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUploading(true);

            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.');
            }

            const file = event.target.files[0];
            const fileExt = file.name.split('.').pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('projects')
                .upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            const { data } = supabase.storage
                .from('projects')
                .getPublicUrl(filePath);

            if (data) {
                onUpload(data.publicUrl);
            }

        } catch (error: any) {
            alert('Error uploading image: ' + error.message);
            console.error(error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            {currentImage && (
                <div className="w-full h-40 bg-slate-800 rounded-sm overflow-hidden relative group border border-slate-700">
                    <img
                        src={currentImage}
                        alt="Preview"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            <div className="relative">
                <label className={`
            bg-slate-800 border border-slate-700 hover:border-primary hover:text-primary 
            text-slate-400 text-xs uppercase tracking-widest font-bold 
            px-4 py-3 rounded cursor-pointer inline-flex items-center gap-2 transition-all w-full justify-center
            ${uploading ? 'opacity-50 cursor-not-allowed' : ''}
          `}>
                    <span className="material-icons text-lg">cloud_upload</span>
                    {uploading ? 'Uploading...' : label}
                    <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleUpload}
                        disabled={uploading}
                    />
                </label>
            </div>
        </div>
    );
};

export default ImageUploader;
