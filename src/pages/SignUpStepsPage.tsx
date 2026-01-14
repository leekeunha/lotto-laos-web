import { useState, useEffect, useCallback } from 'react';
import { OnBaordingStepper } from '../ui/OnBaordingStepper';
import SignupStep1 from '../features/authentication/SignupStep1';
import SignupStep2 from '../features/authentication/SignupStep2';
import SignupStep3 from '../features/authentication/SignupStep3';
import { useForm, FormProvider } from 'react-hook-form';
import { SignUpStepButtonsProps } from '../features/authentication/types';
import SignupStepButtons from '../features/authentication/SignUpStepButtons';

import { CustomError, SignupWithEmailFormInputs } from './types';
import { CheckDuplicateApiRequest } from '../services/types';
import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import useCheckDuplicate from '../features/authentication/useCheckDuplicate';
import usePhoneVerification from '../features/authentication/usePhoneVerification';
import {
    DONE_STEP,
    ENTER_EMAIL_PASSWORD_STEP,
    ENTER_VERIFICATION_CODE_STEP,
} from '../../constants/global';

export default function SignUpStepsPage() {
    const [activeStep, setActiveStep] = useState<number>(0);
    const { sendVerificationCode } = usePhoneVerification();
    const { checkDuplicate } = useCheckDuplicate();
    const methods = useForm<SignupWithEmailFormInputs>({
        defaultValues: {
            memberIdx: 0,
            identifier: '',
            password: '',
            referralCode: '',
            serverError: '',
        },
    });

    const { handleSubmit, setError, setValue } = methods;
    const [resendTimer, setResendTimer] = useState(10);
    const [isResendDisabled, setIsResendDisabled] = useState(false);
    const [isResendTimerStarted, setIsResendTimerStarted] = useState(false);
    const [verificationCode] = useState('');

    useEffect(() => {
        let timer: ReturnType<typeof setInterval> | undefined;

        if (isResendDisabled && resendTimer > 0) {
            timer = setInterval(() => {
                setResendTimer((prev) => prev - 1);
            }, 1000);
        }

        if (resendTimer === 0) {
            setIsResendDisabled(false);
            setIsResendTimerStarted(false);
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [isResendDisabled, resendTimer]);

    const onSubmit = (checkDuplicateApiRequest: CheckDuplicateApiRequest) => {
        if (activeStep === ENTER_EMAIL_PASSWORD_STEP) {
            checkDuplicate(checkDuplicateApiRequest, {
                onSuccess: () => {
                    sendVerificationCode(
                        { identifier: checkDuplicateApiRequest.identifier, requestType: 'SignUp' },
                        {
                            onSuccess: () => {
                                setValue('identifier', checkDuplicateApiRequest.identifier);
                                setActiveStep((prevStep) => prevStep + 1);
                            },
                            onError: (error: Error) => {
                                const customError = error as CustomError;

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
                },
                onError: (error: Error) => {
                    const customError = error as CustomError;

                    const serverErrorMessage =
                        customError.response?.data?.errorMessage ||
                        'sign_up_error_msg_email_duplication';
                    setError('serverError', { type: 'manual', message: serverErrorMessage });
                },
            });
        } else {
            setActiveStep((prevStep) => prevStep + 1);
        }
    };

    const handleVerify = (isVerified: boolean) => {
        if (isVerified) {
            setActiveStep((prevStep) => prevStep + 1);
        } else {
            if (!isResendTimerStarted) {
                setIsResendDisabled(true);
                setResendTimer(10);
                setIsResendTimerStarted(true);
            }
        }
    };

    const startResendTimer = () => {
        if (!isResendTimerStarted) {
            setIsResendDisabled(true);
            setResendTimer(10);
            setIsResendTimerStarted(true);
        }
    };

    const fetchVerificationCode = useCallback(
        async (identifier: string) => {
            await sendVerificationCode({ identifier, requestType: 'SignUp' });

            console.log('fetchVerificationCode:');
        },
        [sendVerificationCode],
    );

    const getSignUpStepComponent = () => {
        switch (activeStep) {
            case ENTER_EMAIL_PASSWORD_STEP:
                return <SignupStep1 />;
            case ENTER_VERIFICATION_CODE_STEP:
                return (
                    <SignupStep2
                        onVerify={handleVerify}
                        startResendTimer={startResendTimer}
                        isResendTimerStarted={isResendTimerStarted}
                        verificationCode={verificationCode}
                    />
                );
            case DONE_STEP:
                return <SignupStep3 />;
            default:
                return null;
        }
    };

    const signupStepButtonsProps: SignUpStepButtonsProps = {
        activeStep,
        setActiveStep,
        isResendDisabled,
        resendTimer,
        startResendTimer,
        fetchVerificationCode,
    };

    return (
        <div className="flex flex-col w-full mb-5">
            <PageTitle title="SIGN UP" showBackButton={true} showMoveHomeButton={false} />
            <PageContainer>
                <FormProvider {...methods}>
                    <div className="flex justify-center h-full items-center">
                        <form className="w-full max-w-2xl" onSubmit={handleSubmit(onSubmit)}>
                            <OnBaordingStepper
                                activeStep={activeStep}
                                setActiveStep={setActiveStep}
                            />
                            <div className="w-full lg:mt-36 mt-7">{getSignUpStepComponent()}</div>
                            <SignupStepButtons {...signupStepButtonsProps} />
                        </form>
                    </div>
                </FormProvider>
            </PageContainer>
        </div>
    );
}
