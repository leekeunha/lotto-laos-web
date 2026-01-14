import { useForm, FormProvider } from 'react-hook-form';
import { Alert, Button } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';
import { CustomError, ResetPasswordFormData } from './types';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import FormRowVertical from '../ui/FormRowVertical';
import usePhoneVerification from '../features/authentication/usePhoneVerification';
import PhoneSecretInput from '../features/authentication/PhoneSecretInput';
import Section from '../ui/Section';
import { ErrorMessage } from '@hookform/error-message';
import AlertIcon from '../icons/AlertIcon';

export default function ResetPasswordPage() {
    const methods = useForm<ResetPasswordFormData>({
        defaultValues: {
            identifier: '',
            serverError: '',
        },
    });
    const {
        handleSubmit,
        formState: { isValid },
        setError,
        clearErrors,
        formState: { errors },
    } = methods;
    const { t } = useTranslation();

    const { sendVerificationCode, isPendingSendCode } = usePhoneVerification();
    const navigate = useNavigate();

    const onSubmit = (formData: ResetPasswordFormData) => {
        sendVerificationCode(
            { identifier: formData.identifier, requestType: 'ResetPass' },
            {
                onSuccess: () => {
                    navigate('sent', { state: { identifier: formData.identifier } });
                },

                onError: (error: Error) => {
                    const customError = error as CustomError;
                    console.log('error:', customError.response?.data);
                    const serverErrorMessage =
                        customError.response?.data?.errorMessage ||
                        'sign_up_error_msg_email_duplication';
                    setError('serverError', {
                        type: 'manual',
                        message: serverErrorMessage,
                    });
                },
            },
        );
    };

    return (
        <>
            <PageTitle title="RESET PASSWORD" showBackButton={false} showMoveHomeButton={true} />
            <PageContainer>
                <FormProvider {...methods}>
                    <Section
                        title="Enter phone number"
                        description="Please enter your phone number. You will receive password reset info."
                    />
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

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormRowVertical>
                            <PhoneSecretInput label={'Phone'} />
                        </FormRowVertical>

                        <Button
                            color="red"
                            size="lg"
                            className="mt-6"
                            fullWidth
                            type="submit"
                            disabled={isPendingSendCode || !isValid}
                        >
                            {t('Reset Password')}
                        </Button>
                    </form>
                </FormProvider>
            </PageContainer>
        </>
    );
}
