import FormRowVertical from '../../ui/FormRowVertical';
import PasswordInput from './PasswordInput';
import PartnerIDInput from '../../ui/PartnerIDInput';

export default function PartnerIdPasswordInputs() {
    return (
        <>
            <FormRowVertical>
                <PartnerIDInput />
            </FormRowVertical>
            <FormRowVertical>
                <PasswordInput label="Password" />
            </FormRowVertical>
        </>
    );
}
