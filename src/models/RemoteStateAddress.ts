import { RemoteDistrictAddress } from './RemoteDistrictAddress';

export type RemoteStateAddress = {
    stateIdx: string;
    stateName: string;
    districts: RemoteDistrictAddress[];
};

