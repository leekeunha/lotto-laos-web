import { Card } from '@material-tailwind/react';
import SvgIcon from '../../ui/SvgIcon';
import FormatCurrency from '../../ui/FormatCurrency';
import { MyPointCardProps } from './types';
import { GOLD } from '../../../constants/global';

export default function MyPointCard(myPointData: MyPointCardProps) {
    const { point, pointType, isEnough } = myPointData;

    return (
        <Card className="p-4">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <SvgIcon fileName={pointType === GOLD ? 'gold-database' : 'silver-database'} />
                    <p className="font-bold">My Point</p>
                </div>
                <p className="text-right">
                    <FormatCurrency
                        amount={point || 0}
                        currency={'Point'}
                        fontWeight={'font-bold'}
                        color={isEnough ? 'text-black' : 'text-red-500'}
                    ></FormatCurrency>
                </p>
            </div>
        </Card>
    );
}
