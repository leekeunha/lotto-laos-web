import {
    GetPointDetailApiRequest,
    GetPointHistoryApiRequest,
    TransferApiRequest,
} from './../services/types';
import axios, { AxiosRequestConfig } from 'axios';
import { getAuthTokensFromLocalStorage } from '../features/authentication/userLocalStorageStore';

/**
 * Point 클라이언트 클래스입니다.
 */
export default class PointClient {
    private httpClient;

    constructor() {
        const authTokens = getAuthTokensFromLocalStorage();

        this.httpClient = axios.create({
            baseURL: import.meta.env.VITE_POINT_API_URL,
            headers: {
                Authorization: authTokens ? `Bearer ${authTokens.accessToken}` : '',
            },
        });
    }

    async getMyPoints() {
        return this.httpClient.get('/mypoint');
    }

    //TODO : getPointHistory 파라미터 추가하기
    async getPointHistory(requestData: GetPointHistoryApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };
        return this.httpClient.get('/history', config);
    }

    async getPointDetail(requestData: GetPointDetailApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };

        return this.httpClient.get('/history-detail', config);
    }

    async transfer(requestData: TransferApiRequest) {
        console.log('transfer requestData:', requestData);
        return this.httpClient.post('/transfer', requestData);
    }

    async getUserInfoByPhone(memberId: string) {
        // const config: AxiosRequestConfig = {
        //     params: requestData,
        // };

        return this.httpClient.get(`/transfer-user/${memberId}`);
    }
}
