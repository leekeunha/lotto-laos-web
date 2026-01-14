import { RemotePointDetail } from './RemotePointDetail';

export class PointDetail {
    #transactionNo: string;
    #pointType: string;
    #createdAt: Date;
    #transactionType: string;
    #memo: string;
    #amount: number;

    constructor(remotePointDetail: RemotePointDetail) {
        this.#transactionNo = remotePointDetail.transactionNo;
        this.#pointType = remotePointDetail.pointType;
        this.#createdAt = new Date(remotePointDetail.createdAt);
        this.#transactionType = remotePointDetail.transactionType;
        this.#memo = remotePointDetail.memo;
        this.#amount = remotePointDetail.amount;
    }

    get transactionNo(): string {
        return this.#transactionNo;
    }

    get pointType(): string {
        return this.#pointType;
    }

    get createdAt(): Date {
        return this.#createdAt;
    }

    get transactionType(): string {
        return this.#transactionType;
    }

    get memo(): string {
        return this.#memo;
    }

    get amount(): number {
        return this.#amount;
    }
}
