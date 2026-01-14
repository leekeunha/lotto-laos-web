import { Card, CardBody } from '@material-tailwind/react';
import DateFormatter from '../../ui/DateFormatter';
import FormatCurrency from '../../ui/FormatCurrency';
import { PRICE_PER_LINE } from '../../../constants/global';
import DottedHr from '../../ui/DottedHr';
import { DetailCardRow } from '../../ui/DetailCardRow';
import { PurchaseReceiptCardProps } from './types';

export default function PurchaseReceiptCard({ paymentReceipt }: PurchaseReceiptCardProps) {
    return (
        <Card>
            <CardBody className="grid grid-cols-2 grid-rows-12">
                <DetailCardRow label="Serial number" value={paymentReceipt.serialNumber} />

                <div className="col-span-2 self-center">
                    <DottedHr />
                </div>

                <DetailCardRow
                    label="Purchase Date"
                    value={<DateFormatter date={paymentReceipt.purchaseDate} showTime />}
                />
                <DetailCardRow label="Lotto game" value={paymentReceipt.lottoGame} />
                <DetailCardRow label="Draw" value={paymentReceipt.draw} />
                <DetailCardRow
                    label="Draw Date"
                    value={<DateFormatter date={paymentReceipt.drawDate} />}
                />

                <div className="col-span-2 self-center">
                    <DottedHr />
                </div>

                <DetailCardRow
                    label="Price Per line"
                    value={<FormatCurrency amount={PRICE_PER_LINE} currency="Kip" />}
                />
                <DetailCardRow label="Number of lines" value={paymentReceipt.numberOfLines} />

                <div className="col-span-2 self-center">
                    <DottedHr />
                </div>

                <DetailCardRow label="Payment Method" value={paymentReceipt.paymentMethod} />

                <DetailCardRow
                    label="Total Price"
                    value={<FormatCurrency amount={paymentReceipt.totalPrice} currency="Kip" />}
                    labelClassName="text-red-600"
                />
            </CardBody>
        </Card>
    );
}
