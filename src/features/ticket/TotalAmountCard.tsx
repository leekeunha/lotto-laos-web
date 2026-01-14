import { Card, CardBody } from '@material-tailwind/react';
import { TotalAmountCardProps } from './types';
import FormatCurrency from '../../ui/FormatCurrency';
import DottedHr from '../../ui/DottedHr';
import { DetailCardRow } from '../../ui/DetailCardRow';

export default function TotalAmountCard({ ticketDetail }: TotalAmountCardProps) {
    if (!ticketDetail) {
        return <p>No ticket details available.</p>;
    }

    return (
        <Card>
            <CardBody className="grid grid-cols-2 grid-rows-5">
                <DetailCardRow
                    label="Price per Line"
                    value={<FormatCurrency amount={ticketDetail.pricePerLine} currency="Kip" />}
                />
                <DetailCardRow label="Number of Lines" value={ticketDetail.numberOfLines} />

                <div className="col-span-2 self-center">
                    <DottedHr />
                </div>

                <DetailCardRow label="Payment Method" value="BCEL" />
                <DetailCardRow
                    label="Total Amount"
                    value={<FormatCurrency amount={ticketDetail.totalAmount} currency="Kip" />}
                    labelClassName="text-red-700" // Total Amount에 빨간색 적용
                />
            </CardBody>
        </Card>
    );
}
