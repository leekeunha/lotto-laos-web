import { useFormContext, Controller } from 'react-hook-form';
import { SignInSchema } from '../schema/signInSchema';
import RHFInput from './RHFInput';

export default function PartnerIDInput() {
    const { control } = useFormContext<SignInSchema>();

    return (
        <div>
            <Controller
                name="identifier"
                control={control}
                render={({ field }) => <RHFInput {...field} label="Partner ID" type="text" />}
            />
        </div>
    );
}
