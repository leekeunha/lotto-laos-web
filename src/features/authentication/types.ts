import { RegisterOptions } from 'react-hook-form';

export interface SignUpStepButtonsProps {
    activeStep: number;
    setActiveStep: (step: number) => void;
    isResendDisabled: boolean;
    resendTimer: number;
    startResendTimer: () => void;
    fetchVerificationCode: (identifier: string) => void;
}

export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}

export interface Criteria {
    validate: (password: string, confirmPassword?: string) => boolean;
    message: string;
}

export interface PasswordCriteriaProps {
    hasConfirmPassword?: boolean;
}

export interface ReferralVerificationResponse {
    referralMemberIdx: string;
}

export interface GetReferralOverviewResponse {
    referralCode: string;
    referredTotalCount: number;
    referredThisMonthCount: number;
}

export interface postReferralCodeResponse {
    referralMemberIdx: string;
}

export interface PhoneSecretInputProps {
    label: string;
    name?: string;
    rules?: RegisterOptions;
}

export interface PasswordInputProps {
    label: string;
    name?: string;
    rules?: RegisterOptions;
}

export type SignInInputsProps = {
    isPlayer: boolean;
};
