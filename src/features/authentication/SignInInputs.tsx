import PhonePassowordInputs from './PhonePassowordInputs';
import PartnerIdPasswordInputs from './PartnerIdPasswordInputs';
import { SignInInputsProps } from './types';

export default function SignInInputs({ isPlayer }: SignInInputsProps) {
    return isPlayer ? (
        <PhonePassowordInputs></PhonePassowordInputs>
    ) : (
        <PartnerIdPasswordInputs></PartnerIdPasswordInputs>
    );
}
