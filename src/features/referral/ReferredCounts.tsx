/* ----------------------------------------------------------------------
 
 *   전체 추천 수와 이번 달 추천 수를 표시하는 컴포넌트  
 
 * ---------------------------------------------------------------------- */

import { useReferralOverview } from './useReferralOverview';

export default function ReferredCounts() {
    const { referralOverview, isPending } = useReferralOverview();

    if (isPending) {
        return <p>Loading...</p>;
    }

    if (!referralOverview) {
        return <p>No Data</p>;
    }

    const { totalCount, thisMonthCount } = referralOverview;

    return (
        <div className="flex flex-col gap-4">
            <div className="text-sm">Referral Count</div>
            <div className="grid grid-rows-[auto,auto] grid-cols-2">
                <p className="text-3xl">
                    <span>{totalCount}</span>
                </p>
                <p className="text-3xl">{thisMonthCount}</p>
                <p className="text-gray-500">Total</p>
                <p className="text-gray-500">This Month</p>
            </div>
        </div>
    );
}
