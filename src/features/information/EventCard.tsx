import { Card } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { EventCardProps } from '../types';
import EventOver from './EventOver';

export default function EventCard({ event }: EventCardProps) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/notice/event/${event.boardIdx}`, {
            state: { event },
        });
    };

    const { imageUrl, operatingType } = event;

    return (
        <div className="mb-2">
            {operatingType === 'END' ? (
                <EventOver imageUrl={imageUrl} />
            ) : (
                <Card onClick={handleCardClick}>
                    <img
                        src={imageUrl}
                        alt="event"
                        className="w-full h-[100px] object-cover rounded-lg"
                    />
                </Card>
            )}
        </div>
    );
}
