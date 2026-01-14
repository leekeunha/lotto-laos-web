import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { DESC, PAGE_SIZE } from '../../../constants/global';
import PointClient from '../../httpClient/PointClient';
import { PointService } from '../../services/PointService';

export default function useInfiniteTransferHistory() {
    const pointClient = new PointClient();
    const pointService = new PointService(pointClient);
    const [searchParams] = useSearchParams();
    const pointType = searchParams.get('pointType') || '';
    const sortOrder = searchParams.get('sortOrder') || DESC;
    const useType = searchParams.get('useType') || '';

    return useInfiniteQuery({
        queryKey: ['pointHistory', useType, pointType, sortOrder],
        queryFn: ({ pageParam }) =>
            pointService.getPointHistory(pageParam, PAGE_SIZE, useType, pointType, sortOrder),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
    });
}
