import { RemoteDistrictAddress } from './RemoteDistrictAddress.ts';

export class District {
    #value: string;
    #label: string;

    constructor(remoteDistrict: RemoteDistrictAddress) {
        this.#value = remoteDistrict.districtIdx;
        this.#label = remoteDistrict.districtName;
    }

    get value(): string {
        return this.#value.toString();
    }

    get label(): string {
        return this.#label;
    }
}
