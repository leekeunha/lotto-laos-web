import { RemoteDistrict } from './RemoteDistrict.ts';

export class District {
    #value: string;
    #label: string;

    constructor(remoteDistrict: RemoteDistrict) {
        this.#value = remoteDistrict.districtIdx;
        this.#label = remoteDistrict.districtName;
    }

    get value(): string {
        return this.#value;
    }

    get label(): string {
        return this.#label;
    }
}
