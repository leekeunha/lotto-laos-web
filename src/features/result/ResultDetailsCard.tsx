import DateFormatter from '../../ui/DateFormatter';
import FormatCurrency from '../../ui/FormatCurrency';
import { ResultDetail } from '../../models/ResultDetail';
import DottedHr from '../../ui/DottedHr';
import { DetailCardRow } from '../../ui/DetailCardRow';
import { Card, CardBody } from '@material-tailwind/react';

export default function ResultDetailsCard({ resultDetail }: { resultDetail: ResultDetail }) {
    return (
        <Card>
            <CardBody className="grid grid-cols-2 grid-rows-6">
                <DetailCardRow
                    label="Draw Date"
                    value={<DateFormatter date={resultDetail.drawEndDate} />}
                />
                <DetailCardRow label="Total Winners" value={resultDetail.totalWinners} />
                <DetailCardRow
                    label="Total Prizes (Kip)"
                    value={<FormatCurrency amount={resultDetail.totalPrizeAmount} />}
                />
                <DetailCardRow
                    label="Total Prizes (Point)"
                    value={<FormatCurrency amount={resultDetail.totalPrizeAmount} />}
                />

                <div className="col-span-2 self-center my-2">
                    <DottedHr />
                </div>

                <DetailCardRow
                    label="Carry Over"
                    value={
                        <FormatCurrency amount={resultDetail.carryoverPrizeAmount} currency="Kip" />
                    }
                    labelClassName="text-red-600"
                />
            </CardBody>
        </Card>
    );
}
