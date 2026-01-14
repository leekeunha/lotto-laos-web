import { useNavigate } from 'react-router-dom';
import { InquiryCardProps } from '../types';
import { Card, Chip } from '@material-tailwind/react';

import DateFormatter from '../../ui/DateFormatter';

export default function InquiryCard({ inquiry }: InquiryCardProps) {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/my-account/inquiries/${inquiry.idx}`, {
            state: { inquiry },
        });
    };

    return (
        <Card className="mb-2 bg-white rounded-lg p-3 text-sm" onClick={handleCardClick}>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <DateFormatter date={inquiry.inquiryAt}></DateFormatter>
                    <Chip variant="outlined" value={inquiry.status}></Chip>
                </div>
                <p>{inquiry.title}</p>
                <p>{inquiry.content}</p>
            </div>
        </Card>
    );
}
