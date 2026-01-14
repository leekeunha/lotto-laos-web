import axios from 'axios';
import { getAuthTokensFromLocalStorage } from '../features/authentication/userLocalStorageStore';

/**
 * game 클라이언트 클래스입니다.
 */
export default class GameClient {
    private httpClient;

    constructor() {
        const authTokens = getAuthTokensFromLocalStorage();

        this.httpClient = axios.create({
            baseURL: import.meta.env.VITE_GAME_API_URL,
            headers: {
                Authorization: authTokens ? `Bearer ${authTokens.accessToken}` : '',
            },
        });
    }

    /**
     * 게임 목록을 가져오는 메서드입니다.
     * @param requestData - 게임 요청 데이터를 포함한 객체
     * @returns 게임 목록의 응답 결과를 반환합니다.
     */
    async getGames() {
        return this.httpClient.get('');
    }
}
