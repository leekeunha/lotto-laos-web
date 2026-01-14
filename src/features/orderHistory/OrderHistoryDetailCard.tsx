import useDateString from '../../hooks/useDateString';
import { OrderHistoryDetail } from '../../models/OrderHistoryDetail';
import DottedHr from '../../ui/DottedHr';

export default function OrderHistoryDetailCard({
    orderHistoryDetail,
}: {
    orderHistoryDetail: OrderHistoryDetail | undefined;
}) {
    return (
        orderHistoryDetail && (
            <div className="bg-white flex flex-col p-4 text-sm gap-2 rounded-lg shadow-lg">
                <div className="flex justify-between">
                    <span className="text-gray-500 ">Serial number</span>
                    <span>{orderHistoryDetail.serialNumber}</span>
                </div>
                <DottedHr />
                <div className="flex justify-between">
                    <span className="text-gray-500 ">Purchase Date</span>
                    <span>{useDateString(new Date(orderHistoryDetail.createdAt), true)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500 ">Lotto game</span>
                    <span>{orderHistoryDetail.gameName}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500 ">Draw</span>
                    <span>{orderHistoryDetail.drawIdx}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500 ">Draw Date</span>
                    <span>{useDateString(new Date(orderHistoryDetail.drawEndDate), true)}</span>
                </div>
                <DottedHr />
                <div className="flex justify-between">
                    <span className="text-gray-500 ">Price Per line</span>
                    <span>
                        {orderHistoryDetail.linePrice?.toLocaleString()}{' '}
                        {orderHistoryDetail.currencyType}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500 ">Number of lines</span>
                    <span>{orderHistoryDetail.totalLineCount}</span>
                </div>
                <DottedHr />
                <div className="flex justify-between">
                    <span className="text-gray-500 ">Payment Method</span>
                    <span>{orderHistoryDetail.paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-red-700 ">Total Price</span>
                    <span>
                        {orderHistoryDetail.totalPrice?.toLocaleString()}{' '}
                        {orderHistoryDetail.currencyType}
                    </span>
                </div>
            </div>
        )
    );
}
