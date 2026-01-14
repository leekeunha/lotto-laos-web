import { useQuery } from '@tanstack/react-query';
import TicketClient from '../../httpClient/TicketClient';
import { TicketService } from '../../services/TicketService';

export default function usePaymentSuccess(gameIdx: number) {
    const ticketClient = new TicketClient();
    const ticketService = new TicketService(ticketClient);

    const paymentReceiptQuery = useQuery({
        queryKey: ['paymentReceipt', gameIdx],
        queryFn: () => ticketService.getPaymentReceipt(gameIdx),
    });

    return { paymentReceiptQuery };
}
