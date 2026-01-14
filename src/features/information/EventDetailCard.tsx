import { Card } from '@material-tailwind/react';
import DateFormatter from '../../ui/DateFormatter';
import SanitizedHTML from '../../ui/SanitizedHtml';
import { EventDetailCardProps } from './types';

export default function EventDetailCard({ eventDetail }: EventDetailCardProps) {
    const { boardSubject, boardContents, createdAt, imageUrl } = eventDetail;
    return (
        <Card className="flex flex-col gap-3">
            <img
                src={imageUrl}
                alt="event"
                className="w-full h-[100px] object-cover rounded-t-lg"
            />
            <section className="p-4">
                <p className="font-bold">{boardSubject}</p>
                <DateFormatter date={createdAt} className="text-xs text-gray-500"></DateFormatter>
                <SanitizedHTML className="overflow-auto break-words" html={boardContents || ''} />
            </section>
        </Card>
    );
}
