import { Card, CardBody } from '@material-tailwind/react';
import DateFormatter from '../../ui/DateFormatter';
import FormatCurrency from '../../ui/FormatCurrency';
import DottedHr from '../../ui/DottedHr';
import { PointDetailCardProps } from './types';
import { DetailCardRow } from '../../ui/DetailCardRow';

export default function PointDetailCard({ pointDetail }: PointDetailCardProps) {
    return (
        <Card>
            <CardBody className="grid grid-cols-2 grid-rows-7">
                <DetailCardRow label="Transaction ID" value={pointDetail.transactionNo} />
                <div className="col-span-2 self-center">
                    <DottedHr />
                </div>
                <DetailCardRow label="Point Type" value={pointDetail.pointType} />
                <DetailCardRow
                    label="Date"
                    value={<DateFormatter date={pointDetail.createdAt} />}
                />
                <DetailCardRow label="Transaction Type" value={pointDetail.transactionType} />
                <DetailCardRow label="Details" value={pointDetail.memo} />
                <div className="col-span-2 self-center">
                    <DottedHr />
                </div>
                <DetailCardRow
                    labelClassName="text-red-600"
                    label="Amount"
                    value={<FormatCurrency amount={pointDetail.amount} />}
                />
            </CardBody>
        </Card>
    );
}
