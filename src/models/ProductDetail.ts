import { RemoteProductDetail } from './RemoteProductDetail';

export class ProductDetail {
    #imageUrl: string;
    #pointType: string;
    #productDescription: string;
    #productIdx: string;
    #productName: string;
    #productPrice: number;

    constructor(remoteProductDetail: RemoteProductDetail) {
        this.#imageUrl = remoteProductDetail.imageUrl;
        this.#pointType = remoteProductDetail.pointType;
        this.#productDescription = remoteProductDetail.productDescription;
        this.#productIdx = remoteProductDetail.productIdx;
        this.#productName = remoteProductDetail.productName;
        this.#productPrice = remoteProductDetail.productPrice;
    }

    get imageUrl(): string {
        return this.#imageUrl;
    }

    get pointType(): string {
        return this.#pointType;
    }

    get productDescription(): string {
        return this.#productDescription;
    }

    get productIdx(): string {
        return this.#productIdx;
    }

    get productName(): string {
        return this.#productName;
    }

    get productPrice(): number {
        return this.#productPrice;
    }
}
