import {
    GetProductsApiRequest,
    GetProductsApiResponse,
    GetProductDetailApiRequest,
    BuyProductApiRequest,
    BuyProductApiResponse,
} from './types';
import ProductClient from '../httpClient/ProductClient';
import { Product } from '../models/Product';
import { ProductDetail } from '../models/ProductDetail';
import { RemoteProduct } from '../models/RemoteProduct';
import { RemoteProductDetail } from '../models/RemoteProductDetail';

// ProductService 클래스는 product 데이터를 가져오기 위한 서비스입니다.
export class ProductService {
    private productClient: ProductClient;

    // ProductService 생성자입니다. ProductClient 인스턴스를 받습니다.
    constructor(apiClient: ProductClient) {
        this.productClient = apiClient;
    }

    /**
     * Product 데이터를 가져옵니다.
     * @param pageRows - 페이지 당 행 수 (기본값: 20)
     * @param pageNumber - 페이지 번호 (기본값: 1)
     * @param sortOrder - 정렬순서 (기본값: '')
     * @returns Promise<Product[]> - Product 데이터의 배열
     */
    async getProducts(pageRows: number, pageNumber: number, sortOrder = ''): Promise<Product[]> {
        const requestData: GetProductsApiRequest = {
            pageRows,
            pageNumber,
            sortOrder,
        };

        const apiResponse: GetProductsApiResponse =
            await this.productClient.getProducts(requestData);

        const remoteResults: RemoteProduct[] = apiResponse.data.items;
        const resultData = remoteResults.map((data) => new Product(data));

        return resultData;
    }

    /**
     * Product 상세 데이터를 가져옵니다.
     * @param productIdx - Product 인덱스 값
     * @returns Promise<ProductDetail> - Product Detail 데이터
     */
    async getProductDetail(productIdx: number): Promise<ProductDetail> {
        const requestData: GetProductDetailApiRequest = {
            productIdx,
        };

        const response = await this.productClient.getProductDetail(requestData);
        const remoteProductDetail: RemoteProductDetail = response.data;
        return new ProductDetail(remoteProductDetail);
    }

    /**
     * Product 구매하는 메서드입니다.
     * @param requestData - 구매 요청 데이터를 포함한 객체
     * @returns 제품 구매 정보의 응답 결과를 반환합니다.
     */
    async buyProduct(requestData: BuyProductApiRequest): Promise<BuyProductApiResponse> {
        const response = await this.productClient.buyProduct(requestData);

        return response.data;
    }
}
