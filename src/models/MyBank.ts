import { RemoteMyBank } from './RemoteMyBank';

export class MyBank {
    //TODO
    readonly #memberBankIdx: string;
    readonly #active: boolean;
    readonly #bankName: string;
    readonly #accountNumber: string;
    readonly #createdAt: Date;

    constructor(remoteMyBank: RemoteMyBank) {
        this.#memberBankIdx = remoteMyBank.memberBankIdx;
        this.#active = remoteMyBank.active;
        this.#bankName = remoteMyBank.bankName;
        this.#accountNumber = remoteMyBank.accountNumber;
        this.#createdAt = new Date(remoteMyBank.createdAt);
    }

    get memberBankIdx(): string {
        return this.#memberBankIdx;
    }

    get active(): boolean {
        return this.#active;
    }

    get bankName(): string {
        return this.#bankName;
    }

    get accountNumber(): string {
        return this.#accountNumber;
    }

    get createdAt(): Date {
        return this.#createdAt;
    }
}
