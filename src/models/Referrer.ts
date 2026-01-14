import { RemoteReferrer } from './RemoteReferrer';

export class Referrer {
    #createdAt: Date;
    #referralMemberId: string;
    #referralMemberName: string;

    constructor(remoteReferrer: RemoteReferrer) {
        this.#createdAt = new Date(remoteReferrer.createdAt);
        this.#referralMemberId = remoteReferrer.referralMemberId;
        this.#referralMemberName = remoteReferrer.referralMemberName;
    }

    get createdAt(): Date {
        return this.#createdAt;
    }

    get referralMemberId(): string {
        return this.#referralMemberId;
    }
    get referralMemberName(): string {
        return this.#referralMemberName;
    }
}
