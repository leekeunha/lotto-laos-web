import axios, { AxiosRequestConfig } from 'axios';
import { GetDrawVideosApiRequest, GetWinningNumbersApiRequest } from '../services/types';

/**
 * Home 화면 클라이언트 클래스입니다.
 */
export default class HomeClient {
    private homeClient;

    constructor() {
        this.homeClient = axios.create({
            baseURL: import.meta.env.VITE_HOME_API_URL,
        });
    }

    /**
     * 당첨 번호를 가져오는 메서드입니다.
     * @param requestData GetWinningNumbersApiRequest 타입의 요청 데이터
     * @returns AxiosResponse 객체를 반환합니다.
     */
    async getWinningNumbers(requestData: GetWinningNumbersApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };
        return this.homeClient.get('winning-number', config);
    }

    /**
     * 추첨 비디오를 가져오는 메서드입니다.
     * @param requestData GetDrawVideosApiRequest 타입의 요청 데이터
     * @returns AxiosResponse 객체를 반환합니다.
     */
    async getDrawVideos(requestData: GetDrawVideosApiRequest) {
        const config: AxiosRequestConfig = {
            params: requestData,
        };
        return this.homeClient.get('draw-videos', config);
    }

    /**
     * 이전 추첨 정보를 가져오는 메서드입니다.
     * @param gameIdx 게임 인덱스 번호
     * @returns AxiosResponse 객체를 반환합니다.
     */
    async getPreviousDrawInfo(gameIdx: number) {
        return this.homeClient.get(`previous-game-info/${gameIdx}`);
    }

    /**
     * 누적 상금 정보를 가져오는 메서드입니다.
     * @returns AxiosResponse 객체를 반환합니다.
     */
    async getCarryOverPrizeMoney() {
        return this.homeClient.get(`carryover-prize`);
    }

    /**
     * 현재 추첨 정보를 가져오는 메서드입니다.
     * @param gameIdx 게임 인덱스 번호
     * @returns AxiosResponse 객체를 반환합니다.
     */
    async getCurrentDrawInfo(gameIdx: number) {
        return this.homeClient.get(`current-game-info/${gameIdx}`);
    }
}
