import { useInfiniteQuery } from '@tanstack/react-query';
import { AnnouncementService } from '../../services/AnnouncementService';
import AnnouncementClient from '../../httpClient/AnnouncementClient';
import i18n from '../../../translation/i18n';
import { Announcement } from '../../models/Announcement';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../../constants/global';

export default function useInfiniteAnnouncements() {
    const announcementClient = new AnnouncementClient();
    const announcementService = new AnnouncementService(announcementClient);

    const [searchParams] = useSearchParams();
    const q = searchParams.get('q') || '';

    return useInfiniteQuery({
        queryKey: ['announcements', PAGE_SIZE, q, i18n.language],
        queryFn: async ({ pageParam }): Promise<Announcement[]> =>
            announcementService.getAnnouncements(PAGE_SIZE, pageParam, q, i18n.language),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
    });
}
