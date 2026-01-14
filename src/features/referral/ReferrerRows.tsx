/* ----------------------------------------------------------------------
 
 *   추천인 데이터를 무한 스크롤 방식으로 로드하여 표시하는 컴포넌트입니다.
 
 * ---------------------------------------------------------------------- */

import useInfiniteReferrers from './useInfiniteReferrers';
import { Referrer } from '../../models/Referrer';
import ReferrerRow from './ReferrerRow';
import InfiniteDataHandler from '../../ui/InfiniteDataHandler';

export default function ReferrerRows() {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage, error } = useInfiniteReferrers();

    return (
        <InfiniteDataHandler
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            error={error}
        >
            <section>
                {data?.pages.map((referrers: Referrer[]) =>
                    referrers.map((referrer) => (
                        <ReferrerRow key={referrer.referralMemberId} referrer={referrer} />
                    )),
                )}
            </section>
        </InfiniteDataHandler>
    );
}
