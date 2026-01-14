import { RemoteOrderHistoryDetail } from './RemoteOrderHistoryDetail';

export class OrderHistoryDetail {
    #serialNumber: string;
    #ticketIdx: string;
    #gameName: string;
    #drawIdx: string;
    #drawEndDate: Date;
    #linePrice: number;
    #currencyType: string;
    #totalLineCount: number;
    #paymentMethod: string;
    #totalPrice: number;
    #orderStatus: number;
    #createdAt: string;

    constructor(remoteOrderHistoryDetail: RemoteOrderHistoryDetail) {
        this.#serialNumber = remoteOrderHistoryDetail.serialNumber;
        this.#ticketIdx = remoteOrderHistoryDetail.ticketIdx;
        this.#gameName = remoteOrderHistoryDetail.gameName;
        this.#drawIdx = remoteOrderHistoryDetail.drawIdx;
        this.#drawEndDate = new Date(remoteOrderHistoryDetail.drawEndDate);
        this.#linePrice = remoteOrderHistoryDetail.linePrice;
        this.#currencyType = remoteOrderHistoryDetail.currencyType;
        this.#totalLineCount = Number(remoteOrderHistoryDetail.totalLineCount);
        this.#paymentMethod = remoteOrderHistoryDetail.paymentMethod;
        this.#totalPrice = Number(remoteOrderHistoryDetail.totalPrice);
        this.#orderStatus = remoteOrderHistoryDetail.orderStatus;
        this.#createdAt = remoteOrderHistoryDetail.createdAt;
    }

    get serialNumber(): string {
        return this.#serialNumber;
    }

    get ticketIdx(): string {
        return this.#ticketIdx;
    }

    get gameName(): string {
        return this.#gameName;
    }

    get drawIdx(): string {
        return this.#drawIdx;
    }

    get drawEndDate(): Date {
        return this.#drawEndDate;
    }

    get linePrice(): number {
        return this.#linePrice;
    }

    get currencyType(): string {
        return this.#currencyType;
    }

    get totalLineCount(): number {
        return this.#totalLineCount;
    }

    get paymentMethod(): string {
        return this.#paymentMethod;
    }

    get totalPrice(): number {
        return this.#totalPrice;
    }

    get orderStatus(): number {
        return this.#orderStatus;
    }

    get createdAt(): string {
        return this.#createdAt;
    }
}
