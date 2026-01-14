import { Button, Typography } from '@material-tailwind/react';
import PageTitle from '../ui/PageTitle';
import { useLocation, useNavigate } from 'react-router-dom';
import PageContainer from '../ui/PageContainer';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import usePhoneVerification from '../features/authentication/usePhoneVerification';
import { useMoveBack } from '../hooks/useMoveBack';

import { VerifyCodeApiRequest } from '../services/types';
import useVerificationCodeInput from '../hooks/useVerificationCodeInput';
import useResendTimer from '../hooks/useResendTimer';

export default function ResetPasswordSentPage() {
    const { t } = useTranslation();
    const location = useLocation();
    const identifier = location.state?.identifier;

    const {
        setError,
        clearErrors,
        formState: { errors },
    } = useForm();
    const { verifyCode, sendVerificationCode } = usePhoneVerification();
    const { inputRefs, handleInput, handleKeyDown, handleFocus } =
        useVerificationCodeInput(handleChange);
    const { resendTimer, isResendDisabled, initializeResendTimer } = useResendTimer(false);
    const navigate = useNavigate();

    async function handleChange() {
        const enteredCode = inputRefs.current.map((ref) => ref.value).join('');

        if (enteredCode.length < 6) {
            clearErrors('verificationCode');
            return;
        }

        const requestData: VerifyCodeApiRequest = {
            identifier: identifier || '',
            verifyCode: enteredCode,
        };

        verifyCode(requestData, {
            onSuccess: () => {
                clearErrors('verificationCode');
                initializeResendTimer();
                navigate(`/auth/reset-password/new-password`, { state: { identifier } });
            },
            onError: (error: any) => {
                const errorMessage =
                    error?.response?.data?.errorMessage ||
                    t('Verification code does not match. Please check again.');
                setError('verificationCode', { type: 'manual', message: errorMessage });
                inputRefs.current.forEach((ref) => (ref.value = ''));
                inputRefs.current[0].focus();
            },
        });
    }

    const handleResend = async () => {
        initializeResendTimer();
        await sendVerificationCode({ identifier: identifier || '', requestType: 'ResetPass' });
    };

    return (
        <div className="flex flex-col w-full mb-5">
            <PageTitle title="RESET PASSWORD" showBackButton={true} showMoveHomeButton={false} />
            <PageContainer>
                <Typography variant="h4">{t('Verify your phone')}</Typography>
                <Typography className="mt-3 font-medium text-gray-500">
                    {t(
                        'Please enter the verification code we sent to your phone number to complete the verification process.',
                    )}
                </Typography>
                <div className="mt-10 mb-3 flex flex-row items-center justify-center gap-3">
                    {inputRefs.current.map((_, index) => (
                        <div key={index} className="h-14 w-12 md:h-16 md:w-14">
                            <input
                                ref={(el) => (inputRefs.current[index] = el)}
                                className={`flex h-full w-full rounded-lg border ${errors.verificationCode ? 'border-red-600' : 'border-gray-300'} bg-white px-4 text-center text-lg outline-none ring-gray-900 focus:bg-gray-50 focus:ring-1`}
                                type="text"
                                maxLength={1}
                                onInput={(e) => handleInput(e, index)}
                                onFocus={handleFocus}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                </div>
                {errors.verificationCode && (
                    <Typography className="text-red-600 text-center mb-5">
                        {errors.verificationCode.message as string}
                    </Typography>
                )}
                <div className="flex mt-10 gap-5 justify-end">
                    <Button variant="outlined" color="red" onClick={() => useMoveBack()}>
                        Back
                    </Button>
                    <Button
                        className={`${isResendDisabled ? 'bg-gray-400' : 'bg-red-500'} text-white`}
                        onClick={handleResend}
                        disabled={isResendDisabled}
                    >
                        Resend the code
                        {isResendDisabled && <span className="ml-2">{resendTimer}s</span>}
                    </Button>
                </div>
            </PageContainer>
        </div>
    );
}
