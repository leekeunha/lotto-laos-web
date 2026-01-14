import { RemoteLineInTicket } from './RemoteLineInTicket';

export class LineInTicket {
    #lineIdx: string;
    #issueNumber: number[];
    #prizeAmount: number;
    #status: string;
    #prizeAmountCurrency: string;

    constructor(remoteLineInTicket: RemoteLineInTicket) {
        this.#lineIdx = remoteLineInTicket.lineIdx;
        this.#issueNumber = remoteLineInTicket.issueNumber;
        this.#prizeAmount = remoteLineInTicket.prizeAmount;
        this.#status = remoteLineInTicket.status;
        this.#prizeAmountCurrency = remoteLineInTicket.prizeAmountCurrency;
    }

    get lineIdx(): string {
        return this.#lineIdx;
    }

    get issueNumber(): number[] {
        return this.#issueNumber;
    }

    get prizeAmount(): number {
        return this.#prizeAmount;
    }

    get status(): string {
        return this.#status;
    }

    get prizeAmountCurrency(): string {
        return this.#prizeAmountCurrency;
    }
}
