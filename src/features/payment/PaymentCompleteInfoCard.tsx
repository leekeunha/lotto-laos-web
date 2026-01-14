import { Card, CardBody } from '@material-tailwind/react';
import { PaymentCompleteInfoCardProps } from './types';
import FormatCurrency from '../../ui/FormatCurrency';
import DottedHr from '../../ui/DottedHr';
import Hr from '../../ui/Hr';
import DateFormatter from '../../ui/DateFormatter';

export default function PaymentCompleteInfoCard({
    paymentInfo,
    success = true,
}: PaymentCompleteInfoCardProps) {
    if (!paymentInfo) {
        return <p>No Payment Info available.</p>;
    }

    const { orderNumber, purchaseDate, productName, productPrice, quantity, totalPrice } =
        paymentInfo;

    return (
        <Card>
            <CardBody className="grid grid-cols-2 grid-rows-4 gap-1">
                {success && (
                    <>
                        <p>Order Number</p>
                        <p className="text-right">{orderNumber}</p>
                        <div className="col-span-2 self-center my-2">
                            <Hr />
                        </div>
                        <p>Purchase Date</p>
                        <p className="text-right">
                            <DateFormatter date={purchaseDate} showTime />
                        </p>
                        <div className="col-span-2 self-center my-2">
                            <DottedHr />
                        </div>
                    </>
                )}

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
                <p className="font-bold text-red-500">Total Price</p>
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
