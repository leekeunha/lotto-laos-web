import { Button } from '@material-tailwind/react';
import { MAX_LINES, PRICE_PER_LINE } from '../../../constants/global';
import { useFormContext, useWatch } from 'react-hook-form';
import { PickNumbersFormValues } from './types';
import { useNavigate } from 'react-router-dom';
import StarIcon from '../../icons/StarIcon';
import FormatCurrency from '../../ui/FormatCurrency';

export default function PurchaseButtonSection() {
    const { control } = useFormContext<PickNumbersFormValues>();

    const lines = useWatch({ control, name: 'lines' });

    const countOfLines = lines.length;
    const navigate = useNavigate();
    const totalPrice: number = countOfLines * PRICE_PER_LINE;

    const handlePurchase = () => {
        navigate('/buy/payment', { state: lines });
    };

    return (
        <div className="p-5 fixed bottom-0 left-0 right-0 bg-white z-50 max-w-[512px] mx-auto">
            <div className="flex justify-between w-full gap-2">
                <div className="flex gap-2 items-center flex-grow">
                    <StarIcon color="red" width={24} height={24} className="text-red-600" />
                    <div className="text-center text-red-400">
                        <FormatCurrency
                            color="text-red-600"
                            amount={totalPrice}
                            fontWeight="font-semibold"
                        />
                    </div>
                    <div className="text-center text font-semibold">LAK</div>
                </div>

                <Button
                    color="red"
                    type="submit"
                    onClick={handlePurchase}
                    disabled={countOfLines === 0 || countOfLines > MAX_LINES}
                >
                    Purchase
                </Button>
            </div>
        </div>
    );
}
