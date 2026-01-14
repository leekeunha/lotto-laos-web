import axios from 'axios';
import { getHeadersWithToken } from '../global/getHeadersWithToken';

/**
 * 주소 클라이언트 클래스입니다.
 */
export default class AddressClient {
    private httpClient;

    constructor() {
        this.httpClient = axios.create({
            baseURL: import.meta.env.VITE_ADDRESS_API_URL,
        });
    }

    async getAddresses() {
        const headers = getHeadersWithToken();

        return this.httpClient.get('', { headers });
    }

    async getStates() {
        const headers = getHeadersWithToken();

        return this.httpClient.get('state', { headers });
    }

    async getDistricts(stateIdx: string) {
        const headers = getHeadersWithToken();

        return this.httpClient.get(`district/${stateIdx}`, { headers });
    }
}
