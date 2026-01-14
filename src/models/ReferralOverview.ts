import { RemoteReferralOverview } from './RemoteReferralOverview';

export class ReferralOverview {
    #referralCode: string;
    #referralTotalCount: number;
    #referralThisMonthCount: number;

    constructor(remoteReferralOverview: RemoteReferralOverview) {
        this.#referralCode = remoteReferralOverview.referralCode;
        this.#referralTotalCount = remoteReferralOverview.referredTotalCount;
        this.#referralThisMonthCount = remoteReferralOverview.referredThisMonthCount;
    }

    get referralCode(): string {
        return this.#referralCode;
    }

    get totalCount(): number {
        return this.#referralTotalCount;
    }

    get thisMonthCount(): number {
        return this.#referralThisMonthCount;
    }
}
