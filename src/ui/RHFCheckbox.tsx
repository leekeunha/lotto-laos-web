import { Checkbox } from '@material-tailwind/react';
import { useFormContext, Controller, FieldValues, Path } from 'react-hook-form';
import { RHFCheckboxProps } from './types';

export function RHFCheckbox<T extends FieldValues>({
    name,
    label,
    containerProps,
}: RHFCheckboxProps<T>) {
    const { control } = useFormContext<T>();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange } }) => (
                <Checkbox
                    label={label}
                    containerProps={containerProps}
                    color="red"
                    checked={value}
                    onChange={(e) => onChange(e)}
                    crossOrigin={undefined}
                />
            )}
        ></Controller>
    );
}
