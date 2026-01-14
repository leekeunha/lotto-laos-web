import { Link } from 'react-router-dom';
import { ViewTicketButtonProps } from './types';

export default function ViewTicketButton({ ticketIdx }: ViewTicketButtonProps) {
    return (
        <div className="mt-4">
            <Link to={`/happy545-lottery/tickets/${ticketIdx}`}>
                <button className="bg-red-700 w-full py-3 rounded-lg text-white font-bold">
                    View Ticket
                </button>
            </Link>
        </div>
    );
}
