import axios, { AxiosRequestConfig } from 'axios';
import { GetEventsApiRequest, GetEventDetailApiRequest } from '../services/types';

/**
 * 이벤트 배너 클라이언트 클래스입니다.
 */
export default class EventClient {
    private httpClient;

    constructor() {
        this.httpClient = axios.create({
            baseURL: import.meta.env.VITE_EVENT_API_URL,
        });
    }

    /**
     * 이벤트 배너 목록을 가져오는 메서드입니다.
     * @param requestData - 이벤트 배너 요청 데이터를 포함한 객체
     * @returns 이벤트 배너  목록의 응답 결과를 반환합니다.
     */
    async getEvents(requestData: GetEventsApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };
        return this.httpClient.get('event-list', config);
    }

    async getEventDetail(requestData: GetEventDetailApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };
        return this.httpClient.get('event-info', config);
    }
}
