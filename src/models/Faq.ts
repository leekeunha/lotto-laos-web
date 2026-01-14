import { RemoteFaq } from './RemoteFaq';

export class Faq {
    #faqIdx: string;
    #category: string;
    #categoryCode: string;
    #question: string;
    #answer: string;
    #createdAt: Date;

    constructor(remoteFaq: RemoteFaq) {
        this.#faqIdx = remoteFaq.faqIdx;
        this.#category = remoteFaq.category;
        this.#categoryCode = remoteFaq.categoryCode;
        this.#question = remoteFaq.question;
        this.#answer = remoteFaq.answer;
        this.#createdAt = new Date(remoteFaq.createdAt);
    }

    get faqIdx(): string {
        return this.#faqIdx;
    }

    get category(): string {
        return this.#category;
    }

    get categoryCode(): string {
        return this.#categoryCode;
    }

    get question(): string {
        return this.#question;
    }

    get answer(): string {
        return this.#answer;
    }

    get createdAt(): Date {
        return this.#createdAt;
    }
}
