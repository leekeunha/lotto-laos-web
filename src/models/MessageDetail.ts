import { RemoteMessageDetail } from './RemoteMessageDetail';

export class MessageDetail {
    #category: string;
    #category_code: string;
    #createdAt: Date;
    #message: string;
    #messageIdx: number;
    #title: string;

    constructor(remoteMessageDetail: RemoteMessageDetail) {
        this.#category = remoteMessageDetail.category;
        this.#category_code = remoteMessageDetail.category_code;
        this.#createdAt = remoteMessageDetail.createdAt;
        this.#message = remoteMessageDetail.message;
        this.#messageIdx = remoteMessageDetail.messageIdx;
        this.#title = remoteMessageDetail.title;
    }

    get category(): string {
        return this.#category;
    }

    get category_code(): string {
        return this.#category_code;
    }

    get createdAt(): Date {
        return this.#createdAt;
    }

    get message(): string {
        return this.#message;
    }

    get messageIdx(): number {
        return this.#messageIdx;
    }

    get title(): string {
        return this.#title;
    }
}
