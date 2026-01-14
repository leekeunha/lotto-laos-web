import { Input } from '@material-tailwind/react';
import { useFormContext, Controller, FieldValues } from 'react-hook-form';
import { CustomInputProps } from './types';

export default function RHFInput({
    name,
    label,
    rules,
    containerProps,
    children,
    ...rest
}: CustomInputProps) {
    const {
        control,
        formState: { errors },
    } = useFormContext<FieldValues>();

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input
                        containerProps={{ className: '!min-w-[150px]' }}
                        label={label}
                        {...field}
                        {...rest}
                        ref={field.ref}
                        crossOrigin={undefined}
                    />
                )}
            />

            {errors[name] && (
                <p role="alert" className="text-red-500">
                    {errors[name]?.message as string}
                </p>
            )}
        </>
    );
}
