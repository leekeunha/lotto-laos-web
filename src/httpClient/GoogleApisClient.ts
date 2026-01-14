import axios from 'axios';

export interface GoogleUserInfo {
    id: string;
    email: string;
    given_name: string;
    family_name: string;
}

export class GoogleApisClient {
    private googleApiClient;
    constructor() {
        this.googleApiClient = axios.create({
            baseURL: import.meta.env.VITE_GOOGLE_API_URL,
        });
    }

    /**
     * Google API를 통해 사용자 정보를 가져오는 메서드입니다.
     * @param accessToken 사용자의 액세스 토큰
     * @returns GoogleUserInfo 객체를 반환합니다.
     */
    async getUserInfoFromGoogle(accessToken: string): Promise<GoogleUserInfo> {
        const response = await this.googleApiClient.get('/oauth2/v1/userinfo', {
            params: {
                access_token: accessToken,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json',
            },
        });
        return response.data;
    }
}
