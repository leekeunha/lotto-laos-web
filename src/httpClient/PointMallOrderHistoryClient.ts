import axios, { AxiosRequestConfig } from 'axios';
import {
    GetPointMallOrderHistoryApiRequest,
    GetPointMallOrderHistoryDetailApiRequest,
    RemovePointMallOrderApiRequest,
} from '../services/types';
import { getAuthTokensFromLocalStorage } from '../features/authentication/userLocalStorageStore';

/**
 * PointShop Order History 클라이언트 클래스입니다.
 */
export default class PointMallOrderHistoryClient {
    private httpClient;

    constructor() {
        const authTokens = getAuthTokensFromLocalStorage();

        this.httpClient = axios.create({
            baseURL: import.meta.env.VITE_POINTSHOP_API_URL,
            headers: {
                Authorization: authTokens ? `Bearer ${authTokens.accessToken}` : '',
            },
        });
    }

    /**
     * PointMall 제품 주문 목록을 가져오는 메서드입니다.
     * @param requestData - PointMall 제품 주문 요청 데이터를 포함한 객체
     * @returns PointMall 주문 제품 목록의 응답 결과를 반환합니다.
     */
    async getPointMallOrderHistory(requestData: GetPointMallOrderHistoryApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };
        return this.httpClient.get('/order', config);
    }

    /**
     * PointMall 제품 주문 상세 정보를 가져오는 메서드입니다.
     * @param requestData - PointMall 제품 주문 요청 데이터를 포함한 객체
     * @returns PointMall 주문 제품 상세의 응답 결과를 반환합니다.
     */
    async getPointMallOrderHistoryDetail(requestData: GetPointMallOrderHistoryDetailApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };

        return this.httpClient.get(`/order/detail`, config);
    }

    /**
     * PointMall 제품 주문 취소하는 메서드입니다.
     * @param requestData - PointMall 제품 주문 취소 데이터를 포함한 객체
     * @returns PointMall 제품 주문 취소 응답 결과를 반환합니다.
     */
    async removePointMallOrder(requestData: RemovePointMallOrderApiRequest) {
        const config: AxiosRequestConfig = {
            data: requestData,
        };
        return this.httpClient.delete('/order', config);
    }
}
