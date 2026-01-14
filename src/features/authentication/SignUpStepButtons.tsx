import { Button } from '@material-tailwind/react';
import { SignUpStepButtonsProps } from './types';
import { useFormContext } from 'react-hook-form';
import { ENTER_EMAIL_PASSWORD_STEP, ENTER_VERIFICATION_CODE_STEP } from '../../../constants/global';

export default function SignupStepButtons({
    activeStep,
    setActiveStep,
    isResendDisabled,
    resendTimer,
    startResendTimer,
    fetchVerificationCode,
}: SignUpStepButtonsProps) {
    const {
        getValues,
        formState: { isValid },
    } = useFormContext();

    return (
        <>
            <div className="flex justify-end mt-10">
                <div className="flex justify-end gap-2 mr-2">
                    {activeStep === ENTER_EMAIL_PASSWORD_STEP && (
                        <Button color="red" type="submit" disabled={!isValid}>
                            Next
                        </Button>
                    )}
                    {activeStep === ENTER_VERIFICATION_CODE_STEP && (
                        <div className="flex gap-5">
                            <Button
                                variant="outlined"
                                color="red"
                                onClick={() => setActiveStep(ENTER_VERIFICATION_CODE_STEP - 1)}
                            >
                                Back
                            </Button>
                            <Button
                                className={`${isResendDisabled ? 'bg-gray-400' : 'bg-red-500'} text-white`}
                                onClick={() => {
                                    startResendTimer();
                                    fetchVerificationCode(getValues('identifier'));
                                }}
                                disabled={isResendDisabled}
                            >
                                Resend the code
                                {isResendDisabled && <span className="ml-2">{resendTimer}s</span>}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
