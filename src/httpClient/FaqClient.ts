import axios, { AxiosRequestConfig } from 'axios';
import { GetFaqsApiRequest } from '../services/types';

/**
 * FAQ 클라이언트 클래스입니다.
 */
export default class FaqClient {
    private httpClient;

    constructor() {
        this.httpClient = axios.create({
            baseURL: import.meta.env.VITE_FAQ_API_URL,
        });
    }

    /**
     * FAQ 목록을 가져오는 메서드입니다.
     * @param requestData - FAQ 요청 데이터를 포함한 객체
     * @returns FAQ 목록의 응답 결과를 반환합니다.
     */
    async getFaqs(requestData: GetFaqsApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };
        return this.httpClient.get('list', config);
    }
}
