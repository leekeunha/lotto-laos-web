import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { DESC, PAGE_SIZE } from '../../../constants/global';
import PrizeClient from '../../httpClient/PrizeClient';
import { PrizeService } from '../../services/PrizeService';
import { Prize } from '../../models/Prize';

export default function useInfinitePrizes() {
    const prizeClient = new PrizeClient();
    const prizeService = new PrizeService(prizeClient);
    const [searchParams] = useSearchParams();
    const sortOrder = searchParams.get('sortOrder') || DESC;
    const gameSelectFilter = searchParams.get('gameSelectFilter') || '';
    const paymentSelectFilter = searchParams.get('paymentSelectFilter') || '';
    const claimedSelectFilter = searchParams.get('claimedSelectFilter') || '';

    return useInfiniteQuery({
        queryKey: ['prizes', sortOrder, gameSelectFilter, paymentSelectFilter, claimedSelectFilter],
        queryFn: async ({ pageParam }): Promise<Prize[]> =>
            prizeService.getPrizes(
                pageParam,
                PAGE_SIZE,
                sortOrder,
                gameSelectFilter,
                paymentSelectFilter,
                claimedSelectFilter,
            ),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
    });
}
