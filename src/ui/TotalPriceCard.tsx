import { Card, CardBody } from '@material-tailwind/react';
import FormatCurrency from './FormatCurrency';
import { PRICE_PER_LINE } from '../../constants/global';
import DottedHr from './DottedHr';
import { TotalPriceCardProps } from './types';

export default function TotalPriceCard({ numberOfLine }: TotalPriceCardProps) {
    return (
        <Card>
            <CardBody className="grid grid-cols-2 grid-rows-4">
                <p>Price Per line</p>
                <p className="text-right">
                    <FormatCurrency amount={PRICE_PER_LINE} currency={'Kip'} />
                </p>
                <p>Number of lines</p>
                <p className="text-right">{numberOfLine}</p>

                <div className="col-span-2 self-center">
                    <DottedHr />
                </div>
                <p>Total Price</p>
                <p className="text-right">
                    <FormatCurrency amount={PRICE_PER_LINE * numberOfLine} currency={'Kip'} />
                </p>
            </CardBody>
        </Card>
    );
}
