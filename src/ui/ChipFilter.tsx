import { Chip } from '@material-tailwind/react';
import { useSearchParams } from 'react-router-dom';
import { FilterProps } from './types';

export default function ChipFilter({ filterField, options }: FilterProps) {
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
                    className="cursor-pointer"
                >
                    <Chip
                        size="sm"
                        value={option.label}
                        color={option.value === currentFilter ? 'red' : undefined}
                        variant={option.value === currentFilter ? 'filled' : 'outlined'}
                    />
                </span>
            ))}
        </div>
    );
}
