import { useMutation } from '@tanstack/react-query';
import MessageClient from '../../httpClient/MessageClient';
import { MessageService } from '../../services/MessageService';

export function useReadMessage() {
    const messageClient = new MessageClient();
    const messageService = new MessageService(messageClient);

    const { mutate: readMessage } = useMutation({
        mutationFn: (messageIdx: number) => {
            return messageService.readMessage(messageIdx);
        },
    });

    return { readMessage };
}
