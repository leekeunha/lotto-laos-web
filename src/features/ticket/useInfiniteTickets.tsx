import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import TicketClient from '../../httpClient/TicketClient';
import { TicketService } from '../../services/TicketService';
import { PAGE_SIZE } from '../../../constants/global';
import DrawInfo from '../../models/DrawInfo';

export default function useInfiniteTickets() {
    const ticketClient = new TicketClient();
    const ticketService = new TicketService(ticketClient);
    const [searchParams] = useSearchParams();
    const sortOrder = searchParams.get('sortOrder') || 'desc';
    const gameSelectFilter = searchParams.get('gameSelectFilter') || '';

    return useInfiniteQuery({
        queryKey: ['tickets', sortOrder, gameSelectFilter],
        queryFn: async ({ pageParam }): Promise<DrawInfo[]> =>
            ticketService.getDrawInfos(pageParam, PAGE_SIZE, sortOrder, gameSelectFilter),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
    });
}
