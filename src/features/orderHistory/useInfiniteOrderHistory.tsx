import { useInfiniteQuery } from '@tanstack/react-query';
import OrderHistoryClient from '../../httpClient/OrderHistoryClient';
import { OrderHistoryService } from '../../services/OrderHistoryService';
import { OrderHistory } from '../../models/OrderHistory';
import { DESC, PAGE_SIZE } from '../../../constants/global';
import { useSearchParams } from 'react-router-dom';

export default function useInfiniteOrderHistory() {
    const orderHistoryClient = new OrderHistoryClient();
    const orderHistoryService = new OrderHistoryService(orderHistoryClient);

    const [searchParams] = useSearchParams();
    const sortOrder = searchParams.get('sortOrder') || DESC;

    return useInfiniteQuery({
        queryKey: ['orderHistory', PAGE_SIZE, sortOrder],
        queryFn: async ({ pageParam }): Promise<OrderHistory[]> =>
            orderHistoryService.getOrderHistory(PAGE_SIZE, pageParam, sortOrder),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
    });
}
