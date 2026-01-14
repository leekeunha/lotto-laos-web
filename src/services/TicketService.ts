import TicketClient from '../httpClient/TicketClient';
import DrawInfo from '../models/DrawInfo';
import { LineInTicket } from '../models/LineInTicket';
import { PaymentReceipt } from '../models/PaymentReceipt';
import { RemoteDrawInfo } from '../models/RemoteDrawInfo';
import { RemoteLineInTicket } from '../models/RemoteLineInTicket';
import { RemotePaymentReceipt } from '../models/RemotePaymentReceipt';
import { TicketDetail } from '../models/TicketDetail';
import { LineInPayment } from '../pages/types';
import { BuyLinesApiRequest, GetTicketsApiRequest, GetTicketsApiResponse } from './types';

export class TicketService {
    private ticketClient: TicketClient;

    constructor(apiClient: TicketClient) {
        this.ticketClient = apiClient;
    }

    async getDrawInfos(
        pageNumber: number,
        pageRows: number,
        sortOrder = '',
        gameSelectFilter = '',
    ): Promise<DrawInfo[]> {
        const requestData: GetTicketsApiRequest = {
            pageNumber,
            pageRows,
            sortOrder,
            gameSelectFilter,
        };

        const apiResponse: GetTicketsApiResponse = await this.ticketClient.getTickets(requestData);

        const remoteDrawInfos: RemoteDrawInfo[] = apiResponse.data.items;
        const drawInfos = remoteDrawInfos.map((data) => new DrawInfo(data));
        return drawInfos;
    }

    async getTicketDetail(ticketIdx: string): Promise<TicketDetail> {
        const response = await this.ticketClient.getTicketDetail(ticketIdx);

        const remoteLineInTickets: RemoteLineInTicket[] = response.data.lines;

        const lineInTickets = remoteLineInTickets.map((data) => new LineInTicket(data));

        const ticketDetail = new TicketDetail({
            ...response.data,
            lines: lineInTickets,
        });

        return ticketDetail;
    }

    async buyLines(
        gameIdx: number,
        drawIdx: number,
        issueNumber: LineInPayment[],
    ): Promise<number> {
        const requestData: BuyLinesApiRequest = { gameIdx, drawIdx, issueNumber };

        const apiResponse = await this.ticketClient.buyLines(requestData);
        const ticketIdx: number = apiResponse.data.ticketIdx;

        return ticketIdx;
    }

    async getPaymentReceipt(gameIdx: number): Promise<PaymentReceipt> {
        const apiResponse = await this.ticketClient.getPaymentReceipt(gameIdx);
        const receipt: RemotePaymentReceipt = apiResponse.data;

        return new PaymentReceipt(receipt);
    }
}
