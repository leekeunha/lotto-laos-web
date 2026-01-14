import { RemotePointMallOrderHistoryDetail } from './RemotePointMallOrderHistoryDetail';

export class PointMallOrderHistoryDetail {
    #productIdx: string;
    #orderIdx: number;
    #createdAt: Date;
    #imageUrl: string;
    #productName: string;
    #productDescription: string;
    #pointType: string;
    #productPrice: number;
    #quantity: number;
    #totalPoints: number;
    #status: string;

    constructor(remoteOrderHistoryDetail: RemotePointMallOrderHistoryDetail) {
        this.#productIdx = remoteOrderHistoryDetail.productIdx;
        this.#orderIdx = remoteOrderHistoryDetail.orderIdx;
        this.#createdAt = remoteOrderHistoryDetail.createdAt;
        this.#imageUrl = remoteOrderHistoryDetail.imageUrl;
        this.#productName = remoteOrderHistoryDetail.productName;
        this.#productDescription = remoteOrderHistoryDetail.productDescription;
        this.#pointType = remoteOrderHistoryDetail.pointType;
        this.#productPrice = remoteOrderHistoryDetail.productPrice;
        this.#quantity = remoteOrderHistoryDetail.quantity;
        this.#totalPoints = remoteOrderHistoryDetail.totalPoints;
        this.#status = remoteOrderHistoryDetail.status;
    }

    get productIdx(): string {
        return this.#productIdx;
    }

    get orderIdx(): number {
        return this.#orderIdx;
    }

    get createdAt(): Date {
        return this.#createdAt;
    }

    get imageUrl(): string {
        return this.#imageUrl;
    }

    get productName(): string {
        return this.#productName;
    }

    get productDescription(): string {
        return this.#productDescription;
    }

    get pointType(): string {
        return this.#pointType;
    }

    get productPrice(): number {
        return this.#productPrice;
    }

    get quantity(): number {
        return this.#quantity;
    }

    get totalPoints(): number {
        return this.#totalPoints;
    }

    get status(): string {
        return this.#status;
    }
}
