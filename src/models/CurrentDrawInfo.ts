import { RemoteCurrentDrawInfo } from './RemoteCurrentDrawInfo';

export class CurrentDrawInfo {
    #currentDrawIdx: number;
    #currentDrawEndDate: Date | null;
    #currentDrawStatus: string;
    #currentDrawEndDateString: string;

    constructor(remoteCurrentDrawInfo: RemoteCurrentDrawInfo) {
        this.#currentDrawIdx = remoteCurrentDrawInfo.drawIdx;
        this.#currentDrawEndDate = remoteCurrentDrawInfo.drawEndDate
            ? new Date(remoteCurrentDrawInfo.drawEndDate)
            : null;
        this.#currentDrawStatus = remoteCurrentDrawInfo.drawStatus;
        this.#currentDrawEndDateString = remoteCurrentDrawInfo.drawEndDate;
    }

    get currentDrawIdx(): number {
        return this.#currentDrawIdx;
    }

    get currentDrawEndDate(): Date | null {
        return this.#currentDrawEndDate;
    }

    get currentDrawStatus(): number[] {
        return this.#currentDrawStatus?.split('|').map(Number);
    }

    get currentDrawEndDateString(): string {
        return this.#currentDrawEndDateString;
    }
}
