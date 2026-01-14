import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { AnnouncementService } from '../../services/AnnouncementService';
import AnnouncementClient from '../../httpClient/AnnouncementClient';
import i18n from '../../../translation/i18n';

export function useAnnouncementDetail() {
    const { id } = useParams();

    const announcementClient = new AnnouncementClient();
    const announcementService = new AnnouncementService(announcementClient);

    const { data: announcementDetail } = useQuery({
        queryKey: ['announcementDetail', i18n.language, id],
        queryFn: () => announcementService.getAnnouncementDetail(id),
        retry: false,
    });

    return { announcementDetail };
}
