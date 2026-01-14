import axios from 'axios';
import { SendVerificationCodeApiRequest, VerifyCodeApiRequest } from '../services/types';

/**
 * 이메일 검증 클라이언트 클래스입니다.
 */
export default class VerifyClient {
    private httpClient;

    constructor() {
        this.httpClient = axios.create({
            baseURL: import.meta.env.VITE_VERIFY_API_URL,
        });
    }

    async sendVerificationCode(requestData: SendVerificationCodeApiRequest) {
        return this.httpClient.post('send-verify-code', requestData);
    }

    /**
     * 검증 코드를 확인하는 요청을 보냅니다.
     * @param params - 이메일과 검증 코드를 포함한 객체
     * @returns 검증 코드 확인의 응답 결과를 반환합니다.
     */
    async verifyCode(requestData: VerifyCodeApiRequest) {
        return this.httpClient.post('send-verify-code-check', requestData);
    }
}
