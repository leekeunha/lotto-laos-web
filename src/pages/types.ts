import { AxiosError, AxiosResponse } from 'axios';

export type SignInFormData = {
    identifier: string;
    password: string;
    serverError?: string;
};
export interface CustomError extends AxiosError {
    response: AxiosResponse<{
        errorMessage: string;
    }>;
}

export type PointTransferFormData = {
    pointType: string;
    points: string;
    toMemberId: string;
    serverError?: string;
};
export interface NewPasswordFormData {
    password: string;
    confirmPassword: string;
    identifier: string;
}

export interface ResetPasswordFormData {
    identifier: string;
    serverError?: string;
}

export type SignupWithEmailFormInputs = {
    memberIdx: number;
    identifier: string;
    password: string;
    serverError?: string;
    referralCode: string;
};

export interface LineInPayment {
    numbers: number[];
    lineIdx?: string;
    selectedType: string;
}

export interface FormValues {
    lines: LineInPayment[];
}

export type ReferralCodeFormData = {
    referralCode: string;
    serverError?: string;
};

export type AccountMenuItem = {
    label: string;
    svgFileName: string;
    link: string;
    type: 'normal' | 'signOut' | 'badge' | 'qrCode';
};
