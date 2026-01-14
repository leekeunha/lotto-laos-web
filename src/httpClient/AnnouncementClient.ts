import axios, { AxiosRequestConfig } from 'axios';
import { GetAnnouncementDetailApiRequest, GetAnnouncementsApiRequest } from '../services/types';

/**
 * 공지 클라이언트 클래스입니다.
 */
export default class AnnouncementClient {
    private httpClient;

    constructor() {
        this.httpClient = axios.create({
            baseURL: import.meta.env.VITE_ANNOUNCEMENT_API_URL,
        });
    }

    /**
     * 공지사항 목록을 가져오는 메서드입니다.
     * @param requestData - 공지사항 요청 데이터를 포함한 객체
     * @returns 공지사항 목록의 응답 결과를 반환합니다.
     */
    async getAnnouncements(requestData: GetAnnouncementsApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };
        return this.httpClient.get('notice-list', config);
    }

    async getAnnouncementDetail(requestData: GetAnnouncementDetailApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };
        return this.httpClient.get('notice-info', config);
    }
}
