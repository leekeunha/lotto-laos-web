import { PointMallOrderHistoryDetail } from '../../models/PointMallOrderHistoryDetail';
import DateFormatter from '../../ui/DateFormatter';
import DottedHr from '../../ui/DottedHr';
import FormatCurrency from '../../ui/FormatCurrency';

export default function PointMallOrderHistoryDetailCard({
    orderHistoryDetail,
}: {
    orderHistoryDetail: PointMallOrderHistoryDetail;
}) {
    const { status, createdAt, orderIdx, productName, productPrice, quantity, totalPoints } =
        orderHistoryDetail;

    return (
        orderHistoryDetail && (
            <div className="bg-white flex flex-col p-4 text-sm gap-2 rounded-lg shadow-lg">
                <div className="flex justify-between">
                    <span className="text-gray-500 ">Product</span>
                    <span>{productName}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500 ">Order Number</span>
                    <span>{orderIdx}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500 ">Purchase Date</span>
                    <DateFormatter date={createdAt} />
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500 ">Status</span>
                    <span>{status}</span>
                </div>
                <DottedHr />
                <div className="flex justify-between">
                    <span className="text-gray-500 ">Price</span>
                    <FormatCurrency amount={productPrice} currency={'Point'} />
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500 ">Amount</span>
                    <span>{quantity}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-bold text-red-500">Total Price</span>
                    <span className="text-right">
                        <FormatCurrency
                            amount={totalPoints}
                            currency={'Point'}
                            fontWeight={'font-bold'}
                        ></FormatCurrency>
                    </span>
                </div>
            </div>
        )
    );
}
