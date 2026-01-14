import { AnnouncementDetail } from '../../models/AnnouncementDetail';
import { Card } from '@material-tailwind/react';
import DateFormatter from '../../ui/DateFormatter';
import SanitizedHTML from '../../ui/SanitizedHtml';

export interface AnnouncementDetailCardProps {
    announcementDetail: AnnouncementDetail;
}

export default function AnnouncementDetailCard({
    announcementDetail,
}: AnnouncementDetailCardProps) {
    const { boardSubject, boardContents, createdAt } = announcementDetail;
    return (
        <Card className="p-4 flex flex-col gap-3">
            <p className="font-bold">{boardSubject}</p>
            <DateFormatter date={createdAt} className="text-xs text-gray-500"></DateFormatter>
            <SanitizedHTML className="overflow-auto break-words" html={boardContents || ''} />
        </Card>
    );
}
