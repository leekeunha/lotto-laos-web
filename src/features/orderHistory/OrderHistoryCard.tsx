import { useNavigate } from 'react-router-dom';
import { OrderHistoryCardProps } from '../types';
import { Card } from '@material-tailwind/react';
import { renderGameIcon } from '../../global/renderGameIcon';
import FormatCurrency from '../../ui/FormatCurrency';
import DateFormatter from '../../ui/DateFormatter';

export default function OrderHistoryCard({ orderHistory }: OrderHistoryCardProps) {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/happy545-lottery/orders/${orderHistory.orderIdx}`, {
            state: { orderHistory },
        });
    };

    return (
        <Card className="mb-2 bg-white rounded-lg p-3 text-sm" onClick={handleCardClick}>
            <div className="grid grid-cols-[min-content_3fr_3fr]">
                <div className="flex row-span-2 p-2 items-center mr-3 border rounded-lg">
                    {renderGameIcon(1)}
                </div>
                <div className="flex flex-col">
                    <div className="font-bold">Draw {orderHistory.drawIdx}</div>
                    <DateFormatter date={orderHistory.createdAt}></DateFormatter>
                </div>
                <div className="flex justify-end">
                    <FormatCurrency
                        amount={orderHistory.totalPrice || 0}
                        currency={orderHistory.currencyType}
                    ></FormatCurrency>
                </div>
            </div>
        </Card>
    );
}
