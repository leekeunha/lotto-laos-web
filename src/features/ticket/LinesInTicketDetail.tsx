import NumberMarblesCardsInTicket from './NumberMarblesCardsInTicket';
import { LinesInTicketDetailProps } from './types';

export default function LinesInTicketDetail({ ticketDetail }: LinesInTicketDetailProps) {
    if (!ticketDetail) {
        return null;
    }

    return <NumberMarblesCardsInTicket ticketDetail={ticketDetail} />;
}
