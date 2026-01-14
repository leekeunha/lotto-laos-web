import { Select, Option as MTOption } from '@material-tailwind/react';
import { useFormContext, Controller, FieldValues, Path } from 'react-hook-form';
import { Option } from './types';

export type RHFSelectProps<T extends FieldValues> = {
    name: Path<T>;
    options?: Option[];
    label: string;
    onChange?: (value: string) => void;
    containerProps?: object;
};

export function RHFSelect<T extends FieldValues>({
    name,
    options,
    label,
    onChange,
    containerProps,
}: RHFSelectProps<T>) {
    const { control } = useFormContext();

    return (
        <>
            <Controller
                control={control}
                name={name}
                render={({ field: { value, onChange: fieldOnChange, ref } }) => (
                    <Select
                        size="md"
                        key={Date.now()}
                        label={label}
                        containerProps={containerProps}
                        value={String(value)}
                        onChange={(newValue) => {
                            fieldOnChange(newValue);
                            if (onChange) {
                                onChange(newValue || '');
                            }
                        }}
                        ref={ref}
                    >
                        {options?.map((option) => (
                            <MTOption key={option.value} value={String(option.value)}>
                                {option.label}
                            </MTOption>
                        ))}
                    </Select>
                )}
            />
        </>
    );
}
