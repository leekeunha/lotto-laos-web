/* ----------------------------------------------------------------------

 *   추천인 개요 정보를 가져오는 커스텀 훅입니다.
 
 * ---------------------------------------------------------------------- */

import { useQuery } from '@tanstack/react-query';
import ReferralClient from '../../httpClient/ReferralClient';
import { ReferralService } from '../../services/ReferralService';

export function useReferralOverview() {
    const referralClient = new ReferralClient();
    const referralService = new ReferralService(referralClient);

    const { data: referralOverview, isPending } = useQuery({
        queryKey: ['referralOverview'],
        queryFn: () => referralService.getReferralOverview(),
    });

    return { referralOverview, isPending };
}
