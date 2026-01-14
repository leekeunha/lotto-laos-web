import { useMutation } from '@tanstack/react-query';
import ProductClient from '../../httpClient/ProductClient';
import { ProductService } from '../../services/ProductService';
import { BuyProductApiRequest } from '../../services/types';

export default function useBuyProduct() {
    const productClient = new ProductClient();
    const productService = new ProductService(productClient);

    const { mutate: buyProduct, isPending } = useMutation({
        mutationFn: (requestData: BuyProductApiRequest) => {
            return productService.buyProduct(requestData);
        },
    });

    return { buyProduct, isPending };
}
