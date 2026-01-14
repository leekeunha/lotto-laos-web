import { useMutation } from '@tanstack/react-query';
import { VerifyPhoneService } from '../../services/VerifyPhoneService';
import VerifyEmailClient from '../../httpClient/VerifyEmailClient';
import { SendVerificationCodeApiRequest, VerifyCodeApiRequest } from '../../services/types';

export default function usePhoneVerification() {
    const verifyEmailClient = new VerifyEmailClient();
    const verifyEmailService = new VerifyPhoneService(verifyEmailClient);

    const { mutateAsync: sendVerificationCode, isPending: isPendingSendCode } = useMutation({
        mutationFn: async (requestData: SendVerificationCodeApiRequest): Promise<string | null> => {
            return verifyEmailService.sendVerificationCode(requestData);
        },
    });

    const { mutateAsync: verifyCode } = useMutation({
        mutationFn: async (requestData: VerifyCodeApiRequest): Promise<boolean | null> => {
            return verifyEmailService.verifyCode(requestData);
        },
    });

    return { sendVerificationCode, isPendingSendCode, verifyCode };
}
