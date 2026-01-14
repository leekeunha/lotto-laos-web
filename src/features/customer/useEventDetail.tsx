import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import i18n from '../../../translation/i18n';
import EventClient from '../../httpClient/EventClient';
import { EventService } from '../../services/EventService.ts';

export function useEventDetail() {
    const { id } = useParams();

    const eventClient = new EventClient();
    const eventService = new EventService(eventClient);

    const { data: eventDetail } = useQuery({
        queryKey: ['eventDetail', i18n.language, id],
        queryFn: () => eventService.getEventDetail(id, i18n.language),
        retry: false,
    });

    return { eventDetail };
}
