import { Select, Option } from '@material-tailwind/react';
import { useSearchParams } from 'react-router-dom';
import { FilterProps } from './types';

export default function SelectFilter({ filterField, options }: FilterProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(filterField) || options[0].value;

    function handleSelectChange(value: string | undefined) {
        if (!value) return;

        searchParams.set(filterField, value);
        if (searchParams.get('page')) {
            searchParams.set('page', '1');
        }

        setSearchParams(searchParams);
    }

    return (
        <div className="flex">
            <Select
                value={currentFilter}
                onChange={handleSelectChange}
                size="md"
                containerProps={{ className: '!min-w-[150px]' }}
                label="Sort criteria"
            >
                {options.map((option) => (
                    <Option key={option.value} value={option.value}>
                        {option.label}
                    </Option>
                ))}
            </Select>
        </div>
    );
}
