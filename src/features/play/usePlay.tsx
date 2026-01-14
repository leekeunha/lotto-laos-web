import { useFormContext } from 'react-hook-form';
import { PickNumbersFormValues } from './types';
import { MAX_LOTTO_SELECTION_NUMBER } from '../../../constants/global';

export const usePlay = () => {
    const { setValue } = useFormContext<PickNumbersFormValues>();

    const getRandomNumbers = (count: number): number[] => {
        const arr = [];
        while (arr.length < count) {
            const r = Math.floor(Math.random() * MAX_LOTTO_SELECTION_NUMBER) + 1;
            if (arr.indexOf(r) === -1) {
                arr.push(r);
            }
        }
        return arr;
    };

    const addNumberInLine = (selectedNumbers: number[], number: number) => {
        const newSelectedNumbers = [...selectedNumbers, number];
        setValue('selectedNumbers', newSelectedNumbers);
    };

    const removeNumberInLine = (selectedNumbers: number[], number: number) => {
        const newSelectedNumbers = selectedNumbers.filter((n) => n !== number);
        setValue('selectedNumbers', newSelectedNumbers);
    };

    return {
        getRandomNumbers,
        addNumberInLine,
        removeNumberInLine,
    };
};
