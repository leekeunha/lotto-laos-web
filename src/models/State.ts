import { RemoteState } from './RemoteState';

export class State {
    #value: string;
    #label: string;

    constructor(remoteResult: RemoteState) {
        this.#value = remoteResult.stateIdx;
        this.#label = remoteResult.stateName;
    }

    get value(): string {
        return this.#value;
    }

    get label(): string {
        return this.#label;
    }
}
