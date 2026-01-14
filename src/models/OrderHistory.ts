import { RemoteOrderHistory } from './RemoteOrderHistory';

export class OrderHistory {
    #orderIdx: string;
    #gameName: string;
    #drawIdx: string;
    #createdAt: Date;
    #totalPrice: number;
    #currencyType: string;
    #orderStatus: number;

    constructor(remoteOrderHistory: RemoteOrderHistory) {
        this.#orderIdx = remoteOrderHistory.orderIdx;
        this.#gameName = remoteOrderHistory.gameName;
        this.#drawIdx = remoteOrderHistory.drawIdx;
        this.#createdAt = remoteOrderHistory.createdAt;
        this.#totalPrice = remoteOrderHistory.totalPrice;
        this.#currencyType = remoteOrderHistory.currencyType;
        this.#orderStatus = remoteOrderHistory.orderStatus;
    }

    get orderIdx(): string {
        return this.#orderIdx;
    }

    get gameName(): string {
        return this.#gameName;
    }

    get drawIdx(): string {
        return this.#drawIdx;
    }

    get createdAt(): Date {
        return this.#createdAt;
    }

    get totalPrice(): number {
        return this.#totalPrice;
    }

    get currencyType(): string {
        return this.#currencyType;
    }

    get orderStatus(): number {
        return this.#orderStatus;
    }
}
