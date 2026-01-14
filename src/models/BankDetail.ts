import { RemoteBankDetail } from './RemoteBankDetail';

export class BankDetail {
    readonly #bankName;
    readonly #holderName;
    readonly #accountNumber;

    constructor(remoteBanner: RemoteBankDetail) {
        this.#bankName = remoteBanner.bankName;
        this.#holderName = remoteBanner.holderName;
        this.#accountNumber = remoteBanner.accountNumber;
    }

    get bankName(): string {
        return this.#bankName;
    }

    get holderName(): string {
        return this.#holderName;
    }

    get accountNumber(): string {
        return this.#accountNumber;
    }
}
