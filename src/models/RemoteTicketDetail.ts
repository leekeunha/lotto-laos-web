import { LineInTicket } from './LineInTicket';

export type RemoteTicketDetail = {
    serialNumber: string;
    purchasedDate: string;
    lottoGame: string;
    draw: string;
    drawDate: string;
    winningLines: number;
    prize1st: number;
    prize1stCurrency: string;
    prize2nd: number;
    prize2ndCurrency: string;
    prize3rd: number;
    prize3rdCurrency: string;
    prize4th: number;
    prize4thCurrency: string;
    totalCashPrize: number;
    totalCashPrizeCurrency: string;
    totalPointPrize: number;
    totalPointPrizeCurrency: string;
    lines: LineInTicket[];
    pricePerLine: number;
    numberOfLines: number;
    paymentMethod: string;
    totalAmount: number;
    ticketPaymentCurrencyType: string;
    winningNumber: number[];
};
