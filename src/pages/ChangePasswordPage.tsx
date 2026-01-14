import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import SubmitBackButtons from '../features/customer/NewInquiryButtonGroup';
import { useNavigate } from 'react-router-dom';
import {
    VeriyfyCurrentPasswordSchema,
    veriyfyCurrentPasswordSchema,
} from '../schema/checkCurrentPasswordSchema';

import { useVerifyCurrentPassword } from '../features/authentication/useVerifyCurrentPassword';
import PasswordInput from '../features/authentication/PasswordInput';

export default function ChangePasswordPage() {
    const { verifyCurrentPassword } = useVerifyCurrentPassword();

    const navigate = useNavigate();

    const defaultValues = {
        password: '',
    };

    const methods = useForm<VeriyfyCurrentPasswordSchema>({
        defaultValues,
        resolver: zodResolver(veriyfyCurrentPasswordSchema),
    });

    const onSubmit = (data: VeriyfyCurrentPasswordSchema) => {
        verifyCurrentPassword(data, {
            onSuccess: () => {
                // navigate 함수에서 state 객체를 제대로 전달하는 방식으로 수정
                navigate('/my-account/my-profile/new-password', {
                    state: { title: 'Change Password' },
                });
            },
        });
    };

    return (
        <>
            <PageTitle title="Change Password" showBackButton={false} showMoveHomeButton={true} />
            <PageContainer>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <PasswordInput name="password" label="Current password"></PasswordInput>
                        <SubmitBackButtons submitButtonText="Enter"></SubmitBackButtons>
                    </form>
                </FormProvider>
            </PageContainer>
        </>
    );
}
