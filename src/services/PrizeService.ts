import { DESC } from '../../constants/global';
import PrizeClient from '../httpClient/PrizeClient';
import { Prize } from '../models/Prize';
import { RemotePrize } from '../models/RemotePrize';
import { GetPrizesApiRequest, GetPrizesApiResponse } from './types';

// PrizeService 클래스는 공지사항 데이터를 가져오기 위한 서비스입니다.
export class PrizeService {
    private prizeClient: PrizeClient;

    // PrizeService 생성자입니다. PrizeClient 인스턴스를 받습니다.
    constructor(apiClient: PrizeClient) {
        this.prizeClient = apiClient;
    }

    /**
     * 공지사항 데이터를 가져옵니다.
     * @param pageRows - 페이지 당 행 수 (기본값: 10)
     * @param pageNumber - 페이지 번호 (기본값: 1)
     * @param q - 검색어
     * @returns Promise<DrawInfo[]> - 티켓 데이터의 배열
     */
    async getPrizes(
        pageNumber: number,
        pageRows: number,
        sortOrder = DESC,
        gameSelectFilter = '',
        paymentSelectFilter = '',
        claimedSelectFilter = '',
    ): Promise<Prize[]> {
        const requestData: GetPrizesApiRequest = {
            pageNumber,
            pageRows,
            sortOrder,
            gameSelectFilter,
            paymentSelectFilter,
            claimedSelectFilter,
        };

        const apiResponse: GetPrizesApiResponse = await this.prizeClient.getPrizes(requestData);

        const remotePrizes: RemotePrize[] = apiResponse.data.items;
        const prizes = remotePrizes.map((data) => new Prize(data));
        return prizes;
    }

    // async (lineIdx: number): Promise<Prize[]> {
    async getPrizeDetail(lineIdx: number): Promise<Prize> {
        const apiResponse = await this.prizeClient.getPrizeDetail(lineIdx);
        const remotePrize: RemotePrize = apiResponse.data;
        return new Prize(remotePrize);
    }

    // async getAnnouncementDetail(requestData: GetAnnouncementDetailApiRequest) {
    //     const config: AxiosRequestConfig = {
    //         params: requestData,
    //     };
    //     return this.httpClient.get('Notice-Info', config);
    // }
}
