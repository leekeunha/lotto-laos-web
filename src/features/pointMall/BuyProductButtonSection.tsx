import { Button } from '@material-tailwind/react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ProductDetail } from '../../models/ProductDetail';
import RHFInput from '../../ui/RHFInput';

interface ProductDetailProps {
    productDetail: ProductDetail;
}

export default function BuyProductButtonSection({ productDetail }: ProductDetailProps) {
    const navigate = useNavigate();
    const { watch } = useFormContext();
    const { productIdx, pointType, productName, productPrice } = productDetail;

    const handleGoBuyPage = () => {
        const { count } = watch();

        navigate(`/point/product-payment`, {
            state: {
                productIdx,
                pointType,
                productName,
                productPrice,
                quantity: Number(count),
                totalPrice: productPrice * Number(count),
            },
        });
    };

    return (
        <div className="p-5 fixed bottom-0 left-0 right-0 bg-white z-50 max-w-[512px] mx-auto">
            <div className="flex justify-between w-full gap-2">
                <div className="flex w-1/2 justify-center">
                    <RHFInput type="number" name="count" label="count" min="1" max="999"></RHFInput>
                </div>

                <Button className="w-1/2" color="red" onClick={handleGoBuyPage}>
                    Buy
                </Button>
            </div>
        </div>
    );
}
