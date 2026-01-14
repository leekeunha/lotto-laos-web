import { RemoteInquiry } from './RemoteInquiry';

export class Inquiry {
    readonly #idx: string;
    readonly #category: string;
    readonly #categoryCode: string;
    readonly #title: string;
    readonly #question: string;
    readonly #status: string;
    readonly #inquiryAt: Date;
    readonly #inquiryStatus: string;
    readonly #answer: string;
    readonly #answeredAt: string;

    constructor(RemoteInquiry: RemoteInquiry) {
        this.#idx = RemoteInquiry.idx;
        this.#category = RemoteInquiry.category;
        this.#categoryCode = RemoteInquiry.categoryCode;
        this.#title = RemoteInquiry.title;
        this.#question = RemoteInquiry.content;
        this.#status = RemoteInquiry.status;
        this.#inquiryAt = new Date(RemoteInquiry.inquiryDate);
        this.#inquiryStatus = RemoteInquiry.inquiryStatus;
        this.#answer = RemoteInquiry.answer;
        this.#answeredAt = RemoteInquiry.answeredDate;
    }

    get idx(): string {
        return this.#idx;
    }

    get category(): string {
        return this.#category;
    }

    get categoryCode(): string {
        return this.#categoryCode;
    }

    get title(): string {
        return this.#title;
    }

    get content(): string {
        return this.#question;
    }

    get status(): string {
        return this.#status;
    }

    get inquiryAt(): Date {
        return new Date(this.#inquiryAt);
    }

    get inquiryStatus(): string {
        return this.#inquiryStatus;
    }

    get answer(): string | null {
        return this.#answer;
    }

    get answeredAt(): Date {
        return new Date(this.#answeredAt);
    }
}
