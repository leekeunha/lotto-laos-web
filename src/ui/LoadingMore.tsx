import { ForwardedRef, forwardRef } from 'react';

interface LoadingMoreProps {
    isLoading: boolean;
}

const LoadingMore = forwardRef(function LoadingMore(
    { isLoading }: LoadingMoreProps,
    ref: ForwardedRef<HTMLDivElement>,
) {
    return <div ref={ref}>{isLoading && 'Loading...'}</div>;
});

export default LoadingMore;
