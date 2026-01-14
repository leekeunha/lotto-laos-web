import { RemoteMyPoints } from './RemoteMyPoints';

export class MyPoints {
    #goldPoints: number;
    #silverPoints: number;

    constructor(remoteEvent: RemoteMyPoints) {
        this.#goldPoints = remoteEvent.goldPoints;
        this.#silverPoints = remoteEvent.silverPoints;
    }

    get goldPoints(): number {
        return this.#goldPoints;
    }

    get silverPoints(): number {
        return this.#silverPoints;
    }
}
