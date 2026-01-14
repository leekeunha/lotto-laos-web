/* ----------------------------------------------------------------------

 *   추천인 목록을 무한 스크롤 방식으로 불러오는 커스텀 훅입니다.
 
 * ---------------------------------------------------------------------- */

import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../../constants/global';
import ReferralClient from '../../httpClient/ReferralClient';
import { ReferralService } from '../../services/ReferralService';
import { Referrer } from '../../models/Referrer';

export default function useInfiniteReffers() {
    const referralClient = new ReferralClient();
    const referralService = new ReferralService(referralClient);

    const [searchParams] = useSearchParams();
    const sortOrder = searchParams.get('sortOrder') || '';

    return useInfiniteQuery({
        queryKey: ['referrers', sortOrder],
        queryFn: async ({ pageParam }): Promise<Referrer[]> =>
            referralService.getReferrers(pageParam, PAGE_SIZE, sortOrder),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
    });
}
