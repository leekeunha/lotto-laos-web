import { RemoteAnnouncementDetail } from './RemoteAnnouncementDetail';

export class AnnouncementDetail {
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
    #reply: string[];

    constructor(remoteAnnouncementDetail: RemoteAnnouncementDetail) {
        this.#boardIdx = remoteAnnouncementDetail.boardIdx;
        this.#boardSubidx = remoteAnnouncementDetail.boardSubIdx;
        this.#notice = remoteAnnouncementDetail.notice;
        this.#memberType = remoteAnnouncementDetail.memberType;
        this.#memberIdx = remoteAnnouncementDetail.memberIdx;
        this.#memberEmail = remoteAnnouncementDetail.memberEmail;
        this.#memberName = remoteAnnouncementDetail.memberName;
        this.#hit = remoteAnnouncementDetail.hit;
        this.#useTag = remoteAnnouncementDetail.useTag;
        this.#createdAt = new Date(remoteAnnouncementDetail.createdAt);
        this.#boardSubject = remoteAnnouncementDetail.boardSubject;
        this.#boardContents = remoteAnnouncementDetail.boardContents;
        this.#reply = remoteAnnouncementDetail.reply;
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

    get reply(): string[] {
        return this.#reply;
    }
}
