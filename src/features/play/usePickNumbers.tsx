import { useRef } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { usePlay } from './usePlay';
import { PickNumbersFormValues, SelectedType } from './types';
import { MAX_NUMBER_OF_MARBLES } from '../../../constants/global';

export const usePickNumbers = () => {
    const { control, watch, setValue } = useFormContext<PickNumbersFormValues>();
    const { fields, append, update } = useFieldArray({
        control,
        name: 'lines',
    });

    const { getRandomNumbers } = usePlay();
    const focusCardRef = useRef<HTMLDivElement>(null);
    const editIndex = watch('editIndex', null);

    const determineSelectedType = (countOfMarblesNeeded: number): SelectedType => {
        return countOfMarblesNeeded === 0 ? SelectedType.Manu : SelectedType.Semi;
    };

    const editLine = (filledNewNumbers: number[], countOfMarblesNeeded: number) => {
        const selectedType = determineSelectedType(countOfMarblesNeeded);
        if (editIndex !== null) {
            update(editIndex, { numbers: filledNewNumbers, selectedType });
        }
    };

    const appendLine = (filledNewNumbers: number[], countOfMarblesNeeded: number) => {
        const selectedType = determineSelectedType(countOfMarblesNeeded);
        append({ numbers: filledNewNumbers, selectedType });
    };

    const removeDuplicates = (array: number[]): number[] => {
        return [...new Set(array)];
    };

    const mergeAndRemoveDuplicates = (firstArray: number[], secondArray: number[]): number[] => {
        const mergedArray = [...firstArray, ...secondArray];
        return removeDuplicates(mergedArray);
    };

    const calculateCountOfMarblesNeeded = (countOfMarble: number): number => {
        return MAX_NUMBER_OF_MARBLES - countOfMarble;
    };

    const onPickClickedInNumberPicker = () => {
        const manuallySelectedNumbers = watch('selectedNumbers', []);

        let finalNumbers: number[] = manuallySelectedNumbers;
        let countOfMarbleNeeded = calculateCountOfMarblesNeeded(manuallySelectedNumbers.length);

        if (countOfMarbleNeeded > 0) {
            finalNumbers = fillWithRandomNumbers(manuallySelectedNumbers, countOfMarbleNeeded);
        }

        upsertLine(finalNumbers, countOfMarbleNeeded);

        setValue('selectedNumbers', []);
        forceUpdateLines();
    };

    const fillWithRandomNumbers = (numbers: number[], countOfMarbleNeeded: number): number[] => {
        let result = numbers;

        while (countOfMarbleNeeded > 0) {
            const randomNumbers: number[] = getRandomNumbers(countOfMarbleNeeded);
            result = mergeAndRemoveDuplicates(result, randomNumbers);
            countOfMarbleNeeded = calculateCountOfMarblesNeeded(result.length);
        }

        return result;
    };

    const upsertLine = (finalNumbers: number[], countOfMarbleNeeded: number) => {
        if (editIndex !== null) {
            editLine(finalNumbers, countOfMarbleNeeded);
            setValue('editIndex', null);
        } else {
            appendLine(finalNumbers, countOfMarbleNeeded);
        }
    };

    const forceUpdateLines = () => {
        const updatedLines = watch('lines');
        setValue('lines', updatedLines);
    };

    const handleEditLine = (index: number) => {
        setValue('editIndex', index);
    };

    return {
        onPickClickedInNumberPicker,
        handleEditLine,
        focusCardRef,
        fields,
    };
};
