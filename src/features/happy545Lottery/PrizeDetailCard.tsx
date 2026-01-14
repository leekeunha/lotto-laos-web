import { Card, CardBody } from '@material-tailwind/react';
import DateFormatter from '../../ui/DateFormatter';
import FormatCurrency from '../../ui/FormatCurrency';
import DottedHr from '../../ui/DottedHr';
import { DetailCardRow } from '../../ui/DetailCardRow';
import { PrizeDetailCardProps } from './types';

export default function PrizeDetailCard({ prizeDetail }: PrizeDetailCardProps) {
    return (
        <Card>
            <CardBody className="grid grid-cols-2 grid-rows-6">
                <DetailCardRow
                    label="Purchase Date"
                    value={<DateFormatter date={prizeDetail.createdAt} showTime />}
                />
                <DetailCardRow label="Lottery" value={prizeDetail.gameName} />
                <DetailCardRow label="Draw" value={prizeDetail.drawIdx} />
                <DetailCardRow
                    label="Draw Date"
                    value={<DateFormatter date={prizeDetail.createdAt} />}
                />

                <div className="col-span-2 self-center">
                    <DottedHr />
                </div>

                <DetailCardRow label="Serial Number" value={prizeDetail.serialNumber} />
                <DetailCardRow label="Line numbers" value={prizeDetail.lineIdx} />
                <DetailCardRow label="Rank" value={`${prizeDetail.winningRank} th`} />
                <DetailCardRow
                    label="Prize"
                    value={
                        <FormatCurrency
                            amount={prizeDetail.prizePrice || 0}
                            currency={prizeDetail.currencyType || ''}
                        />
                    }
                />
                <DetailCardRow label="Prize Payment Method" value={prizeDetail.currencyType} />
                <div className="col-span-2 self-center my-2">
                    <DottedHr />
                </div>
                <DetailCardRow label="Status" value={prizeDetail.claimedStatus} />
            </CardBody>
        </Card>
    );
}
