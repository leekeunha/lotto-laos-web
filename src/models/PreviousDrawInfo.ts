import { RemotePreviousDrawInfo } from './RemotePreviousDrawInfo';

export class PreviousDrawInfo {
    #previousDrawIdx: number;
    #previousWinningDate: Date | null;
    #previousWinningNumber: string;
    #previousVideoUrl: string;

    constructor(remotePreviousDrawInfo: RemotePreviousDrawInfo) {
        this.#previousDrawIdx = remotePreviousDrawInfo.previousDrawIdx;
        this.#previousWinningDate = remotePreviousDrawInfo.previousWinningDate
            ? new Date(remotePreviousDrawInfo.previousWinningDate)
            : null;
        this.#previousWinningNumber = remotePreviousDrawInfo.previousWinningNumber;
        this.#previousVideoUrl = remotePreviousDrawInfo.previousVideoUrl;
    }

    get previousDrawIdx(): number {
        return this.#previousDrawIdx;
    }

    get previousWinningDate(): Date | null {
        return this.#previousWinningDate;
    }

    get previousWinningNumber(): number[] {
        return this.#previousWinningNumber?.split('|').map(Number);
    }

    get previousVideoUrl(): string {
        return this.#previousVideoUrl;
    }
}
