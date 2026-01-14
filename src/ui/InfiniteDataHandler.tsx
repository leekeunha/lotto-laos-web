import { ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import LoadingMore from './LoadingMore';
import CustomError from './Error';
import NoDataWithSadIcon from './NoDataWithSadIcon';

interface InfiniteDataHandlerProps {
    data: any;
    fetchNextPage: () => void;
    hasNextPage: boolean;
    isFetchingNextPage: boolean;
    error: unknown;
    children: ReactNode;
    noDataMessage?: string;
}

export default function InfiniteDataHandler({
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    children,
    noDataMessage = 'There is no data.',
}: InfiniteDataHandlerProps) {
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [fetchNextPage, inView, hasNextPage]);

    const noData = data?.pages[0]?.length === 0;

    if (isFetchingNextPage) {
        return <LoadingMore isLoading={true} ref={ref} />;
    }

    if (error) {
        return <CustomError />;
    }

    if (noData) {
        return <NoDataWithSadIcon text={noDataMessage} />;
    }

    return (
        <>
            {children}
            <LoadingMore isLoading={isFetchingNextPage} ref={ref} />
        </>
    );
}
