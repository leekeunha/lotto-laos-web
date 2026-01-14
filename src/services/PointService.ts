import PointClient from '../httpClient/PointClient';
import MonthlyHistoryItem from '../models/MonthlyHistoryItem';
import { MyPoints } from '../models/MyPoints';
import { PointDetail } from '../models/PointDetail';
import { RemoteMyPoints } from '../models/RemoteMyPoints';
import { RemotePointDetail } from '../models/RemotePointDetail';
import User from '../models/User';

import {
    GetMyPointsApiResponse,
    GetPointDetailApiRequest,
    GetPointHistoryApiRequest,
    GetPointHistoryApiResponse,
    GetUserInfoByPhoneApiResponse,
    RemoteMonthlyHistoryItem,
    RemoteUser,
    TransferApiRequest,
    TransferApiResponse,
} from './types';

// PointService 클래스는 Point 데이터를 가져오기 위한 서비스입니다.
export class PointService {
    private pointClient: PointClient;

    constructor(apiClient: PointClient) {
        this.pointClient = apiClient;
    }

    /**
     * Point 데이터를 가져옵니다.
     * @param pageRows - 페이지 당 행 수
     * @param pageNumber - 페이지 번호
     * @param q - 검색어
     * @returns Promise<MyPoints> -
     */
    async getMyPoints(): Promise<MyPoints> {
        const apiResponse: GetMyPointsApiResponse = await this.pointClient.getMyPoints();

        const remotePrizes: RemoteMyPoints = apiResponse.data;
        return new MyPoints(remotePrizes);
    }

    async getUserInfoByPhone(memberId: string): Promise<User> {
        const apiResponse: GetUserInfoByPhoneApiResponse =
            await this.pointClient.getUserInfoByPhone(memberId);

        const remoteUser: RemoteUser = apiResponse.data;
        return new User(remoteUser);
    }

    async getPointHistory(
        pageNumber: number,
        pageRows: number,
        useType = '',
        pointType = '',
        sortOrder = '',
    ): Promise<MonthlyHistoryItem[]> {
        const requestData: GetPointHistoryApiRequest = {
            pageNumber,
            pageRows,
            useType,
            pointType,
            sortOrder,
        };
        const apiResponse: GetPointHistoryApiResponse =
            await this.pointClient.getPointHistory(requestData);

        const remoteMonthlyHistoryItems: RemoteMonthlyHistoryItem[] = apiResponse.data.items;

        const pointHistoryItems = remoteMonthlyHistoryItems.map(
            (data) => new MonthlyHistoryItem(data),
        );
        return pointHistoryItems;
    }

    async getPointDetail(historyIdx: number): Promise<PointDetail> {
        const requestData: GetPointDetailApiRequest = { historyIdx };
        const apiResponse = await this.pointClient.getPointDetail(requestData);

        const remotePointDetail: RemotePointDetail = apiResponse.data;

        return new PointDetail(remotePointDetail);
    }

    //Response type 아직 안 정해짐
    async transfer(requestData: TransferApiRequest): Promise<string> {
        const apiResponse: TransferApiResponse = await this.pointClient.transfer(requestData);

        return apiResponse.data.historyIdx;
    }
}
