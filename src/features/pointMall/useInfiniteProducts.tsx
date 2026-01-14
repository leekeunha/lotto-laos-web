import { useInfiniteQuery } from '@tanstack/react-query';
import { PAGE_SIZE } from '../../../constants/global';
import ProductClient from '../../httpClient/ProductClient';
import { ProductService } from '../../services/ProductService';
import { Product } from '../../models/Product';
import { useSearchParams } from 'react-router-dom';

export default function useInfiniteProducts() {
    const productClient = new ProductClient();
    const productService = new ProductService(productClient);

    const [searchParams] = useSearchParams();
    const sortOrder = searchParams.get('sortOrder') || '';

    return useInfiniteQuery({
        queryKey: ['product', PAGE_SIZE, sortOrder],
        queryFn: async ({ pageParam }): Promise<Product[]> =>
            productService.getProducts(PAGE_SIZE, pageParam, sortOrder),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
    });
}
