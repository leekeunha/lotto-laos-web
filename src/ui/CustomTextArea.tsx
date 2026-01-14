import { Textarea } from '@material-tailwind/react';
import { useFormContext, Controller, FieldValues } from 'react-hook-form';
import { CustomTextAreaProps } from './types';

export default function CustomTextArea({ name, label, ...rest }: CustomTextAreaProps) {
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
                    <Textarea label={label} {...field} {...rest} ref={field.ref} />
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
