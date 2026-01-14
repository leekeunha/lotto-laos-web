import {
    GetOrderHistoryApiRequest,
    GetOrderHistoryApiResponse,
    GetOrderHistoryDetailApiRequest,
} from './types';
import OrderHistoryClient from '../httpClient/OrderHistoryClient';
import { OrderHistory } from '../models/OrderHistory';
import { RemoteOrderHistory } from '../models/RemoteOrderHistory';
import { OrderHistoryDetail } from '../models/OrderHistoryDetail';
import { RemoteOrderHistoryDetail } from '../models/RemoteOrderHistoryDetail';

// OrderHistoryService 클래스는 order history 데이터를 가져오기 위한 서비스입니다.
export class OrderHistoryService {
    private orderHistoryClient: OrderHistoryClient;

    // OrderHistoryService 생성자입니다. OrderHistoryClient 인스턴스를 받습니다.
    constructor(apiClient: OrderHistoryClient) {
        this.orderHistoryClient = apiClient;
    }

    /**
     * Order History 데이터를 가져옵니다.
     * @param page_rows - 페이지 당 행 수 (기본값: 10)
     * @param page_number - 페이지 번호 (기본값: 1)
     * @returns Promise<OrderHistory[]> - OrderHistory 데이터의 배열
     */
    async getOrderHistory(
        pageRows: number,
        pageNumber: number,
        sortOrder: string,
        gameSelectFilter?: number,
    ): Promise<OrderHistory[]> {
        const requestData: GetOrderHistoryApiRequest = {
            pageRows,
            pageNumber,
            sortOrder,
            gameSelectFilter,
        };

        const apiResponse: GetOrderHistoryApiResponse =
            await this.orderHistoryClient.getOrderHistory(requestData);

        const remoteResults: RemoteOrderHistory[] = apiResponse.data.items;
        const resultData = remoteResults.map((data) => new OrderHistory(data));

        return resultData;
    }

    async getOrderHistoryDetail(orderIdx: string): Promise<OrderHistoryDetail> {
        const requestData: GetOrderHistoryDetailApiRequest = {
            orderIdx,
        };

        const response = await this.orderHistoryClient.getOrderHistoryDetail(requestData);
        const remoteOrderHistoryDetail: RemoteOrderHistoryDetail = response.data;
        return new OrderHistoryDetail(remoteOrderHistoryDetail);
    }
}
