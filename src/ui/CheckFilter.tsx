import { useSearchParams } from 'react-router-dom';
import { FilterProps } from './types';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function CheckFilter({ filterField, options }: FilterProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(filterField) || options[0].value;

    function handleClick(value: string) {
        searchParams.set(filterField, value);
        if (searchParams.get('page')) searchParams.set('page', '1');

        setSearchParams(searchParams);
    }

    return (
        <div className="flex flex-wrap gap-2 my-auto">
            {options.map((option) => (
                <span
                    key={option.value}
                    onClick={() => handleClick(option.value)}
                    className="cursor-pointer flex items-center gap-1"
                >
                    <CheckIcon
                        className={`h-4 w-4 ${
                            option.value === currentFilter ? 'text-red-500' : 'text-gray-500'
                        }`}
                    />
                    <span
                        className={`${
                            option.value === currentFilter ? 'text-red-500' : 'text-gray-700'
                        } text-xs`}
                    >
                        {option.label}
                    </span>
                </span>
            ))}
        </div>
    );
}
