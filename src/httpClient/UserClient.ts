import { VerifyCurrentPasswordApiRequest } from './../services/types';
import axios from 'axios';
import {
    ChangeLanguageApiRequst,
    ChangePasswordApiRequest,
    CheckDuplicateApiRequest,
    SaveFcmTokenApiRequest,
    sendResetPasswordCodeApiRequst,
    SignInApiRequest,
    SignupApiRequest,
} from '../services/types';
import { getHeadersWithToken } from '../global/getHeadersWithToken';

/**
 * 사용자 클라이언트 클래스입니다.
 */
export default class UserClient {
    private httpClient;

    constructor() {
        this.httpClient = axios.create({
            baseURL: import.meta.env.VITE_USER_API_URL,
        });
    }

    /**
     * 가입 요청을 보냅니다.
     * @param requestData - 이메일과 비밀번호를 포함한 객체
     * @returns 가입 요청 결과를 반환합니다.
     */
    async signup(requestData: SignupApiRequest) {
        return this.httpClient.post('join', requestData);
    }

    /**
     * 로그인 요청을 보냅니다.
     * @param requestData - 이메일과 비밀번호를 포함한 객체
     * @returns 로그인 요청 결과를 반환합니다.
     */
    async signin(requestData: SignInApiRequest) {
        return this.httpClient.post('login', requestData);
    }

    async sendResetPasswordEmail(requestData: sendResetPasswordCodeApiRequst) {
        return this.httpClient.post('pass-change-check', requestData);
    }

    async changePassword(requestData: ChangePasswordApiRequest) {
        const headers = getHeadersWithToken();
        return this.httpClient.put('my-password-change', requestData, { headers });
    }

    async changeUserLanguageInServer(requestData: ChangeLanguageApiRequst) {
        const headers = getHeadersWithToken();
        return this.httpClient.put('lang-setup', requestData, { headers });
    }

    async getCurrentUserInfo() {
        const headers = getHeadersWithToken();
        return this.httpClient.get('my-info', { headers });
    }

    async checkDuplicate(requestData: CheckDuplicateApiRequest) {
        return this.httpClient.post('identifer-check', requestData);
    }

    async saveFcmToken(requestData: SaveFcmTokenApiRequest) {
        const headers = getHeadersWithToken();
        return this.httpClient.post('save-fcm-token', requestData, { headers });
    }

    async editProfile(requestData: FormData) {
        const headers = getHeadersWithToken();
        return this.httpClient.put('my-info', requestData, { headers });
    }

    async verifyCurrentPassword(requestData: VerifyCurrentPasswordApiRequest) {
        const headers = getHeadersWithToken();
        return this.httpClient.post('password-check', requestData, { headers });
    }
}
