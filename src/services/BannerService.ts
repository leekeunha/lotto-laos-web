import i18n from '../../translation/i18n';
import BannerClient from '../httpClient/BannerClient';
import { Banner } from '../models/Banner';
import { RemoteBanner } from '../models/RemoteBanner';
import { GetBannerApiRequest } from './types';

// BannerService 클래스는 배너 데이터를 가져오기 위한 서비스입니다.
export class BannerService {
    private bannerClient: BannerClient;

    constructor(apiClient: BannerClient) {
        this.bannerClient = apiClient;
    }

    /**
     * 배너 데이터를 가져옵니다.
     * @returns Promise<Banner[]> - 배너 데이터의 배열
     */
    async getBanners(): Promise<Banner[]> {
        const requestData: GetBannerApiRequest = {
            languageType: i18n.language,
        };
        const response = await this.bannerClient.getBanners(requestData);
        const remoteBanners: RemoteBanner[] = response.data;
        const banners = remoteBanners.map((remoteBanner) => new Banner(remoteBanner));
        return banners;
    }
}
