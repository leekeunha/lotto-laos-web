import { Card } from '@material-tailwind/react';
import { useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { usePlay } from './usePlay';
import { PickNumbersFormValues, SelectedType } from './types';
import NumberMarble from '../../ui/NumberMarble';
import { usePickNumbers } from './usePickNumbers';
import ViewListIcon from '../../icons/ViewListIcon';

export default function SelectedLines() {
    const { control, setValue } = useFormContext<PickNumbersFormValues>();
    const [deletingIndex, setDeletingIndex] = useState<number | null>(null);
    const { fields, remove, update } = useFieldArray({
        control,
        name: 'lines',
    });
    const { getRandomNumbers } = usePlay();
    const handleRandomSelect = (index: number) => {
        const randomNumbers: number[] = getRandomNumbers(5);
        update(index, { numbers: randomNumbers, selectedType: SelectedType.Auto });
        setValue('selectedNumbers', randomNumbers);
        console.log('fields:', fields);
    };

    const { handleEditLine } = usePickNumbers();

    const handleRemoveWithAnimation = (index: number) => {
        setDeletingIndex(index);
        setTimeout(() => {
            remove(index);
            setDeletingIndex(null);
        }, 300);
    };

    return (
        <>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <ViewListIcon width={28} height={28} className="text-red-600" />
                    <div className="flex items-center">Selected Your Lines</div>
                </div>
                <p className="text-red-600">{fields.length}/300</p>
            </div>

            {fields.map((field, index) => (
                <Card
                    key={field.id}
                    className={`flex p-4 transition-transform duration-300 ${deletingIndex === index ? 'transform -translate-x-full' : ''}`}
                >
                    <div className="flex gap-5">
                        <span className="my-auto">#{index + 1}</span>
                        <div className="flex gap-1 my-auto">
                            {field.numbers.map((number, i) => (
                                <NumberMarble
                                    key={i}
                                    number={number}
                                    onClick={() => handleEditLine(index)}
                                    editable={true}
                                />
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <button>
                                <img
                                    src={'/icons/refresh.svg'}
                                    className="w-4 h-4"
                                    alt="refresh"
                                    onClick={() => handleRandomSelect(index)}
                                />
                            </button>

                            <button onClick={() => handleRemoveWithAnimation(index)}>
                                <img
                                    src={'/icons/x-circle.svg'}
                                    className="w-4 h-4"
                                    alt="x-circle"
                                />
                            </button>
                        </div>
                    </div>
                </Card>
            ))}
        </>
    );
}
