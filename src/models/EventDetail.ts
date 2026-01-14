import { RemoteEventDetail } from './RemoteEventDetail';

export class EventDetail {
    #boardIdx: string;
    #boardSubidx: number;
    #notice: string;
    #memberType: string;
    #memberIdx: string;
    #memberEmail: string;
    #memberName: string;
    #hit: number;
    #useTag: string;
    #createdAt: Date;
    #boardSubject: string;
    #boardContents: string;
    #operatingType: string;
    #reply: string[];
    #imageUrl: string;

    constructor(remoteEventDetail: RemoteEventDetail) {
        this.#boardIdx = remoteEventDetail.boardIdx;
        this.#boardSubidx = remoteEventDetail.boardSubIdx;
        this.#notice = remoteEventDetail.notice;
        this.#memberType = remoteEventDetail.memberType;
        this.#memberIdx = remoteEventDetail.memberIdx;
        this.#memberEmail = remoteEventDetail.memberEmail;
        this.#memberName = remoteEventDetail.memberName;
        this.#hit = remoteEventDetail.hit;
        this.#useTag = remoteEventDetail.useTag;
        this.#createdAt = new Date(remoteEventDetail.createdAt);
        this.#boardSubject = remoteEventDetail.boardSubject;
        this.#boardContents = remoteEventDetail.boardContents;
        this.#operatingType = remoteEventDetail.operatingType;
        this.#reply = remoteEventDetail.reply;
        this.#imageUrl = remoteEventDetail.imageUrl;
    }

    get boardIdx(): string {
        return this.#boardIdx;
    }

    get boardSubidx(): number {
        return this.#boardSubidx;
    }

    get notice(): string {
        return this.#notice;
    }

    get memberType(): string {
        return this.#memberType;
    }

    get memberIdx(): string {
        return this.#memberIdx;
    }

    get memberEmail(): string {
        return this.#memberEmail;
    }

    get memberName(): string {
        return this.#memberName;
    }

    get hit(): number {
        return this.#hit;
    }

    get useTag(): string {
        return this.#useTag;
    }

    get createdAt(): Date {
        return this.#createdAt;
    }

    get boardSubject(): string {
        return this.#boardSubject;
    }

    get boardContents(): string {
        return this.#boardContents;
    }

    get operatingType(): string {
        return this.#operatingType;
    }

    get reply(): string[] {
        return this.#reply;
    }

    get imageUrl(): string {
        return this.#imageUrl;
    }

    // get webImageUrl(): string {
    //     return this.#webImageUrl;
    // }

    // get mobileImageUrl(): string {
    //     return this.#mobileImageUrl;
    // }

    // get webImageThumbUrl(): string {
    //     return this.#webImageThumbUrl;
    // }

    // get mobileImageThumbUrl(): string {
    //     return this.#mobileImageThumbUrl;
    // }
}
