import { RemoteBanner } from './RemoteBanner';

export class Banner {
    #bannerIdx: string;
    #bannerName: string;
    #external: number;
    #pageUrl: string;
    #displayOrderNo: string;
    #displayStartDate: Date;
    #displayEndDate: Date;
    #mobileImageUrl: string;

    constructor(remoteBanner: RemoteBanner) {
        this.#bannerIdx = remoteBanner.bannerIdx;
        this.#bannerName = remoteBanner.bannerName;
        this.#external = remoteBanner.external;
        this.#pageUrl = remoteBanner.pageUrl;
        this.#displayOrderNo = remoteBanner.displayOrderNo;
        this.#displayStartDate = new Date(remoteBanner.displayStartDate);
        this.#displayEndDate = new Date(remoteBanner.displayEndDate);
        this.#mobileImageUrl = remoteBanner.mobileImageUrl;
    }

    get bannerIdx(): string {
        return this.#bannerIdx;
    }

    get bannerName(): string {
        return this.#bannerName;
    }

    get external(): number {
        return this.#external;
    }

    get pageUrl(): string {
        return this.#pageUrl;
    }

    get displayOrderNo(): string {
        return this.#displayOrderNo;
    }

    get displayStartDate(): Date {
        return this.#displayStartDate;
    }

    get displayEndDate(): Date {
        return this.#displayEndDate;
    }

    get mobileImageUrl(): string {
        return this.#mobileImageUrl;
    }
}
