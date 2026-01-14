import { useRef, ChangeEvent } from 'react';
import SvgIcon from './SvgIcon';
import { FileUploadProps } from './types';

export default function FileUpload({ previewUrl, setFile, setPreviewUrl }: FileUploadProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files && files[0]) {
            setFile(files[0]);
            const fileUrl = URL.createObjectURL(files[0]);
            setPreviewUrl(fileUrl);
        }
    };

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="flex justify-center">
            {previewUrl ? (
                <div className="cursor-pointer" onClick={handleImageClick}>
                    <img src={previewUrl} alt="Profile" className="rounded-full h-28 mb-4" />
                </div>
            ) : (
                <div className="cursor-pointer" onClick={handleImageClick}>
                    <SvgIcon fileName="user-circle" className="h-28" />
                </div>
            )}
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
            />
        </div>
    );
}
