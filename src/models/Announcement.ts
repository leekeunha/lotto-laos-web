import { RemoteAnnouncement } from './RemoteAnnouncement';

export class Announcement {
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
    #boardContents?: string;
    #reply?: [];
    #new?: string;

    constructor(remoteAnnouncement: RemoteAnnouncement) {
        this.#rowNum = remoteAnnouncement.rowNum;
        this.#boardId = remoteAnnouncement.boardId;
        this.#boardIdx = remoteAnnouncement.boardIdx;
        this.#boardSubidx = remoteAnnouncement.boardSubIdx;
        this.#boardSubject = remoteAnnouncement.boardSubject;
        this.#notice = remoteAnnouncement.notice;
        this.#memberType = remoteAnnouncement.memberType;
        this.#memberIdx = remoteAnnouncement.memberIdx;
        this.#memberEmail = remoteAnnouncement.memberEmail;
        this.#memberName = remoteAnnouncement.memberName;
        this.#hit = remoteAnnouncement.hit;
        this.#useTag = remoteAnnouncement.useTag;
        this.#createdAt = new Date(remoteAnnouncement.createdAt);
        this.#boardContents = remoteAnnouncement.boardContents;
        this.#reply = remoteAnnouncement.reply;
        this.#new = remoteAnnouncement.new;
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

    get boardContents(): string | undefined {
        return this.#boardContents;
    }

    get reply(): [] | undefined {
        return this.#reply;
    }

    get new(): boolean {
        return this.#new === 'Y' ? true : false;
    }
}
