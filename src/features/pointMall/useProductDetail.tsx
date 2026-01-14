import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import i18n from '../../../translation/i18n';
import ProductClient from '../../httpClient/ProductClient';
import { ProductService } from '../../services/ProductService';

export function useProductDetail() {
    const { id } = useParams();

    if (!id) {
        throw new Error('Inquiry ID is required');
    }

    const productClient = new ProductClient();
    const productService = new ProductService(productClient);

    const { data: productDetail, isLoading } = useQuery({
        queryKey: ['productDetail', i18n.language, id],
        queryFn: () => productService.getProductDetail(Number(id)),
    });
    return { productDetail, isLoading };
}
