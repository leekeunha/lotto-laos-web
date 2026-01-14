/*----------------------------------------------------------------------------------

 * 메시지 정보를 표시하는 리스트 UI 컴포넌트입니다.

 *---------------------------------------------------------------------------------*/
import MessageItem from './MessageItem';
import { Message } from '../../models/Message';
import useInfiniteMessages from './useInfiniteMessages';

import InfiniteDataHandler from '../../ui/InfiniteDataHandler';

export default function MessageList() {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage, error } = useInfiniteMessages();

    return (
        <InfiniteDataHandler
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            error={error}
        >
            {data?.pages.map((messages: Message[]) =>
                messages.map((message) => {
                    return <MessageItem key={message.messageIdx} message={message} />;
                }),
            )}
        </InfiniteDataHandler>
    );
}
