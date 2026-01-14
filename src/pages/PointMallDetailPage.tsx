/*----------------------------------------------------------------------------------

 *  제품 상세 정보를 표시하는 UI 컴포넌트입니다.

 *---------------------------------------------------------------------------------*/
import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import ProductDetailCard from '../features/pointMall/ProductDetailCard';
import { useProductDetail } from '../features/pointMall/useProductDetail';
import { FormProvider, useForm } from 'react-hook-form';
import { BuyProductSchema, buyProductSchema } from '../features/pointMall/buyProductSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export default function PointMallDetailPage() {
    const { productDetail } = useProductDetail();

    const methods = useForm<BuyProductSchema>({
        defaultValues: { count: 1 },
        resolver: zodResolver(buyProductSchema),
    });

    return (
        <>
            <PageTitle title="PRODUCT DETAILS" />
            {productDetail && (
                <PageContainer>
                    <FormProvider {...methods}>
                        <form>
                            <ProductDetailCard productDetail={productDetail} />
                        </form>
                    </FormProvider>
                </PageContainer>
            )}
        </>
    );
}
