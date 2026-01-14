import DrawInfo from '../../models/DrawInfo';
import { TicketInfo } from '../../services/types';
import InfiniteDataHandler from '../../ui/InfiniteDataHandler';
import TicketCard from './TicketCard';
import useInfiniteTickets from './useInfiniteTickets';

export default function TicketCards() {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage, error } = useInfiniteTickets();

    return (
        <InfiniteDataHandler
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            error={error}
        >
            {data?.pages.map((drawInfos: DrawInfo[]) =>
                drawInfos.map((drawInfo) => (
                    <div className="mt-5 flex flex-col gap-3" key={drawInfo.drawIdx}>
                        <div className="flex">
                            <div className="">Draw : {drawInfo.drawIdx}</div>
                        </div>
                        <div>
                            {drawInfo.lines.map((line: TicketInfo) => (
                                <TicketCard key={line.serialNumber} ticketInfo={line} />
                            ))}
                        </div>
                    </div>
                )),
            )}
        </InfiniteDataHandler>
    );
}
