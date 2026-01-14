import { District } from './DistrictAdress';
import { RemoteStateAddress } from './RemoteStateAddress';

export class StateDistrict {
    #value: string;
    #label: string;
    #districts: District[];

    constructor(remoteResult: RemoteStateAddress) {
        this.#value = remoteResult.stateIdx;
        this.#label = remoteResult.stateName;
        this.#districts = remoteResult.districts.map((data) => new District(data));
    }

    get value(): string {
        return this.#value.toString();
    }

    get label(): string {
        return this.#label;
    }

    get districts(): District[] {
        return this.#districts;
    }
}
