import useInfiniteInquiries from './useInfiniteInquiries';
import { Inquiry } from '../../models/Inquiry';
import InquiryCard from './InquiryCard';
import InfiniteDataHandler from '../../ui/InfiniteDataHandler';

export default function InquiryCards() {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage, error } = useInfiniteInquiries();

    return (
        <InfiniteDataHandler
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            error={error}
        >
            {data?.pages.map((inquiries: Inquiry[]) =>
                inquiries.map((inquiry) => {
                    return <InquiryCard key={inquiry.idx} inquiry={inquiry} />;
                }),
            )}
        </InfiniteDataHandler>
    );
}
