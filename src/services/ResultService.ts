import ResultClient from '../httpClient/ResultClient';
import { RemoteResult } from '../models/RemoteResult';
import { Result } from '../models/Result';
import { GetResultApiRequest, GetResultApiResponse, GetResultDetailApiRequest } from './types';
import { ResultDetail } from '../models/ResultDetail';
import { RemoteResultDetail } from '../models/RemoteResultDetail';

// ResultService 클래스는 Result 데이터를 가져오기 위한 서비스입니다.
export class ResultService {
    private resultClient: ResultClient;

    // ResultService 생성자입니다. resultClient 인스턴스를 받습니다.
    constructor(apiClient: ResultClient) {
        this.resultClient = apiClient;
    }

    /**
     * Result 데이터를 가져옵니다.
     * @param page_rows - 페이지 당 행 수 (기본값: 10)
     * @param page_number - 페이지 번호 (기본값: 1)
     * @returns Promise<Announcement[]> - Result 데이터의 배열
     */
    async getResult(
        pageRows: number,
        pageNumber: number,
        gameIdx: number,
        sortOrder: string,
    ): Promise<Result[]> {
        const requestData: GetResultApiRequest = {
            pageRows,
            pageNumber,
            gameIdx,
            sortOrder,
        };

        const apiResponse: GetResultApiResponse = await this.resultClient.getResult(requestData);

        const remoteResults: RemoteResult[] = apiResponse.data.items;
        const resultData = remoteResults.map((data) => new Result(data));

        return resultData;
    }

    async getResultDetail(drawIdx: string): Promise<ResultDetail> {
        const requestData: GetResultDetailApiRequest = {
            drawIdx,
        };

        const response = await this.resultClient.getResultDetail(requestData);
        const remoteResultDetail: RemoteResultDetail = response.data;
        return new ResultDetail(remoteResultDetail);
    }
}
