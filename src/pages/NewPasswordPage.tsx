import { useLocation } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { NewPasswordFormData } from './types';
import NewPasswordForm from '../features/authentication/NewPasswordForm';
import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import Section from '../ui/Section';

export default function NewPasswordPage() {
    const initialValues = {
        password: '',
        confirmPassword: '',
        identifier: '',
    };
    const location = useLocation();

    const title = location.state?.title || 'RESET PASSWORD';

    const methods = useForm<NewPasswordFormData>({
        defaultValues: initialValues,
    });
    const identifier = location.state?.identifier;
    methods.setValue('identifier', identifier);

    //TODO: if (title === 'Change Password') { <- 코드 개선
    if (title === 'Change Password') {
        return (
            <>
                <PageTitle title={title} showBackButton={false} showMoveHomeButton={true} />
                <PageContainer>
                    <FormProvider {...methods}>
                        <NewPasswordForm />
                    </FormProvider>
                </PageContainer>
            </>
        );
    }

    return (
        <>
            <PageTitle title={'RESET PASSWORD'} showBackButton={false} showMoveHomeButton={true} />
            <PageContainer>
                <Section
                    title="Reset Password"
                    description="Please enter your phone number. You will receive password reset info."
                >
                    <FormProvider {...methods}>
                        <NewPasswordForm />
                    </FormProvider>
                </Section>
            </PageContainer>
        </>
    );
}
