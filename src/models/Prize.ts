import { RemotePrize } from './RemotePrize';

export class Prize {
    #ticketIdx: string;
    #gameName: string;
    #drawIdx: string;
    #claimedStatus: 'Expired' | 'Claimed';
    #createdAt: Date;
    #prizePrice: number | null;
    #currencyType: 'Points';
    #lineStatus: number;
    #winningRank: number;
    #lineIdx: number;
    #serialNumber: string;

    constructor(remotePrize: RemotePrize) {
        this.#ticketIdx = remotePrize.ticketIdx;
        this.#gameName = remotePrize.gameName;
        this.#drawIdx = remotePrize.drawIdx;
        this.#claimedStatus = remotePrize.claimedStatus;
        this.#createdAt = new Date(remotePrize.createdAt);
        this.#prizePrice = remotePrize.prizePrice;
        this.#currencyType = remotePrize.currencyType;
        this.#lineStatus = remotePrize.lineStatus;
        this.#winningRank = remotePrize.winningRank;
        this.#lineIdx = remotePrize.lineIdx;

        this.#serialNumber = remotePrize.serialNumber;
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

    get claimedStatus(): 'Expired' | 'Claimed' | 'Unclaimed' {
        return this.#claimedStatus;
    }

    get createdAt(): Date {
        return this.#createdAt;
    }

    get prizePrice(): number | null {
        return this.#prizePrice;
    }

    get currencyType(): 'Points' {
        return this.#currencyType;
    }

    get lineStatus(): number {
        return this.#lineStatus;
    }

    get lineIdx(): number {
        return this.#lineIdx;
    }

    get winningRank(): number {
        return this.#winningRank;
    }

    get serialNumber(): string {
        return this.#serialNumber;
    }
}
