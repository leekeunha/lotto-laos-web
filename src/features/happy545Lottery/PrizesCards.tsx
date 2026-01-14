import { Prize } from '../../models/Prize';
import PrizeCard from './PrizeCard';
import useInfinitePrizes from './useInfinitePrizes';
import InfiniteDataHandler from '../../ui/InfiniteDataHandler';

export default function PrizesCards() {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage, error } = useInfinitePrizes();

    return (
        <InfiniteDataHandler
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            error={error}
        >
            <div className="mt-6">
                {data?.pages.map((prizes: Prize[]) =>
                    prizes.map((prize, index) => <PrizeCard key={index} prize={prize} />),
                )}
            </div>
        </InfiniteDataHandler>
    );
}
