import React from 'react';
import { Button, IconButton } from '@material-tailwind/react';
import { usePlay } from './usePlay';
import { useFormContext } from 'react-hook-form';
import { usePickNumbers } from './usePickNumbers';
import { MAX_LINES } from '../../../constants/global';
import { PickNumbersFormValues } from './types';

const NumberPicker: React.FC = () => {
    const { addNumberInLine, removeNumberInLine } = usePlay();
    const { watch } = useFormContext<PickNumbersFormValues>();
    const selectedNumbers = watch('selectedNumbers', []);
    const { onPickClickedInNumberPicker, fields } = usePickNumbers();
    const countOfLines = fields.length;

    const handleNumberClick = (number: number) => {
        if (!selectedNumbers.includes(number)) {
            addNumberInLine(selectedNumbers, number);
        } else {
            removeNumberInLine(selectedNumbers, number);
        }
    };

    const numbersToPick = Array.from({ length: 45 }, (_, i) => i + 1);
    return (
        <div className="grid p-4 grid-cols-8 grid-rows-auto gap-2 place-items-center bg-gray-300 rounded-lg">
            {numbersToPick.map((number) => (
                <IconButton
                    key={number}
                    className={`rounded-full h-9 w-9 ${
                        selectedNumbers.includes(number) ? 'bg-red-800' : 'bg-white'
                    }`}
                    onClick={() => handleNumberClick(number)}
                    disabled={!selectedNumbers.includes(number) && selectedNumbers.length === 5}
                >
                    <span
                        className={`${
                            selectedNumbers.includes(number) ? 'text-white' : 'text-red-800 text-sm'
                        }`}
                    >
                        {number}
                    </span>
                </IconButton>
            ))}
            <Button
                type="button"
                variant="text"
                className="outline outline-1 outline-gray-400 bg-white col-span-3"
                fullWidth
                onClick={onPickClickedInNumberPicker}
                disabled={countOfLines >= MAX_LINES}
            >
                <span className="text-red-500">Pick</span>
            </Button>
        </div>
    );
};

export default NumberPicker;
