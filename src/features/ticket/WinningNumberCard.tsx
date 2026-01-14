import { Card } from '@material-tailwind/react';
import NumberMarbles from '../../ui/NumberMarbles';
import { TicketDetail } from '../../models/TicketDetail';

export interface WinningNumberCardProps {
    ticketDetail?: TicketDetail;
}

export default function WinningNumberCard({ ticketDetail }: WinningNumberCardProps) {

    if (!ticketDetail) {
        return null;
    }

    return (
        <Card className={`flex p-4 transition-transform duration-300`}>
            <div className="flex gap-3 items-center justify-center">                
                <NumberMarbles
                    numbers={ticketDetail.winningNumber}
                    highlightNumbers={ticketDetail.winningNumber}
                    marbleSize={12}
                ></NumberMarbles>                
            </div>
        </Card>
    );
}
