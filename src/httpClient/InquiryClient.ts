import axios, { AxiosRequestConfig } from 'axios';
import { AddInquiryApiRequest, GetInquiresApiRequest } from '../services/types';
import { getAuthTokensFromLocalStorage } from '../features/authentication/userLocalStorageStore';

/**
 * 1:1 문의 클라이언트 클래스입니다.
 */
export default class InquiryClient {
    private httpClient;

    constructor() {
        const authTokens = getAuthTokensFromLocalStorage();

        this.httpClient = axios.create({
            baseURL: import.meta.env.VITE_INQUIRY_API_URL,
            headers: {
                Authorization: authTokens ? `Bearer ${authTokens.accessToken}` : '',
            },
        });
    }

    /**
     * 1:1 문의 목록을 가져옵니다.
     * @param requestData - 1:1 문의 목록 요청을 위한 파라미터
     * @returns 1:1 문의 목록을 반환합니다.
     */
    async getInquiries(requestData: GetInquiresApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };
        return this.httpClient.get('my', config);
    }

    async addInquiry(requestData: AddInquiryApiRequest) {
        return this.httpClient.post('', requestData);
    }

    async getInquiryDetail(inquiry_idx: number) {
        return this.httpClient.get(`/${inquiry_idx}`);
    }
}
