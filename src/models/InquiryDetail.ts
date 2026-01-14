import { RemoteInquiryDetail } from './RemoteInquiryDetail';

export class InquiryDetail {
    #inquiryIdx: string;
    #category: string;
    #title: string;
    #content: string;
    #answer: string | null;
    #memberType: string;
    #memberIdx: string;
    #adminMemberIdx: string | null;
    #status: string;
    #createdAt: Date;
    #answeredAt: Date | null;

    constructor(inquiryDetail: RemoteInquiryDetail) {
        this.#inquiryIdx = inquiryDetail.inquiryIdx;
        this.#category = inquiryDetail.category;
        this.#title = inquiryDetail.title;
        this.#content = inquiryDetail.content;
        this.#answer = inquiryDetail.answer;
        this.#memberType = inquiryDetail.memberType;
        this.#memberIdx = inquiryDetail.memberIdx;
        this.#adminMemberIdx = inquiryDetail.adminMemberIdx;
        this.#status = inquiryDetail.status;
        this.#createdAt = new Date(inquiryDetail.createdAt);
        this.#answeredAt = inquiryDetail.answeredAt ? new Date(inquiryDetail.answeredAt) : null;
    }

    get inquiryIdx(): string {
        return this.#inquiryIdx;
    }

    get category(): string {
        return this.#category;
    }

    get title(): string {
        return this.#title;
    }

    get content(): string {
        return this.#content;
    }

    get answer(): string | null {
        return this.#answer;
    }

    get memberType(): string {
        return this.#memberType;
    }

    get memberIdx(): string {
        return this.#memberIdx;
    }

    get adminMemberIdx(): string | null {
        return this.#adminMemberIdx;
    }

    get status(): string {
        return this.#status;
    }

    get createdAt(): Date {
        return this.#createdAt;
    }

    get answeredAt(): Date | null {
        return this.#answeredAt;
    }
}
