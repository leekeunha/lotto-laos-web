import axios, { AxiosRequestConfig } from 'axios';
import { GetPrizesApiRequest } from '../services/types';
import { getAuthTokensFromLocalStorage } from '../features/authentication/userLocalStorageStore';

/**
 * 상금 클라이언트 클래스입니다.
 */
export default class PrizeClient {
    private httpClient;

    constructor() {
        const authTokens = getAuthTokensFromLocalStorage();

        this.httpClient = axios.create({
            baseURL: import.meta.env.VITE_PRIZE_API_URL,
            headers: {
                Authorization: authTokens ? `Bearer ${authTokens.accessToken}` : '',
            },
        });
    }

    async getPrizes(requestData: GetPrizesApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };
        return this.httpClient.get('/my', config);
    }

    async getPrizeDetail(lineIdx: number) {
        return this.httpClient.get(`/${lineIdx}/my`);
    }
}
