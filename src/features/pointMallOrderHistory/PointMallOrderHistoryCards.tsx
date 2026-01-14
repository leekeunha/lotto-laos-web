/*----------------------------------------------------------------------------------

 * 주문한 제품 정보를 표시하는 카드 리스트 UI 컴포넌트입니다.

 *---------------------------------------------------------------------------------*/
import { PointMallOrderHistory } from '../../models/PointMallOrderHistory';
import InfiniteDataHandler from '../../ui/InfiniteDataHandler';
import useInfinitePointMallOrderHistory from '../pointMallOrderHistory/useInfinitePointMallOrderHistory';
import PointMallOrderHistoryCard from './PointMallOrderHistoryCard';

export default function PointMallOrderHistoryCards() {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage, error } =
        useInfinitePointMallOrderHistory();

    return (
        <InfiniteDataHandler
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            error={error}
        >
            {data?.pages.map((orderHistories: PointMallOrderHistory[]) =>
                orderHistories.map((orderHistory) => {
                    return (
                        <PointMallOrderHistoryCard
                            key={orderHistory.orderIdx}
                            orderHistory={orderHistory}
                        />
                    );
                }),
            )}
        </InfiniteDataHandler>
    );
}
