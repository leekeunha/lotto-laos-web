import axios, { AxiosRequestConfig } from 'axios';
import {
    BuyProductApiRequest,
    GetProductDetailApiRequest,
    GetProductsApiRequest,
} from '../services/types';
import { getAuthTokensFromLocalStorage } from '../features/authentication/userLocalStorageStore';

/**
 * product 클라이언트 클래스입니다.
 */
export default class ProductClient {
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
     * 제품 목록을 가져오는 메서드입니다.
     * @param requestData - 제품 요청 데이터를 포함한 객체
     * @returns 제품 목록의 응답 결과를 반환합니다.
     */
    async getProducts(requestData: GetProductsApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };
        return this.httpClient.get('', config);
    }

    /**
     * 제품 상세 정보를 가져오는 메서드입니다.
     * @param requestData - 제품 요청 데이터를 포함한 객체
     * @returns 제품 상세 정보의 응답 결과를 반환합니다.
     */
    async getProductDetail(requestData: GetProductDetailApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };
        return this.httpClient.get('/detail', config);
    }

    /**
     * 제품을 구매하는 메서드입니다.
     * @param requestData - 구매 요청 데이터를 포함한 객체
     * @returns 제품 구매 정보의 응답 결과를 반환합니다.
     */
    async buyProduct(requestData: BuyProductApiRequest) {
        return this.httpClient.post('purchase', requestData);
    }
}
