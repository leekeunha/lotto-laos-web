import axios, { AxiosRequestConfig } from 'axios';
import {
    ActivateBankApiRequest,
    AddBankApiRequest,
    EditBankApiRequest,
    GetMyBanksApiRequest,
} from '../services/types';
import { getAuthTokensFromLocalStorage } from '../features/authentication/userLocalStorageStore';

/**
 * Bank 클라이언트 클래스입니다.
 */
export default class BankClient {
    private httpClient;

    constructor() {
        const authTokens = getAuthTokensFromLocalStorage();

        this.httpClient = axios.create({
            baseURL: import.meta.env.VITE_BANK_API_URL,
            headers: {
                Authorization: authTokens ? `Bearer ${authTokens.accessToken}` : '',
            },
        });
    }

    /**
     *  내 은행 목록을 가져오는 메서드입니다.
     * @param requestData - 은행 목록 요청 데이터를 포함한 객체
     * @returns 은행 목록의 응답 결과를 반환합니다.
     */
    async getMyBanks(requestData: GetMyBanksApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };

        return this.httpClient.get('my', config);
    }

    /**
     *  전체 은행 목록을 가져오는 메서드입니다.
     * @returns 전체 은행 목록의 응답 결과를 반환합니다.
     */
    async getBanks() {
        return this.httpClient.get('');
    }

    /**
     *  은행 계좌를 활성화하는 메서드입니다.
     * @param requestData - 활성화할 계좌의 ID와 활성화 상태를 포함한 객체
     * @returns 활성화된 계좌의 응답 결과를 반환합니다.
     */
    async activateBank(requestData: ActivateBankApiRequest) {
        return await this.httpClient.put('active', requestData);
    }

    /**
     *  특정 은행 계좌를 삭제하는 메서드입니다.
     * @param memberBankIdx - 삭제할 은행 계좌의 고유 식별자
     * @returns 삭제된 계좌의 응답 결과를 반환합니다.
     */
    async removeBank(memberBankIdx: string) {
        return await this.httpClient.delete(`/${memberBankIdx}`);
    }

    async addBank(requestData: AddBankApiRequest) {
        return await this.httpClient.post('', requestData);
    }

    async editBank(requestData: EditBankApiRequest) {
        return await this.httpClient.put('', requestData);
    }

    async getBankDetail(memberBankIdx: string) {
        return await this.httpClient.get(`/my/${memberBankIdx}`);
    }
}
