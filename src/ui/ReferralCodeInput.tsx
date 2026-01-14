import { Input } from '@material-tailwind/react';
import { useFormContext, Controller, FieldValues } from 'react-hook-form';

export default function ReferralCodeInput() {
    const {
        control,
        formState: { errors },
    } = useFormContext<FieldValues>();

    return (
        <div>
            <Controller
                name="referralCode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <Input
                        {...field}
                        label="Referral Code (oprional)"
                        crossOrigin=""
                        value={field.value || ''}
                    />
                )}
            />
            {errors.referralCode && (
                <p role="alert" className="text-red-500">
                    {errors.referralCode.message as string}
                </p>
            )}
        </div>
    );
}
