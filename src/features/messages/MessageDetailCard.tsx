import { Card } from '@material-tailwind/react';
import DateFormatter from '../../ui/DateFormatter';
import SanitizedHTML from '../../ui/SanitizedHtml';
import { MessageDetail } from '../../models/MessageDetail';

export interface MessageDetailCardProps {
    messageDetail: MessageDetail;
}

export default function MessageDetailCard({ messageDetail }: MessageDetailCardProps) {
    const { title, message, createdAt } = messageDetail;
    return (
        <Card className="p-4 flex flex-col gap-3">
            <span className="font-bold text-4xl">{title}</span>
            <DateFormatter className="text-lg text-gray-500" date={createdAt} />
            <SanitizedHTML className="overflow-auto break-words text-lg" html={message || ''} />
        </Card>
    );
}
