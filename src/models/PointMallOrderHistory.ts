import { capitalize } from '../utils/util';
import { RemotePointMallOrderHistory } from './RemotePointMallOrderHistory';

export class PointMallOrderHistory {
    #imageUrl: string;
    #productName: string;
    #quantity: number;
    #status: string;
    #createdAt: Date;
    #orderIdx: string;

    constructor(remotePointMallOrderHistory: RemotePointMallOrderHistory) {
        this.#imageUrl = remotePointMallOrderHistory.imageUrl;
        this.#productName = remotePointMallOrderHistory.productName;
        this.#quantity = remotePointMallOrderHistory.quantity;
        this.#status = remotePointMallOrderHistory.status;
        this.#createdAt = remotePointMallOrderHistory.createdAt;
        this.#orderIdx = remotePointMallOrderHistory.orderIdx;
    }

    get imageUrl(): string {
        return this.#imageUrl;
    }

    get productName(): string {
        return this.#productName;
    }

    get quantity(): number {
        return this.#quantity;
    }

    get status(): string {
        return capitalize(this.#status);
    }

    get createdAt(): Date {
        return this.#createdAt;
    }

    get orderIdx(): string {
        return this.#orderIdx;
    }
}
