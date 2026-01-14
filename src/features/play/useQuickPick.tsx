import { useFieldArray, useFormContext } from 'react-hook-form';
import { usePlay } from './usePlay';
import { MAX_LINES } from '../../../constants/global';
import { SelectedType } from './types';

export const useQuickPick = () => {
    const { getRandomNumbers } = usePlay();
    const { control, setValue, watch } = useFormContext();
    const { append } = useFieldArray({
        control,
        name: 'lines',
    });

    const addRandomNumbersLines = (enteredNumber: number) => {
        const linesCount = watch('lines').length;

        if (linesCount < MAX_LINES) {
            const numberOfNewLines = Math.min(enteredNumber, MAX_LINES - enteredNumber);

            const newRandomLines = Array.from({ length: numberOfNewLines }, () => ({
                numbers: getRandomNumbers(5),
                selectedType: SelectedType.Auto,
            }));

            newRandomLines.forEach((line) => append(line));

            const updatedLines = watch('lines');

            setValue('lines', updatedLines);

            updateLines();
            setValue('selectedNumbers', []);
        }
    };

    const updateLines = () => {
        const updatedLines = watch('lines');
        setValue('lines', updatedLines);
    };

    const onQuickPickButtonClicked = () => {
        const enteredNumber = watch('count');
        if (typeof enteredNumber === 'number' && !isNaN(enteredNumber)) {
            addRandomNumbersLines(enteredNumber);
            //resetField('count');
        }
    };

    return {
        onQuickPickButtonClicked,
    };
};
