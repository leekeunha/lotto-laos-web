import AnnouncementCard from './AnnouncementCard';
import { Announcement } from '../../models/Announcement';
import useInfiniteAnnouncements from './useInfiniteAnnouncements';
import InfiniteDataHandler from '../../ui/InfiniteDataHandler';

export default function AnnouncementCards() {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage, error } =
        useInfiniteAnnouncements();

    return (
        <InfiniteDataHandler
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            error={error}
        >
            {data?.pages.map((announcements: Announcement[]) =>
                announcements.map((announcement) => {
                    return (
                        <AnnouncementCard key={announcement.boardIdx} announcement={announcement} />
                    );
                }),
            )}
        </InfiniteDataHandler>
    );
}
