import { useInfiniteQuery } from '@tanstack/react-query';
import MessageClient from '../../httpClient/MessageClient';
import { MessageService } from '../../services/MessageService';
import { Message } from '../../models/Message';
import { PAGE_SIZE } from '../../../constants/global';

export default function useInfiniteMessages() {
    const messageClient = new MessageClient();
    const messageService = new MessageService(messageClient);

    return useInfiniteQuery({
        queryKey: ['message', PAGE_SIZE],
        queryFn: async ({ pageParam }): Promise<Message[]> =>
            messageService.getMessages(PAGE_SIZE, pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
    });
}
