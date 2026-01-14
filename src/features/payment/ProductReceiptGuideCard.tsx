import { useNavigate } from 'react-router-dom';
import { ProductReceiptGuideCardProps } from './types';

export default function ProductReceiptGuideCard({ className = '' }: ProductReceiptGuideCardProps) {
    const navigate = useNavigate();

    return (
        <div className={`bg-white p-6 flex flex-col gap-4 rounded-lg shadow-lg ${className}`}>
            <div className="font-bold text-xl">Product Receipt Guide</div>
            <div className="text-blue-gray-500">
                You can find answers more easily and quickly by using the FAQ.
            </div>
            <button
                className="bg-red-700 py-3 px-4 rounded-lg w-fit"
                onClick={() => {
                    navigate('/notice/faq');
                }}
            >
                <span className="text-white">Go FAQ</span>
            </button>
        </div>
    );
}
