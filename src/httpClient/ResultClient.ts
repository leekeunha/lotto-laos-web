import axios, { AxiosRequestConfig } from 'axios';
import { GetResultApiRequest, GetResultDetailApiRequest } from '../services/types';

/**
 * result 클라이언트 클래스입니다.
 */
export default class ResultClient {
    private httpClient;

    constructor() {
        this.httpClient = axios.create({
            baseURL: import.meta.env.VITE_HOME_API_URL,
        });
    }

    /**
     * 공지사항 목록을 가져오는 메서드입니다.
     * @param requestData - 공지사항 요청 데이터를 포함한 객체
     * @returns 공지사항 목록의 응답 결과를 반환합니다.
     */
    async getResult(requestData: GetResultApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };
        return this.httpClient.get('winning', config);
    }

    async getResultDetail(requestData: GetResultDetailApiRequest) {
        // const config: AxiosRequestConfig = {
        //     params: requestData,
        // };

        return this.httpClient.get(`winning/${requestData.drawIdx}`);
    }
}
