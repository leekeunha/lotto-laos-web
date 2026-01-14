import { PointHistory } from '../../models/PointHistoryItem';
import MonthlyHistoryItem from '../../models/MonthlyHistoryItem';
import PointHistoryCard from './PointHistoryCard';
import useInfiniteTransferHistory from './useInfiniteTransferHistory';

import InfiniteDataHandler from '../../ui/InfiniteDataHandler';

export default function PointTransferHistoryCards() {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage, error } =
        useInfiniteTransferHistory();

    return (
        <InfiniteDataHandler
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            error={error}
        >
            {data?.pages.map((monthlyHistoryItems: MonthlyHistoryItem[]) =>
                monthlyHistoryItems.map((monthlyHistoryItem) => (
                    <div
                        className="mt-5 flex flex-col gap-3"
                        key={`${monthlyHistoryItem.yearMonth}`}
                    >
                        <div className="flex">
                            <div className="text-gray-500"> {monthlyHistoryItem.yearMonth}</div>
                        </div>
                        <div>
                            {monthlyHistoryItem.historyItems.map((historyItem: PointHistory) => (
                                <PointHistoryCard
                                    key={`${historyItem.historyIdx}`}
                                    pointHistory={historyItem}
                                />
                            ))}
                        </div>
                    </div>
                )),
            )}
        </InfiniteDataHandler>
    );
}
