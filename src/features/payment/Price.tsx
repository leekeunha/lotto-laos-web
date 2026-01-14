import { Card, CardBody } from '@material-tailwind/react';
import FormatCurrency from '../../ui/FormatCurrency';
import { PriceProps } from './types';
import { PRICE_PER_LINE } from '../../../constants/global';
import IconWithTitle from '../../ui/IconWithTitle';
import DottedHr from '../../ui/DottedHr';
import { DetailCardRow } from '../../ui/DetailCardRow';

export default function Price({ lines }: PriceProps) {
    const countOfLines: number = lines.length;
    const totalPrice: number = countOfLines * PRICE_PER_LINE;

    return (
        <section className="flex flex-col gap-2">
            <IconWithTitle svgFileName={'clipboard-check'} title="Price" />
            <Card>
                <CardBody className="grid grid-cols-2 grid-rows-4">
                    <DetailCardRow
                        label="Price Per line"
                        value={
                            <FormatCurrency amount={PRICE_PER_LINE} currency="kip"></FormatCurrency>
                        }
                    />
                    <DetailCardRow label="Number of Lines" value={countOfLines} />
                    <div className="col-span-2 self-center">
                        <DottedHr />
                    </div>
                    <DetailCardRow
                        label="Total Price"
                        labelClassName="text-red-600"
                        value={<FormatCurrency amount={totalPrice} currency="Kip"></FormatCurrency>}
                    />
                </CardBody>
            </Card>
        </section>
    );
}
