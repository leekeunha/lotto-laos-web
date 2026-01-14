import { TicketInfo } from '../services/types';
import { RemoteDrawInfo } from './RemoteDrawInfo';

export default class DrawInfo {
    readonly #drawIdx: string;
    readonly #lines: TicketInfo[];

    constructor(remoteDrawInfo: RemoteDrawInfo) {
        this.#drawIdx = remoteDrawInfo.drawIdx;
        this.#lines = remoteDrawInfo.lines;
    }

    get drawIdx(): string {
        return this.#drawIdx;
    }

    get lines(): TicketInfo[] {
        return this.#lines;
    }
}
