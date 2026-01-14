import React from 'react';
import { Checkbox } from '@material-tailwind/react';
import { useFormContext, Controller, FieldValues } from 'react-hook-form';
import { CustomCheckboxProps } from './types';

export default function TermsOfServiceCheckbox({
    name,
    label,
    containerProps,
    onClick,
    rules,
}: CustomCheckboxProps): JSX.Element {
    const { control } = useFormContext<FieldValues>();

    const handleCheckboxChange = (e: React.MouseEvent<HTMLInputElement>) => {
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <div>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <Checkbox
                        label={label}
                        containerProps={containerProps}
                        color={'red'}
                        checked={field.value}
                        {...field}
                        onClick={(e) => {
                            handleCheckboxChange(e);
                        }}
                        crossOrigin={undefined}
                    />
                )}
            />
        </div>
    );
}
