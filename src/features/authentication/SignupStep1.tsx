import { Alert } from '@material-tailwind/react';
import AlertIcon from '../../icons/AlertIcon';
import PasswordCriteria from './PasswordCriteria';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import PhonePassowordInputs from './PhonePassowordInputs';
import TermsOfService from '../../ui/TermsOfService';
import Section from '../../ui/Section';

export default function SignupStep1() {
    const {
        clearErrors,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="p-5">
            <Section
                title="계정 정보를 입력해주세요."
                description="Sign up에 필요한 정보를 작성해주세요."
                className="flex flex-col gap-5"
            >
                <ErrorMessage
                    name="serverError"
                    errors={errors}
                    render={({ message }) => (
                        <Alert
                            className="mt-4"
                            open={true}
                            onClose={() => clearErrors('serverError')}
                            icon={<AlertIcon />}
                            color="red"
                        >
                            {message}
                        </Alert>
                    )}
                />

                <PhonePassowordInputs />
                <PasswordCriteria />
                <TermsOfService />
            </Section>
        </div>
    );
}
