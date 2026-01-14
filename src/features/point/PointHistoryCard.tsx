import { Card } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { PointHistoryCardProps } from '../types';
import { renderPointTypeIcon } from '../../global/renderPointTypeIcon';
import DateFormatter from '../../ui/DateFormatter';

export default function PointHistoryCard({ pointHistory }: PointHistoryCardProps) {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`${pointHistory.historyIdx}`, {
            state: { pointHistory },
        });
    };

    const pointsValue = parseFloat(pointHistory.points.replace(/,/g, ''));
    const formattedPoints = Math.abs(pointsValue).toLocaleString();

    const isPositive = pointsValue > 0;
    const pointsClass = isPositive ? 'text-red-500' : 'text-gray-500';
    const displayPoints = isPositive ? `+${formattedPoints}` : `-${formattedPoints}`;

    return (
        <Card className="mb-2 bg-white rounded-lg p-3 text-sm" onClick={handleCardClick}>
            <div className="grid grid-cols-[min-content_3fr_1fr] grid-rows-2">
                <div className="flex row-span-2 p-2 items-center mr-3 border rounded-lg w-10 h-10">
                    {renderPointTypeIcon(pointHistory.pointType)}
                </div>

                <div className="flex">
                    <span className="text-start">{pointHistory.transactionType}</span>
                </div>
                <p className={`text-end ${pointsClass}`}>{displayPoints}</p>
                <div className="flex gap-2">
                    <DateFormatter date={pointHistory.createdAt}></DateFormatter>
                </div>
            </div>
        </Card>
    );
}
