import { Card } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { AnnouncementCardProps } from '../types';
import DateFormatter from '../../ui/DateFormatter';
import SanitizedHTML from '../../ui/SanitizedHtml';

export default function AnnouncementCard({ announcement }: AnnouncementCardProps) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/notice/announcements/${announcement.boardIdx}`, {
            state: { announcement },
        });
    };

    const { createdAt, boardSubject, boardContents } = announcement;

    return (
        <Card className="mb-2 bg-white rounded-lg p-3 text-sm" onClick={handleCardClick}>
            <p className="flex flex-col gap-2">
                <span className="flex gap-2">
                    {announcement.new && (
                        <span className="text-xs rounded-lg bg-red-600 px-2 text-white" color="red">
                            N
                        </span>
                    )}
                    <div className="flex items-center text-xs">
                        <DateFormatter date={createdAt} />
                    </div>
                </span>
                <p className="font-bold">{boardSubject}</p>
                <div className="text-xs line-clamp-2">
                    <SanitizedHTML html={boardContents || ''} />
                </div>
            </p>
        </Card>
    );
}
