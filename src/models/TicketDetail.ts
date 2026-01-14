import { LineInTicket } from './LineInTicket';
import { RemoteTicketDetail } from './RemoteTicketDetail';

export class TicketDetail {
    #serialNumber: string;
    #draw: string;
    #lottoGame: string;
    #totalPrice: number;
    #pricePerLine: number;
    #numberOfLines: number;
    #purchasedDate: Date;
    #drawDate: Date;
    #winningNumber: number[];
    #lines: LineInTicket[];
    #winningLines: number;
    #prize1st: number;
    #prize1stCurrency: string;
    #prize2nd: number;
    #prize2ndCurrency: string;
    #prize3rd: number;
    #prize3rdCurrency: string;
    #prize4th: number;
    #prize4thCurrency: string;
    #totalCashPrize: number;
    #totalCashPrizeCurrency: string;
    #totalPointPrize: number;
    #totalPointPrizeCurrency: string;
    #paymentMethod: string;
    #totalAmount: number;
    #ticketPaymentCurrencyType: string;

    constructor(response: RemoteTicketDetail) {
        this.#serialNumber = response.serialNumber;
        this.#draw = response.draw;
        this.#lottoGame = response.lottoGame;
        this.#totalPrice = response.totalAmount;
        this.#pricePerLine = response.pricePerLine;
        this.#numberOfLines = response.numberOfLines;
        this.#purchasedDate = new Date(response.purchasedDate);
        this.#drawDate = new Date(response.drawDate);
        this.#winningNumber = response.winningNumber;
        this.#lines = response.lines.map((line) => new LineInTicket(line));
        this.#winningLines = response.winningLines;
        this.#prize1st = response.prize1st;
        this.#prize1stCurrency = response.prize1stCurrency;
        this.#prize2nd = response.prize2nd;
        this.#prize2ndCurrency = response.prize2ndCurrency;
        this.#prize3rd = response.prize3rd;
        this.#prize3rdCurrency = response.prize3rdCurrency;
        this.#prize4th = response.prize4th;
        this.#prize4thCurrency = response.prize4thCurrency;
        this.#totalCashPrize = response.totalCashPrize;
        this.#totalCashPrizeCurrency = response.totalCashPrizeCurrency;
        this.#totalPointPrize = response.totalPointPrize;
        this.#totalPointPrizeCurrency = response.totalPointPrizeCurrency;
        this.#paymentMethod = response.paymentMethod;
        this.#totalAmount = response.totalAmount;
        this.#ticketPaymentCurrencyType = response.ticketPaymentCurrencyType;
    }

    get serialNumber(): string {
        return this.#serialNumber;
    }

    get draw(): string {
        return this.#draw;
    }

    get lottoGame(): string {
        return this.#lottoGame;
    }

    get totalPrice(): number {
        return this.#totalPrice;
    }

    get pricePerLine(): number {
        return this.#pricePerLine;
    }

    get numberOfLines(): number {
        return this.#numberOfLines;
    }

    get purchasedDate(): Date {
        return this.#purchasedDate;
    }

    get drawDate(): Date {
        return this.#drawDate;
    }

    get winningNumber(): number[] {
        return this.#winningNumber;
    }

    get lines(): LineInTicket[] {
        return this.#lines;
    }

    get winningLines(): number {
        return this.#winningLines;
    }

    get prize1st(): number {
        return this.#prize1st;
    }

    get prize1stCurrency(): string {
        return this.#prize1stCurrency;
    }

    get prize2nd(): number {
        return this.#prize2nd;
    }

    get prize2ndCurrency(): string {
        return this.#prize2ndCurrency;
    }

    get prize3rd(): number {
        return this.#prize3rd;
    }

    get prize3rdCurrency(): string {
        return this.#prize3rdCurrency;
    }

    get prize4th(): number {
        return this.#prize4th;
    }

    get prize4thCurrency(): string {
        return this.#prize4thCurrency;
    }

    get totalCashPrize(): number {
        return this.#totalCashPrize;
    }

    get totalCashPrizeCurrency(): string {
        return this.#totalCashPrizeCurrency;
    }

    get totalPointPrize(): number {
        return this.#totalPointPrize;
    }

    get totalPointPrizeCurrency(): string {
        return this.#totalPointPrizeCurrency;
    }

    get paymentMethod(): string {
        return this.#paymentMethod;
    }

    get totalAmount(): number {
        return this.#totalAmount;
    }

    get ticketPaymentCurrencyType(): string {
        return this.#ticketPaymentCurrencyType;
    }
}
