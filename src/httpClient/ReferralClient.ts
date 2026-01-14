import axios, { AxiosRequestConfig } from 'axios';
import { GetReferrersApiRequest, PostReferralCodeApiRequest } from '../services/types';

export default class ReferralClient {
    private httpClient;

    constructor() {
        this.httpClient = axios.create({
            baseURL: import.meta.env.VITE_REFERRAL_API_URL,
        });
    }

    /**
     * 추천 Member 정보(referralCode) 유무를 확인한다.
     * @param referralCode - 추천인 코드
     * @returns 추천 코드의 응답 결과를 반환합니다.
     */
    async checkReferralCodeExistence(params: { referralCode: string }) {
        return this.httpClient.get(`existence/${params.referralCode}`);
    }

    /**
     * 추천인 코드를 등록 한다.
     * @param params - memberIdx, referralMemberIdx referralCode를 포함한 객체
     * @returns 추천인 등록 확인의 응답 결과를 반환합니다.
     */
    async postReferralCode(requestData: PostReferralCodeApiRequest) {
        return this.httpClient.post('', requestData);
    }

    async getReferralOverview() {
        return this.httpClient.get('');
    }

    async getReferrers(requestData: GetReferrersApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };

        return this.httpClient.get('list', config);
    }
}
