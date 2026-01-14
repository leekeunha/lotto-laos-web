import { useInfiniteQuery } from '@tanstack/react-query';
import PointMallOrderHistoryClient from '../../httpClient/PointMallOrderHistoryClient';
import { ALL, DESC, PAGE_SIZE } from '../../../constants/global';
import { useSearchParams } from 'react-router-dom';
import { PointMallOrderHistoryService } from '../../services/PointMallOrderHistoryService';
import { PointMallOrderHistory } from '../../models/PointMallOrderHistory';

export default function useInfinitePointMallOrderHistory() {
    const pointMallOrderHistoryClient = new PointMallOrderHistoryClient();
    const pointMallOrderHistoryService = new PointMallOrderHistoryService(
        pointMallOrderHistoryClient,
    );

    const [searchParams] = useSearchParams();
    const sortStatus = searchParams.get('sortStatus') || ALL;
    const sortOrder = searchParams.get('sortOrder') || DESC;

    return useInfiniteQuery({
        queryKey: ['pointMallOrderHistory', PAGE_SIZE, sortStatus, sortOrder],
        queryFn: async ({ pageParam }): Promise<PointMallOrderHistory[]> =>
            pointMallOrderHistoryService.getPointMallOrderHistory(
                PAGE_SIZE,
                pageParam,
                sortStatus,
                sortOrder,
            ),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
    });
}
