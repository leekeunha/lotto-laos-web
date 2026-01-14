import { Card } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { TicketCardProps } from '../types';
import { renderTicketStatusIcon } from '../../global/renderTicketStatusIcon';

export default function TicketCard({ ticketInfo }: TicketCardProps) {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/happy545-lottery/tickets/${ticketInfo.ticketIdx}`, {
            state: { ticketInfo },
        });
    };

    return (
        <Card className="mb-2 bg-white rounded-lg p-3 text-sm" onClick={handleCardClick}>
            <div className="grid grid-cols-[min-content_3fr_3fr] grid-rows-2">
                <div className="flex row-span-2 p-2 items-center mr-3 border rounded-lg">
                    {renderTicketStatusIcon(ticketInfo.status)}
                </div>
                <div className="flex">
                    <span className="text-start">{ticketInfo.count}</span>
                    &nbsp;Lines
                </div>
                <div
                    className={`row-span-2 justify-self-end self-center ${
                        ticketInfo.status === 'Ongoing' ? 'text-red-700' : 'text-gray-500'
                    }`}
                >
                    {ticketInfo.status}
                </div>
                <div className="flex gap-2">
                    <div className="text-gray-500 text-xs self-center">
                        S/N {ticketInfo.serialNumber}
                    </div>
                </div>
            </div>
        </Card>
    );
}
