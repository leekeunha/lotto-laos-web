import { MyBank } from '../../models/MyBank';
import InfiniteDataHandler from '../../ui/InfiniteDataHandler';
import MyBankRow from './MyBankRow';
import useInfiniteMyBanks from './useInfiniteMyBanks';

export default function MyBanks() {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage, error } = useInfiniteMyBanks();

    return (
        <InfiniteDataHandler
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            error={error}
        >
            {data?.pages.map((myBanks: MyBank[]) =>
                myBanks.map((myBank) => {
                    return <MyBankRow key={myBank.accountNumber} myBank={myBank} />;
                }),
            )}
        </InfiniteDataHandler>
    );
}
