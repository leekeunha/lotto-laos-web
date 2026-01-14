import { ReferralVerificationResponse } from '../features/authentication/types';
import ReferralClient from '../httpClient/ReferralClient';
import { ReferralOverview } from '../models/ReferralOverview';
import { Referrer } from '../models/Referrer';
import { RemoteReferrer } from '../models/RemoteReferrer';
import {
    PostReferralCodeApiRequest,
    VerifyReferralCodeApiResponse,
    GetReferrersApiRequest,
} from './types';

export class ReferralService {
    private referralClient: ReferralClient;

    constructor(apiClient: ReferralClient) {
        this.referralClient = apiClient;
    }

    async checkReferralCodeExistence(referralCode: string): Promise<ReferralVerificationResponse> {
        const response: VerifyReferralCodeApiResponse =
            await this.referralClient.checkReferralCodeExistence({
                referralCode,
            });

        return response.data;
    }

    async postReferralCode(
        requestData: PostReferralCodeApiRequest,
    ): Promise<ReferralVerificationResponse> {
        const response: VerifyReferralCodeApiResponse =
            await this.referralClient.postReferralCode(requestData);

        return response.data;
    }

    async getReferralOverview(): Promise<ReferralOverview> {
        const response = await this.referralClient.getReferralOverview();

        return new ReferralOverview(response.data);
    }

    async getReferrers(pageNumber: number, pageRows: number, sortOrder = ''): Promise<Referrer[]> {
        const requestData: GetReferrersApiRequest = {
            pageNumber,
            pageRows,
            sortOrder,
        };

        const response = await this.referralClient.getReferrers(requestData);
        const remoteReferrers: RemoteReferrer[] = response.data.items;

        const referrers: Referrer[] = remoteReferrers.map(
            (remoteReferrer) => new Referrer(remoteReferrer),
        );

        return referrers;
    }
}
