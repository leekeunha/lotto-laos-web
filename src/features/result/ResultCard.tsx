import { useNavigate } from 'react-router-dom';
import { ResultCardProps } from '../types';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import DateFormatter from '../../ui/DateFormatter';

export default function ResultCard({ result }: ResultCardProps) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/result/detail/${result.drawIdx}`, {
            state: { result },
        });
    };

    const isLastDraw = result.drawIdx === result.lastDrawIdx;
    const bgColor = isLastDraw ? 'bg-red-700' : 'bg-red-50';
    const textColor = isLastDraw ? 'text-white' : 'text-red-600';

    return (
        <div className="mb-2 bg-white rounded-lg p-4 text-sm shadow-md" onClick={handleCardClick}>
            <div className="flex items-center">
                <div className="flex flex-col justify-center">
                    <div className="flex gap-2 mb-2 items-center">
                        <div className={`px-3 py-1 ${bgColor} rounded-lg`}>
                            <span className={`${textColor} font-bold`}>draw {result.drawIdx}</span>
                        </div>
                        <div className="text-blue-gray-500 font-bold">
                            <DateFormatter date={new Date(result.drawEndDate)} />
                        </div>
                    </div>

                    <div className="flex gap-2">
                        {result.winningNumber.map((number, index) => (
                            <div
                                key={index}
                                className={`flex w-10 h-10 rounded-full items-center justify-center ${bgColor}`}
                            >
                                <span className={`font-bold ${textColor}`}>{number}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="ml-auto">
                    <ChevronRightIcon className="w-5 h-5 text-gray-500 stroke-[3px]" />
                </div>
            </div>
        </div>
    );
}
