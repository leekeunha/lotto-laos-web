/*----------------------------------------------------------------------------------

 * 메시지 정보를 표시하는 UI 컴포넌트입니다.

 *---------------------------------------------------------------------------------*/
import { useNavigate } from 'react-router-dom';
import { MessageItemProps } from '../types';
import DateFormatter from '../../ui/DateFormatter';
import { useReadMessage } from './useReadMessage';
import { renderMessageIcon } from '../../global/renderMessageIcon';

export default function MessageItem({ message }: MessageItemProps) {
    const navigate = useNavigate();
    const { readMessage } = useReadMessage();

    const { messageIdx, isRead, createdAt, title, message: content } = message;

    const handleItemClick = () => {
        readMessage(messageIdx, {
            onSuccess: () => {
                navigate(`/messages/${messageIdx}`);
            },
        });
    };

    return (
        <div
            className={`p-3 text-sm ${isRead === false ? 'bg-pink-50' : 'bg-white'}`}
            onClick={handleItemClick}
        >
            <div className="grid grid-cols-[min-content_3fr_3fr]">
                <div className="flex row-span-2 p-2 items-center mr-3 border rounded-full">
                    {renderMessageIcon(1)}
                </div>
                <div className="flex flex-col">
                    <div className="font-bold">
                        <span className={isRead === false ? 'text-red-700' : ''}>{title}</span>
                    </div>
                    <span className="text-base">{content}</span>
                    <DateFormatter date={createdAt} className="text-gray-500"></DateFormatter>
                </div>
            </div>
        </div>
    );
}
