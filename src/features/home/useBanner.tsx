import { useQuery } from '@tanstack/react-query';

import { Banner } from '../../models/Banner';

import BannerClient from '../../httpClient/BannerClient';
import { BannerService } from '../../services/BannerService';
import i18n from '../../../translation/i18n';

export default function useBanners() {
    const bannerClient = new BannerClient();
    const bannerService = new BannerService(bannerClient);

    const { data: banners } = useQuery({
        queryKey: ['banners', i18n.language],
        queryFn: async (): Promise<Banner[] | null> => bannerService.getBanners(),
    });

    return banners;
}
