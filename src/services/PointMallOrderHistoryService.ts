import {
    GetPointMallOrderHistoryApiRequest,
    GetPointMallOrderHistoryApiResponse,
    GetPointMallOrderHistoryDetailApiRequest,
    RemovePointMallOrderApiRequest,
} from './types';
import { PointMallOrderHistory } from '../models/PointMallOrderHistory';
import PointMallOrderHistoryClient from '../httpClient/PointMallOrderHistoryClient';
import { RemotePointMallOrderHistory } from '../models/RemotePointMallOrderHistory';
import { PointMallOrderHistoryDetail } from '../models/PointMallOrderHistoryDetail';
import { RemotePointMallOrderHistoryDetail } from '../models/RemotePointMallOrderHistoryDetail';

// PointMallOrderHistoryService 클래스는 pointmall order history 데이터를 가져오기 위한 서비스입니다.
export class PointMallOrderHistoryService {
    private pointMallOrderHistoryClient: PointMallOrderHistoryClient;

    // PointMallOrderHistoryService 생성자입니다. pointMallOrderHistoryClient 인스턴스를 받습니다.
    constructor(apiClient: PointMallOrderHistoryClient) {
        this.pointMallOrderHistoryClient = apiClient;
    }

    /**
     * PointMall Order History 데이터를 가져옵니다.
     * @param pageRows - 페이지 당 행 수 (기본값: 10)
     * @param pageNumber - 페이지 번호 (기본값: 1)
     * @param sortOrder - 정렬 순서 (기본값: DESC)
     * @returns Promise<PointMallOrderHistory[]> - pointMallOrderHistory 데이터의 배열
     */
    async getPointMallOrderHistory(
        pageRows: number,
        pageNumber: number,
        sortStatus: string,
        sortOrder: string,
    ): Promise<PointMallOrderHistory[]> {
        const requestData: GetPointMallOrderHistoryApiRequest = {
            pageRows,
            pageNumber,
            sortStatus,
            sortOrder,
        };

        const apiResponse: GetPointMallOrderHistoryApiResponse =
            await this.pointMallOrderHistoryClient.getPointMallOrderHistory(requestData);

        const remoteResults: RemotePointMallOrderHistory[] = apiResponse.data;
        const resultData = remoteResults.map((data) => new PointMallOrderHistory(data));

        return resultData;
    }

    async getPointMallOrderHistoryDetail(orderIdx: number): Promise<PointMallOrderHistoryDetail> {
        const requestData: GetPointMallOrderHistoryDetailApiRequest = {
            orderIdx,
        };

        const response =
            await this.pointMallOrderHistoryClient.getPointMallOrderHistoryDetail(requestData);

        const remotePointMallOrderHistoryDetail: RemotePointMallOrderHistoryDetail = response.data;

        return new PointMallOrderHistoryDetail(remotePointMallOrderHistoryDetail);
    }

    async removePointMallOrder(orderIdx: number): Promise<boolean> {
        const requestData: RemovePointMallOrderApiRequest = {
            orderIdx,
        };
        const response = await this.pointMallOrderHistoryClient.removePointMallOrder(requestData);

        const isSuccess: boolean = response.data;

        return isSuccess;
    }
}
