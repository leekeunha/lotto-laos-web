/*----------------------------------------------------------------------------------

 * 제품 정보를 표시하는 카드 리스트 UI 컴포넌트입니다.

 *---------------------------------------------------------------------------------*/
import useInfiniteProducts from './useInfiniteProducts';

import InfiniteDataHandler from '../../ui/InfiniteDataHandler';
import ProductItem from './ProductItem';
import { Product } from '../../models/Product';

export default function ProductCards() {
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage, error } = useInfiniteProducts();

    return (
        <InfiniteDataHandler
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            error={error}
        >
            {data?.pages.map((products: Product[]) =>
                products.map((product) => {
                    return <ProductItem key={product.productIdx} product={product} />;
                }),
            )}
        </InfiniteDataHandler>
    );
}
