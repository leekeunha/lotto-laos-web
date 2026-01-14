import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import i18n from '../../../translation/i18n';
import MessageClient from '../../httpClient/MessageClient';
import { MessageService } from '../../services/MessageService';

export function useMessageDetail() {
    const { id } = useParams();

    if (!id) {
        throw new Error('Inquiry ID is required');
    }

    const messageClient = new MessageClient();
    const messageService = new MessageService(messageClient);

    const { data: messageDetail, isLoading } = useQuery({
        queryKey: ['messageDetail', i18n.language, id],
        queryFn: () => messageService.getMessageDetail(Number(id)),
    });
    return { messageDetail, isLoading };
}
