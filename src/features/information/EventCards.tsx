import useInfiniteEvents from './useInfiniteEvents';
import { EventModel } from '../../models/Event';
import EventCard from './EventCard';
import InfiniteDataHandler from '../../ui/InfiniteDataHandler';

export default function EventCards() {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage, error } = useInfiniteEvents();

    return (
        <InfiniteDataHandler
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            error={error}
        >
            {data?.pages.map((events: EventModel[]) =>
                events.map((event) => {
                    return <EventCard key={event.boardIdx} event={event} />;
                }),
            )}
        </InfiniteDataHandler>
    );
}
