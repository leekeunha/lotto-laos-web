import { useState } from 'react';
import { Input } from '@material-tailwind/react';
import { useFormContext, Controller } from 'react-hook-form';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid';
import { PasswordInputProps } from './types';

const PasswordInput = ({ label, name = 'password', rules = {} }: PasswordInputProps) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

    return (
        <div>
            <Controller
                name={name}
                control={control}
                rules={{
                    ...rules,
                    required: `${label} is required`,
                    minLength: {
                        value: 8,
                        message: '',
                    },
                    pattern: {
                        value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message: '',
                    },
                }}
                render={({ field }) => (
                    <Input
                        {...field}
                        label={label}
                        type={passwordShown ? 'text' : 'password'}
                        error={!!errors[name]}
                        icon={
                            <i onClick={togglePasswordVisibility}>
                                {passwordShown ? (
                                    <EyeIcon className="h-5 w-5" />
                                ) : (
                                    <EyeSlashIcon className="h-5 w-5" />
                                )}
                            </i>
                        }
                        crossOrigin=""
                    />
                )}
            />
            {errors[name] && (
                <p role="alert" className="text-red-500">
                    {errors[name]?.message as string}
                </p>
            )}
        </div>
    );
};

export default PasswordInput;
