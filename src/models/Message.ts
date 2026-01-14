import { RemoteMessage } from './RemoteMessage';

export class Message {
    #category: string;
    #category_code: string;
    #createdAt: Date;
    #message: string;
    #messageIdx: number;
    #isRead: boolean;
    #title: string;

    constructor(remoteMessage: RemoteMessage) {
        this.#category = remoteMessage.category;
        this.#category_code = remoteMessage.category_code;
        this.#createdAt = remoteMessage.createdAt;
        this.#message = remoteMessage.message;
        this.#messageIdx = remoteMessage.messageIdx;
        this.#isRead = remoteMessage.isRead;
        this.#title = remoteMessage.title;
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

    get isRead(): boolean {
        return this.#isRead;
    }

    get title(): string {
        return this.#title;
    }
}
