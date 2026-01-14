import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import i18n from '../../../translation/i18n';
import TicketClient from '../../httpClient/TicketClient';
import { TicketService } from '../../services/TicketService';

export function useTicketDetail() {
    const { id } = useParams();
    const numericId = id || '';

    const ticketClient = new TicketClient();
    const ticketService = new TicketService(ticketClient);

    const { data: ticketDetail, isLoading } = useQuery({
        queryKey: ['ticketDetail', i18n.language, numericId],
        queryFn: () => ticketService.getTicketDetail(numericId),
    });

    return { ticketDetail,isLoading };
}
