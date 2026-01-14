import AddressClient from '../httpClient/AddressClient';
import { District } from '../models/District';
import { RemoteStateAddress } from '../models/RemoteStateAddress';
import { RemoteDistrict } from '../models/RemoteDistrict';
import { RemoteState } from '../models/RemoteState';
import { State } from '../models/State';
import { StateDistrict } from '../models/StateDistrict';

export class AddressService {
    private addressClient: AddressClient;

    constructor(apiClient: AddressClient) {
        this.addressClient = apiClient;
    }

    async getStates(): Promise<State[]> {
        const apiResponse = await this.addressClient.getStates();
        const remoteStates: RemoteState[] = apiResponse.data;
        const result = remoteStates.map((data) => new State(data));

        return result;
    }

    async getDistricts(id: string): Promise<District[]> {
        const apiResponse = await this.addressClient.getDistricts(id);
        const remoteDistricts: RemoteDistrict[] = apiResponse.data;
        const result = remoteDistricts.map((data) => new District(data));

        return result;
    }

    async getAddresses(): Promise<StateDistrict[]> {
        const apiResponse = await this.addressClient.getAddresses();
        const remoteStateAddresses: RemoteStateAddress[] = apiResponse.data;

        const result = remoteStateAddresses.map((data) => new StateDistrict(data));

        return result;
    }
}
