import { Card, CardBody } from '@material-tailwind/react';
import FormatCurrency from '../../ui/FormatCurrency';
import DottedHr from '../../ui/DottedHr';

export default function PointTransferSuccessCard() {
    return (
        <Card>
            <CardBody className="grid grid-cols-2 grid-rows-9">
                <p>Transaction ID</p>
                <p className="text-right">151548</p>
                <div className="col-span-2 self-center">
                    <DottedHr />
                </div>
                <p>Point Type</p>
                <p className="text-right">Gold Point</p>
                <p>Date</p>
                <p className="text-right">05-may-2021 16:12</p>
                <p>Purpose</p>
                <p className="text-right">Transfer</p>
                <p>Target</p>
                <p className="text-right">2081552221</p>
                <div className="col-span-2 self-center">
                    <DottedHr />
                </div>
                <p>Status</p>
                <p className="text-right">Success</p>
                <div className="col-span-2 self-center">
                    <DottedHr />
                </div>
                <p>Amount</p>
                <p className="text-right">
                    <FormatCurrency amount={100000 || 0} />
                </p>
            </CardBody>
        </Card>
    );
}
