import { useEffect } from 'react';
import { Card } from '@material-tailwind/react';
import { useFormContext } from 'react-hook-form';
import { usePlay } from './usePlay';
import { PickNumbersFormValues } from './types';

const NumberSelectionCard = () => {
    const { watch, setValue } = useFormContext<PickNumbersFormValues>();

    const editIndex = watch('editIndex', null);
    const selectedNumbers = watch('selectedNumbers', []);
    const { getRandomNumbers, removeNumberInLine } = usePlay();

    const clearSelectedNumbers = () => {
        setValue('selectedNumbers', []);
    };

    const numberOfNewLines = watch('lines').length + 1;

    const fillAllNumbersRandomly = () => {
        const sortedAllRandomNumbers = getRandomNumbers(5);
        setValue('selectedNumbers', sortedAllRandomNumbers);
    };

    useEffect(() => {
        if (editIndex !== null) {
            setValue('selectedNumbers', watch(`lines.${editIndex}.numbers`));
        }
    }, [editIndex, setValue, watch]);

    return (
        <Card className="flex p-4">
            <div className="flex gap-5 justify-center">
                <div className="flex my-auto">{`#${editIndex !== null ? editIndex + 1 : numberOfNewLines}`}</div>
                <div className="flex gap-2 my-auto">
                    {selectedNumbers.map((number, index) => (
                        <button
                            key={index}
                            className="rounded-full h-9 w-9 bg-red-800"
                            onClick={() => removeNumberInLine(selectedNumbers, number)}
                        >
                            <span className="text-white">{number}</span>
                        </button>
                    ))}
                    {Array.from({ length: 5 - selectedNumbers.length }).map((_, index) => (
                        <button
                            key={index + selectedNumbers.length}
                            className="rounded-full h-9 w-9 outline outline-1 outline-gray-400"
                        >
                            <span className="text-red-500"></span>
                        </button>
                    ))}
                </div>
                <div className="flex gap-4">
                    <button onClick={fillAllNumbersRandomly}>
                        <img src={'/icons/refresh.svg'} className="w-4 h-4" alt="refresh" />
                    </button>
                    <button className="" onClick={clearSelectedNumbers}>
                        <img src={'/icons/x-circle.svg'} className="w-4 h-4" alt="x-circle" />
                    </button>
                </div>
            </div>
        </Card>
    );
};

export default NumberSelectionCard;
