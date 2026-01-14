import axios, { AxiosRequestConfig } from 'axios';
import { GetOrderHistoryApiRequest } from '../services/types';
import { getAuthTokensFromLocalStorage } from '../features/authentication/userLocalStorageStore';

/**
 * result 클라이언트 클래스입니다.
 */
export default class OrderHistoryClient {
    private httpClient;

    constructor() {
        const authTokens = getAuthTokensFromLocalStorage();

        this.httpClient = axios.create({
            baseURL: import.meta.env.VITE_ORDER_API_URL,
            headers: {
                Authorization: authTokens ? `Bearer ${authTokens.accessToken}` : '',
            },
        });
    }

    /**
     * 공지사항 목록을 가져오는 메서드입니다.
     * @param requestData - 공지사항 요청 데이터를 포함한 객체
     * @returns 공지사항 목록의 응답 결과를 반환합니다.
     */
    async getOrderHistory(requestData: GetOrderHistoryApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };
        return this.httpClient.get('my', config);
    }

    async getOrderHistoryDetail(requestData: any) {
        return this.httpClient.get(`${requestData.orderIdx}/my`);
    }
}
