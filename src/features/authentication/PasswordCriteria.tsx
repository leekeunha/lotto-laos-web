import { CheckIcon } from '@heroicons/react/24/solid';
import { useFormContext, useWatch } from 'react-hook-form';
import { PasswordCriteriaProps } from './types';
import { baseCriteriaList, confirmCriteria } from '../../global/criteria';

export default function PasswordCriteria({ hasConfirmPassword = false }: PasswordCriteriaProps) {
    const { control } = useFormContext();
    const password = useWatch({ control, name: 'password', defaultValue: '' });
    const confirmPassword = hasConfirmPassword
        ? useWatch({ control, name: 'confirmPassword', defaultValue: '' })
        : undefined;

    const criteriaList = hasConfirmPassword
        ? [...baseCriteriaList, confirmCriteria]
        : baseCriteriaList;

    return (
        <ul className="flex flex-col gap-1 my-2">
            {criteriaList.map((criteria, index) => {
                const isValid = criteria.validate(password, confirmPassword);
                return (
                    <li
                        key={index}
                        className={`text-sm font-normal ${isValid ? 'text-red-600' : 'text-gray-500'}`}
                    >
                        <CheckIcon className="h-4 inline-block mr-1" />
                        {criteria.message}
                    </li>
                );
            })}
        </ul>
    );
}
