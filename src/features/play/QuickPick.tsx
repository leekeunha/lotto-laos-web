import { Button, Typography } from '@material-tailwind/react';
import { useFormContext } from 'react-hook-form';
import { useQuickPick } from './useQuickPick';
import { MAX_LINES } from '../../../constants/global';
import DotsCircleHorizontalIcon from '../../icons/DotsCircleHorizontalIcon';

export default function QuickPick() {
    const { onQuickPickButtonClicked } = useQuickPick();
    const { watch, register } = useFormContext();
    const linesCount = watch('lines').length;
    const isButtonDisabled = linesCount >= MAX_LINES;

    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <DotsCircleHorizontalIcon width={28} height={28} className="text-red-600" />
                <Typography className="text-xl font-semibold text-gray-900">Quick Pick</Typography>
            </div>

            <div className="flex gap-2 items-center">
                <input
                    {...register('count', { valueAsNumber: true })}
                    type="number"
                    className="w-20 border border-solid border-sky-500 outline-none p-2 text-center"
                />
                <Button
                    size="sm"
                    color="white"
                    onClick={onQuickPickButtonClicked}
                    disabled={isButtonDisabled}
                    type="button"
                >
                    <span className="text-red-500">Pick</span>
                </Button>
            </div>
        </div>
    );
}
