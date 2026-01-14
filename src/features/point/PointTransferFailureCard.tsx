import { Card, CardBody } from '@material-tailwind/react';
import FormatCurrency from '../../ui/FormatCurrency';
import { useParams } from 'react-router-dom';
import DottedHr from '../../ui/DottedHr';

export default function PointTransferFailureCard() {
    const { pointType, points, toMemberId } = useParams();

    return (
        <Card>
            <CardBody className="grid grid-cols-2 grid-rows-9">
                <div className="col-span-2 self-center">
                    <DottedHr />
                </div>
                <p>Point Type</p>
                <p className="text-right">{pointType || 'Unknown'}</p>
                <p>Transaction Type</p>
                <p className="text-right">Transfer</p>
                <p>Member ID</p>
                <p className="text-right">{toMemberId || 'Unknown'}</p>
                <div className="col-span-2 self-center">
                    <DottedHr />
                </div>
                <p>Amount</p>
                <p className="text-right">
                    <FormatCurrency amount={Number(points) || 0} />
                </p>
            </CardBody>
        </Card>
    );
}
