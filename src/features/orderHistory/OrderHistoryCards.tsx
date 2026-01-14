import OrderHistoryCard from './OrderHistoryCard';
import { OrderHistory } from '../../models/OrderHistory';
import useInfiniteOrderHistory from './useInfiniteOrderHistory';

import InfiniteDataHandler from '../../ui/InfiniteDataHandler';

export default function OrderHistoryCards() {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage, error } =
        useInfiniteOrderHistory();

    return (
        <InfiniteDataHandler
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            error={error}
        >
            {data?.pages.map((orderHistories: OrderHistory[]) =>
                orderHistories.map((orderHistory) => {
                    return (
                        <OrderHistoryCard key={orderHistory.orderIdx} orderHistory={orderHistory} />
                    );
                }),
            )}
        </InfiniteDataHandler>
    );
}
