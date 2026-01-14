import EventClient from '../../httpClient/EventClient';
import { EventService } from '../../services/EventService.ts';
import { useSearchParams } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { PAGE_SIZE } from '../../../constants/global.ts';
import i18n from '../../../translation/i18n.ts';
import { EventModel } from '../../models/Event.ts';

export default function useInfiniteEvents() {
    const [searchParams] = useSearchParams();

    const category = searchParams.get('category') || undefined;
    const operatingType = category === 'all' ? undefined : category;

    const q = searchParams.get('q') || '';

    const eventClient = new EventClient();
    const eventService = new EventService(eventClient);

    return useInfiniteQuery({
        queryKey: ['events', PAGE_SIZE, q, i18n.language, operatingType],
        queryFn: async ({ pageParam }): Promise<EventModel[]> =>
            eventService.getEvents(PAGE_SIZE, pageParam, q, i18n.language, operatingType),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
    });
}
