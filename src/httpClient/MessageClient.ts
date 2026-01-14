import axios, { AxiosRequestConfig } from 'axios';
import { GetMessagesApiRequest } from '../services/types';
import { getAuthTokensFromLocalStorage } from '../features/authentication/userLocalStorageStore';

/**
 * message 클라이언트 클래스입니다.
 */
export default class MessageClient {
    private httpClient;

    constructor() {
        const authTokens = getAuthTokensFromLocalStorage();

        this.httpClient = axios.create({
            baseURL: import.meta.env.VITE_MESSAGE_API_URL,
            headers: {
                Authorization: authTokens ? `Bearer ${authTokens.accessToken}` : '',
            },
        });
    }

    /**
     * 메시지 목록을 가져오는 메서드입니다.
     * @param requestData - 메시지 요청 데이터를 포함한 객체
     * @returns 메시지 목록의 응답 결과를 반환합니다.
     */
    async getMessages(requestData: GetMessagesApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };
        return this.httpClient.get('/list', config);
    }

    /**
     * 메시지 상세 정보를 가져오는 메서드입니다.
     * @param requestData - 메시지 요청 데이터를 포함한 객체
     * @returns 메시지 상세의 응답 결과를 반환합니다.
     */
    async getMessageDetail(requestData: any) {
        return this.httpClient.get(`/read/${requestData.messageIdx}`);
    }

    /**
     * 메시지 읽음 처리를 하는 메서드입니다. (isRead: true)
     * @param messageIdx - 읽음 처리할 메시지의 인덱스 값
     * @returns 메시지 읽음 처리 응답 결과를 반환합니다.
     */
    async readMessage(messageIdx: number) {
        return this.httpClient.put(`/read/${messageIdx}`);
    }
}
