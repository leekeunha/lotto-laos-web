import axios, { AxiosRequestConfig } from 'axios';
import { GetBannerApiRequest } from '../services/types';

/**
 * 배너 클라이언트 클래스입니다.
 */
export default class BannerClient {
    private bannerHttpClient;

    constructor() {
        this.bannerHttpClient = axios.create({
            baseURL: import.meta.env.VITE_BANNER_API_URL,
        });
    }

    /**
     * 배너 목록을 가져오는 메서드입니다.
     * @returns 배너 목록의 응답 결과를 반환합니다.
     */
    async getBanners(requestData: GetBannerApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };

        return this.bannerHttpClient.get('', config);
    }
}
