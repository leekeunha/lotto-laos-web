import { Card, CardBody } from '@material-tailwind/react';
import { SerialNumberCardProps } from './types';
import FormatCurrency from '../../ui/FormatCurrency';
import DottedHr from '../../ui/DottedHr';

export default function WinningLinesCard({ ticketDetail }: SerialNumberCardProps) {
    if (!ticketDetail) {
        return <p>No ticket details available.</p>;
    }

    return (
        <Card>
            <CardBody className="grid grid-cols-2 grid-rows-6">
                <p>Winning Lines</p>
                <p className="text-right">{ticketDetail.winningLines}</p>

                <div className="col-span-2 self-center">
                    <DottedHr />
                </div>

                <p>1st Prize</p>
                <p className="text-right">
                    <FormatCurrency
                        amount={ticketDetail.prize1st}
                        currency={ticketDetail.prize1stCurrency}
                    ></FormatCurrency>
                </p>
                <p>2nd Prize</p>
                <p className="text-right">
                    <FormatCurrency
                        amount={ticketDetail.prize2nd}
                        currency={ticketDetail.prize2ndCurrency}
                    ></FormatCurrency>
                </p>
                <p>3rd Prize</p>
                <p className="text-right">
                    <FormatCurrency
                        amount={ticketDetail.prize3rd}
                        currency={ticketDetail.prize3rdCurrency}
                    ></FormatCurrency>
                </p>
                <p>4th Prize</p>
                <p className="text-right">
                    <FormatCurrency
                        amount={ticketDetail.prize4th}
                        currency={ticketDetail.prize4thCurrency}
                    ></FormatCurrency>
                </p>
                <div className="col-span-2 self-center my-2">
                    <DottedHr />
                </div>
                <p className="text-red-700">Total Prize</p>
                <p className="text-right">
                    <FormatCurrency
                        amount={ticketDetail.totalCashPrize}
                        currency={ticketDetail.totalCashPrizeCurrency}
                    ></FormatCurrency>
                </p>

                <div className="col-span-2 text-right">
                    <p className="text-right">
                        <FormatCurrency
                            amount={ticketDetail.totalPointPrize}
                            currency={ticketDetail.totalPointPrizeCurrency}
                        ></FormatCurrency>
                    </p>
                </div>
            </CardBody>
        </Card>
    );
}
