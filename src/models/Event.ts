import { RemoteEvent } from './RemoteEvent';

export class EventModel {
    #rowNum: string;
    #boardId: string;
    #boardIdx: string;
    #boardSubidx: number;
    #boardSubject: string;
    #notice: string;
    #memberType: string;
    #memberIdx: string;
    #memberEmail: string;
    #memberName: string;
    #hit: number;
    #useTag: string;
    #createdAt: Date;
    #operatingType: 'ALL' | 'INPROGRESS' | 'END';
    #imageUrl: string;
    #new: string;

    constructor(remoteEvent: RemoteEvent) {
        this.#rowNum = remoteEvent.rowNum;
        this.#boardId = remoteEvent.boardId;
        this.#boardIdx = remoteEvent.boardIdx;
        this.#boardSubidx = remoteEvent.boardSubIdx;
        this.#boardSubject = remoteEvent.boardSubject;
        this.#notice = remoteEvent.notice;
        this.#memberType = remoteEvent.memberType;
        this.#memberIdx = remoteEvent.memberIdx;
        this.#memberEmail = remoteEvent.memberEmail;
        this.#memberName = remoteEvent.memberName;
        this.#hit = remoteEvent.hit;
        this.#useTag = remoteEvent.useTag;
        this.#createdAt = new Date(remoteEvent.createdAt);
        this.#operatingType = remoteEvent.operatingType;
        this.#imageUrl = remoteEvent.imageUrl;
        // this.#webImageUrl = remoteEvent.webImageUrl;
        // this.#mobileImageUrl = remoteEvent.mobileImageUrl;
        // this.#webImageThumbUrl = remoteEvent.webImageThumbUrl;
        // this.#mobileImageThumbUrl = remoteEvent.mobileImageThumbUrl;
        this.#new = remoteEvent.new;
    }

    get rowNum(): string {
        return this.#rowNum;
    }

    get boardId(): string {
        return this.#boardId;
    }

    get boardIdx(): string {
        return this.#boardIdx;
    }

    get boardSubidx(): number {
        return this.#boardSubidx;
    }

    get boardSubject(): string {
        return this.#boardSubject;
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

    get operatingType(): string {
        return this.#operatingType;
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

    get new(): boolean {
        return this.#new === 'Y';
    }
}
