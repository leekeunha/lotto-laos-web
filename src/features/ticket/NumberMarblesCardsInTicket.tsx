import NumberMarblesCardInTicket from './NumberMarblesCardInTicket';
import { NumberMarblesCardsInTicketProps } from './types';

export default function NumberMarblesCardsInTicket({
    ticketDetail,
}: NumberMarblesCardsInTicketProps) {
    return (
        <div className="flex flex-col gap-3">
            {ticketDetail.lines.map((line, index) => (
                <NumberMarblesCardInTicket
                    key={index}
                    line={line}
                    index={index}
                    ticketDetail={ticketDetail}
                />
            ))}
        </div>
    );
}
