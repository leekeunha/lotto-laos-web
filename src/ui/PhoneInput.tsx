import { useFormContext, Controller } from 'react-hook-form';
import { SignUpSchema } from '../schema/signUpSchema';
import RHFInput from './RHFInput';

export default function PhoneInput() {
    const { control } = useFormContext<SignUpSchema>();

    return (
        <div>
            <Controller
                name="identifier"
                control={control}
                render={({ field }) => <RHFInput {...field} label="Phone" type="number" />}
            />
        </div>
    );
}
