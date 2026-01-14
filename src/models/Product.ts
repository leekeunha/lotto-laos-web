import { RemoteProduct } from './RemoteProduct';

export class Product {
    #productIdx: string;
    #imageUrl: string;
    #productName: string;
    #pointType: string;
    #productPrice: number;
    #sortOrder: string;

    constructor(remoteProduct: RemoteProduct) {
        this.#productIdx = remoteProduct.productIdx;
        this.#imageUrl = remoteProduct.imageUrl;
        this.#productName = remoteProduct.productName;
        this.#pointType = remoteProduct.pointType;
        this.#productPrice = remoteProduct.productPrice;
        this.#sortOrder = remoteProduct.sortOrder;
    }

    get productIdx(): string {
        return this.#productIdx;
    }

    get imageUrl(): string {
        return this.#imageUrl;
    }

    get productName(): string {
        return this.#productName;
    }

    get pointType(): string {
        return this.#pointType;
    }

    get productPrice(): number {
        return this.#productPrice;
    }

    get sortOrder(): string {
        return this.#sortOrder;
    }
}
