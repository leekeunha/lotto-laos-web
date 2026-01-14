import { RemotePaymentReceipt } from './RemotePaymentReceipt';

export class PaymentReceipt {
    #serialNumber: string;
    #purchaseDate: Date;
    #lottoGame: string;
    #draw: string;
    #drawDate: Date;
    #pricePerLine: number;
    #numberOfLines: number;
    #paymentMethod: string;
    #totalPrice: number;

    constructor(remotePaymentReceipt: RemotePaymentReceipt) {
        this.#serialNumber = remotePaymentReceipt.serialNumber;
        this.#purchaseDate = new Date(remotePaymentReceipt.purchaseDate);
        this.#lottoGame = remotePaymentReceipt.lottoGame;
        this.#draw = remotePaymentReceipt.draw;
        this.#drawDate = new Date(remotePaymentReceipt.drawDate);
        this.#pricePerLine = remotePaymentReceipt.pricePerLine;
        this.#numberOfLines = remotePaymentReceipt.numberOfLines;
        this.#paymentMethod = remotePaymentReceipt.paymentMethod;
        this.#totalPrice = remotePaymentReceipt.totalPrice;
    }

    get serialNumber(): string {
        return this.#serialNumber;
    }

    get purchaseDate(): Date {
        return this.#purchaseDate;
    }

    get lottoGame(): string {
        return this.#lottoGame;
    }

    get draw(): string {
        return this.#draw;
    }

    get drawDate(): Date {
        return this.#drawDate;
    }

    get pricePerLine(): number {
        return this.#pricePerLine;
    }

    get numberOfLines(): number {
        return this.#numberOfLines;
    }

    get paymentMethod(): string {
        return this.#paymentMethod;
    }

    get totalPrice(): number {
        return this.#totalPrice;
    }
}
