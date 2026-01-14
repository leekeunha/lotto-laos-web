import { Card, CardBody } from '@material-tailwind/react';
import { SerialNumberCardProps } from './types';
import DateFormatter from '../../ui/DateFormatter';
import DottedHr from '../../ui/DottedHr';
import { DetailCardRow } from '../../ui/DetailCardRow';

export default function SerialNumberCard({ ticketDetail }: SerialNumberCardProps) {
    if (!ticketDetail) {
        return <p>No ticket details available.</p>;
    }

    return (
        <Card>
            <CardBody className="grid grid-cols-2 grid-rows-6">
                <DetailCardRow label="Serial number" value={ticketDetail.serialNumber} />

                <div className="col-span-2 self-center">
                    <DottedHr />
                </div>

                <DetailCardRow
                    label="Purchase Date"
                    value={<DateFormatter date={ticketDetail.purchasedDate} showTime />}
                />
                <DetailCardRow label="Lotto game" value={ticketDetail.lottoGame} />
                <DetailCardRow label="Draw" value={ticketDetail.draw} />
                <DetailCardRow
                    label="Draw Date"
                    value={<DateFormatter date={ticketDetail.drawDate} showTime />}
                />
            </CardBody>
        </Card>
    );
}
