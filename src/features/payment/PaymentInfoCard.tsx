import { Card, CardBody } from '@material-tailwind/react';
import { PaymentInfoProps } from './types';
import FormatCurrency from '../../ui/FormatCurrency';

export default function PaymentInfoCard({ paymentInfo }: PaymentInfoProps) {
    if (!paymentInfo) {
        return <p>No Payment Info available.</p>;
    }

    const { productName, productPrice, quantity, totalPrice } = paymentInfo;

    return (
        <Card>
            <CardBody className="grid grid-cols-2 grid-rows-4 gap-1">
                <p>Product</p>
                <p className="text-right">{productName}</p>
                <p>Price</p>
                <p className="text-right">
                    <FormatCurrency amount={productPrice} currency={'Point'}></FormatCurrency>
                </p>
                <p>Amount</p>
                <p className="text-right">
                    <FormatCurrency amount={quantity}></FormatCurrency>
                </p>
                <p className="font-bold">Total Price</p>
                <p className="text-right">
                    <FormatCurrency
                        amount={totalPrice}
                        currency={'Point'}
                        fontWeight={'font-bold'}
                    ></FormatCurrency>
                </p>
            </CardBody>
        </Card>
    );
}
