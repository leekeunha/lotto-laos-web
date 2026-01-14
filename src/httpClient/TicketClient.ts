import axios, { AxiosRequestConfig } from 'axios';
import { BuyLinesApiRequest, GetTicketsApiRequest } from '../services/types';
import { getAuthTokensFromLocalStorage } from '../features/authentication/userLocalStorageStore';

/**
 * 공지 클라이언트 클래스입니다.
 */
export default class TicketClient {
    private httpClient;

    constructor() {
        const authTokens = getAuthTokensFromLocalStorage();

        this.httpClient = axios.create({
            baseURL: import.meta.env.VITE_TICKET_API_URL,
            headers: {
                Authorization: authTokens ? `Bearer ${authTokens.accessToken}` : '',
            },
        });
    }

    /**
     * 티켓 목록을 가져오는 메서드입니다.
     * @param requestData - 티켓 요청 데이터를 포함한 객체
     * @returns 티켓 목록의 응답 결과를 반환합니다.
     */
    async getTickets(requestData: GetTicketsApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };
        return this.httpClient.get('/draw-list/my', config);
    }

    async getTicketDetail(ticketIdx: string) {
        return this.httpClient.get(`/my/${ticketIdx}`);
    }

    async buyLines(requestData: BuyLinesApiRequest) {
        return this.httpClient.post('buy', requestData);
    }

    async getPaymentReceipt(ticketIdx: number) {
        return this.httpClient.get(`buy-result/my/${ticketIdx}`);
    }
}
