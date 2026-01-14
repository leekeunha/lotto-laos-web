import FormRowVertical from '../../ui/FormRowVertical';
import PasswordInput from './PasswordInput';
import PhoneInput from '../../ui/PhoneInput';

export default function PhonePassowordInputs() {
    return (
        <>
            <FormRowVertical>
                <PhoneInput />
            </FormRowVertical>
            <FormRowVertical>
                <PasswordInput label="Password" />
            </FormRowVertical>
        </>
    );
}
