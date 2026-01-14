import HomeClient from '../httpClient/HomeClient';
import { CarryOverPrize } from '../models/CarryOverPrize';
import { CurrentDrawInfo } from '../models/CurrentDrawInfo';
import { DrawVideo } from '../models/DrawVideo';
import { PreviousDrawInfo } from '../models/PreviousDrawInfo';
import { RemoteCarryOverPrize } from '../models/RemoteCarryOverPrize';
import { RemoteCurrentDrawInfo } from '../models/RemoteCurrentDrawInfo';
import { RemotePreviousDrawInfo } from '../models/RemotePreviousDrawInfo';

import { WinningNumber } from '../models/WinningNumber';

import {
    GetCarryOverPrizeResponse,
    GetCurrentDrawResponse,
    GetDrawVideosApiRequest,
    GetDrawVideosApiResponse,
    GetPreviousDrawResponse,
    GetWinningNumbersApiRequest,
    GetWinningNumbersApiResponse,
    RemoteDrawVideo,
    RemoteWinningNumbers,
} from './types';

export class HomeService {
    private apiClient: HomeClient;

    constructor(apiClient: HomeClient) {
        this.apiClient = apiClient;
    }

    /**
     * 당첨 번호 데이터를 가져옵니다.
     * @param page - 페이지 번호
     * @param offset - 오프셋
     * @returns Promise<WinningNumber[] | null> - 당첨 번호 데이터의 배열 또는 null
     */
    async getWinningNumbers(page: number, offset: number): Promise<WinningNumber[] | null> {
        const requestData: GetWinningNumbersApiRequest = { page, offset };
        const response: GetWinningNumbersApiResponse =
            await this.apiClient.getWinningNumbers(requestData);

        const remoteWinningNumbers: RemoteWinningNumbers[] = response.data;
        const winningNumbers = remoteWinningNumbers.map((data) => new WinningNumber(data));
        return winningNumbers;
    }
    /**
     * 추첨 비디오 데이터를 가져옵니다.
     * @param page - 페이지 번호
     * @param offset - 오프셋
     * @returns Promise<DrawVideo[] | null> - 추첨 비디오 데이터의 배열 또는 null
     */

    async getDrawVideos(page: number, offset: number): Promise<DrawVideo[] | null> {
        const requestData: GetDrawVideosApiRequest = { page, offset };
        const response: GetDrawVideosApiResponse = await this.apiClient.getDrawVideos(requestData);

        const remoteDrawVideos: RemoteDrawVideo[] = response.data;
        const drawVideos = remoteDrawVideos.map((data) => new DrawVideo(data));
        return drawVideos;
    }
    /**
     * 이전 추첨 정보를 가져옵니다.
     * @param game_idx - 게임 인덱스
     * @returns Promise<PreviousDrawInfo> - 이전 추첨 정보 객체
     */
    async getPreviousDrawInfo(game_idx: number): Promise<PreviousDrawInfo> {
        const response: GetPreviousDrawResponse =
            await this.apiClient.getPreviousDrawInfo(game_idx);
        const previousDrawInfo: RemotePreviousDrawInfo = response.data;

        return new PreviousDrawInfo(previousDrawInfo);
    }

    /**
     * 이월 상금 데이터를 가져옵니다.
     * @returns Promise<CarryOverPrize> - 이월 상금 객체
     */
    async getCarryOverPrizeMoney(): Promise<CarryOverPrize> {
        const response: GetCarryOverPrizeResponse = await this.apiClient.getCarryOverPrizeMoney();
        const carryOverPrizeMoney: RemoteCarryOverPrize = response.data;

        return new CarryOverPrize(
            carryOverPrizeMoney.drawIdx,
            carryOverPrizeMoney.carryoverPrizeAmount,
        );
    }

    /**
     * 현재 추첨 정보를 가져옵니다.
     * @param game_idx - 게임 인덱스
     * @returns Promise<CurrentDrawInfo> - 이전 추첨 정보 객체
     */
    async getCurrentDrawInfo(game_idx: number): Promise<CurrentDrawInfo> {
        const response: GetCurrentDrawResponse = await this.apiClient.getCurrentDrawInfo(game_idx);
        const currentDrawInfo: RemoteCurrentDrawInfo = response.data;

        return new CurrentDrawInfo(currentDrawInfo);
    }
}
