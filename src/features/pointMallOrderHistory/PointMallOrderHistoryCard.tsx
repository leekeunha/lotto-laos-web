/*----------------------------------------------------------------------------------

 * 주문한 제품 정보를 표시하는 카드 UI 컴포넌트입니다.

 *---------------------------------------------------------------------------------*/
import { useNavigate } from 'react-router-dom';
import { PointMallOrderHistoryCardProps } from '../types';
import { Card } from '@material-tailwind/react';
import DateFormatter from '../../ui/DateFormatter';
import { REQUEST } from '../../../constants/global';

export default function PointMallOrderHistoryCard({
    orderHistory,
}: PointMallOrderHistoryCardProps) {
    const navigate = useNavigate();

    const { imageUrl, productName, quantity, status, createdAt, orderIdx } = orderHistory;

    const handleCardClick = () => {
        navigate(`/point/point-mall-orders/${orderIdx}`);
    };

    return (
        <Card className="mb-2 bg-white rounded-lg p-3 text-sm" onClick={handleCardClick}>
            <div className="grid grid-cols-[min-content_3fr_3fr] items-center">
                <div className="mr-3 rounded-lg overflow-hidden w-12 h-12">
                    <img src={imageUrl} alt="product" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                    <div>
                        <span className="font-bold">{productName}</span>
                        <span> X{quantity}</span>
                    </div>
                    <DateFormatter date={createdAt} showTime />
                </div>
                <div className="flex justify-end">
                    <span className={status === REQUEST ? `text-red-500` : ''}>{status}</span>
                </div>
            </div>
        </Card>
    );
}
