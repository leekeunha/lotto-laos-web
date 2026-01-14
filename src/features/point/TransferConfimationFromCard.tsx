import { Card } from '@material-tailwind/react';
import SvgIcon from '../../ui/SvgIcon';
import FormatCurrency from '../../ui/FormatCurrency';
import { PointType, TransferConfimationFromCardProps } from './types';

export default function TransferConfimationFromCard({
    pointType,
    amount,
}: TransferConfimationFromCardProps) {
    const getIconName = (pointType: string): string => {
        switch (pointType) {
            case PointType.gold:
                return 'gold-database';
            case PointType.silver:
                return 'database';
            default:
                return '';
        }
    };

    return (
        <Card className="p-4">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <div className="col-span-2">
                    <p>Point</p>
                </div>
                <div className="flex gap-2">
                    <SvgIcon fileName={getIconName(pointType)}></SvgIcon>
                    <p className="capitalize">{pointType}</p>
                </div>
                <p className="text-end">
                    <FormatCurrency amount={amount}></FormatCurrency>
                </p>
            </div>
        </Card>
    );
}
