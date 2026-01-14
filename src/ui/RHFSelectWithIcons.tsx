import { Select, Option } from '@material-tailwind/react';
import { useFormContext, FieldValues, FieldError } from 'react-hook-form';
import { RHFSelectWithIconsProps } from './types';
import React from 'react';
import SvgIcon from './SvgIcon';

export default function RHFSelectWithIcons({
    name,
    label,
    items,
    rules,
    ...rest
}: RHFSelectWithIconsProps) {
    const {
        register,
        formState: { errors },
        setValue,
    } = useFormContext<FieldValues>();
    const { ref, ...inputProps } = register(name, rules);

    const fieldError = errors[name] as FieldError | undefined;

    return (
        <>
            <Select
                {...rest}
                name={name}
                ref={ref}
                label={label}
                containerProps={{ className: '!min-w-[150px]' }}
                onChange={(value) => {
                    setValue(name, value);
                    inputProps.onChange({ target: { name, value } });
                }}
                selected={(element) =>
                    element &&
                    React.cloneElement(element, {
                        disabled: true,
                        className: 'flex items-center opacity-100 px-0 gap-2 pointer-events-none',
                    })
                }
            >
                {items.map(({ value, label, svgFileName }) => (
                    <Option key={value} value={value} className="flex items-center gap-2">
                        <SvgIcon fileName={svgFileName}></SvgIcon>
                        {label}
                    </Option>
                ))}
            </Select>
            {fieldError && (
                <p role="alert" className="text-red-500">
                    {fieldError.message}
                </p>
            )}
        </>
    );
}
