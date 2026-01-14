import VerifyEmailClient from '../httpClient/VerifyEmailClient';
import {
    SendVerificationCodeApiRequest,
    SendVerificationCodeApiResponse,
    VerifyCodeApiRequest,
    VerifyCodeApiResponse,
} from './types';

export class VerifyPhoneService {
    private verifyEmailClient: VerifyEmailClient;

    constructor(apiClient: VerifyEmailClient) {
        this.verifyEmailClient = apiClient;
    }

    /**
     * 인증 코드를 이메일로 전송합니다.
     * @param member_email - 사용자의 이메일
     * @returns Promise<string> - 전송된 인증 코드 결과
     */
    async sendVerificationCode(requestData: SendVerificationCodeApiRequest): Promise<string> {
        const response: SendVerificationCodeApiResponse =
            await this.verifyEmailClient.sendVerificationCode(requestData);

        return response.data.Result;
    }

    /**
     * 인증 코드를 검증합니다.
     * @param member_email - 사용자의 이메일
     * @param verificationCode - 인증 코드
     * @returns Promise<boolean> - 인증 결과 (성공 여부)
     */
    async verifyCode(requestData: VerifyCodeApiRequest): Promise<boolean> {
        const response: VerifyCodeApiResponse =
            await this.verifyEmailClient.verifyCode(requestData);

        return response.data.Result;
    }
}
