import { RemotePointHistoryItem } from './RemotePointHistoryItem';

export class PointHistory {
    #historyIdx: string;
    #points: number;
    #signType: '-' | '+';
    #transactionType: string;
    #transactionNo: string;
    #createdAt: Date;
    #pointType: string;
    #details: string;

    constructor(remotePointHistoryItem: RemotePointHistoryItem) {
        this.#historyIdx = remotePointHistoryItem.historyIdx;
        this.#points = parseFloat(remotePointHistoryItem.points);
        this.#signType = remotePointHistoryItem.signType as '-' | '+';
        this.#transactionType = remotePointHistoryItem.transactionType;
        this.#transactionNo = remotePointHistoryItem.transactionNo;
        this.#createdAt = new Date(remotePointHistoryItem.createdAt);
        this.#pointType = remotePointHistoryItem.pointType;
        this.#details = remotePointHistoryItem.details;
    }

    get historyIdx(): string {
        return this.#historyIdx;
    }

    get points(): string {
        return this.#points.toLocaleString();
    }

    get signType(): '-' | '+' {
        return this.#signType;
    }

    get transactionType(): string {
        return this.#transactionType;
    }

    get transactionNo(): string {
        return this.#transactionNo;
    }

    get createdAt(): Date {
        return this.#createdAt;
    }

    get pointType(): string {
        return this.#pointType.toUpperCase();
    }

    get details(): string {
        return this.#details;
    }
}
