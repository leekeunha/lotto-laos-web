import ResultCard from './ResultCard';
import { Result } from '../../models/Result';
import useInfiniteResults from './useInfiniteResults';
import InfiniteDataHandler from '../../ui/InfiniteDataHandler';

export default function ResultCards() {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage, error } = useInfiniteResults();

    return (
        <InfiniteDataHandler
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            error={error}
        >
            {data?.pages.map((results: Result[]) =>
                results.map((result) => {
                    return <ResultCard key={result.drawIdx} result={result} />;
                }),
            )}
        </InfiniteDataHandler>
    );
}
