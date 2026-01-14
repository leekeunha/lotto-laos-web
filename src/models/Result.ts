import { RemoteResult } from './RemoteResult';

export class Result {
    #drawIdx: string;
    #winningDate: string;
    #winningNumber: number[];
    #bonusNumber: string;
    #drawStartDate: string;
    #drawEndDate: string;
    #drawStatus: 'OPEN' | 'CLOSE';
    #lastDrawIdx: string;

    constructor(remoteResult: RemoteResult) {
        this.#drawIdx = remoteResult.drawIdx;
        this.#winningDate = remoteResult.winningDate;
        this.#winningNumber = remoteResult.winningNumber;
        this.#bonusNumber = remoteResult.bonusNumber;
        this.#drawStartDate = remoteResult.drawStartDate;
        this.#drawEndDate = remoteResult.drawEndDate;
        this.#drawStatus = remoteResult.drawStatus;
        this.#lastDrawIdx = remoteResult.lastDrawIdx;
    }

    get drawIdx(): string {
        return this.#drawIdx;
    }

    get winningDate(): string {
        return this.#winningDate;
    }

    get winningNumber(): number[] {
        return this.#winningNumber;
    }

    get bonusNumber(): string {
        return this.#bonusNumber;
    }

    get drawStartDate(): string {
        return this.#drawStartDate;
    }

    get drawEndDate(): string {
        return this.#drawEndDate;
    }

    get drawStatus(): 'OPEN' | 'CLOSE' {
        return this.#drawStatus;
    }

    get lastDrawIdx(): string {
        return this.#lastDrawIdx;
    }
}
