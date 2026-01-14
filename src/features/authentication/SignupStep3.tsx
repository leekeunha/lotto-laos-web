import { Alert, Button, Typography } from '@material-tailwind/react';
import { CustomError, SignupWithEmailFormInputs } from '../../pages/types';
import ReferralCodeInput from '../../ui/ReferralCodeInput';
import { useFormContext, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from 'react-router-dom';
import useReferralVerification from './useReferralVerification';
import usePostReferralCode from './usePostReferralCode';
import AlertIcon from '../../icons/AlertIcon';
import useSingup from './useSingup';
import { useEffect, useState } from 'react';
import CustomModal from '../../ui/CustomModal';
import Section from '../../ui/Section';

export default function SignupStep3() {
    const navigate = useNavigate();
    const { handleSubmit, setError, clearErrors, getValues } =
        useFormContext<SignupWithEmailFormInputs>();
    const { checkReferralCodeExistence } = useReferralVerification();
    const { postReferralCode } = usePostReferralCode();
    const { signup } = useSingup();

    const identifier = getValues('identifier');
    const password = getValues('password');
    const [openModal, setOpenModal] = useState(false);

    const handleConfirm = async () => {
        setOpenModal(false);
        navigate('/auth/sign-in');
    };
    useEffect(() => {
        signup(
            {
                identifier,
                password,
            },
            {
                onError: () => {
                    navigate('/auth/signup/failed');
                },
            },
        );
    }, []);

    const onSubmit: SubmitHandler<SignupWithEmailFormInputs> = (formData) => {
        if (formData.referralCode) {
            checkReferralCodeExistence(formData.referralCode, {
                onSuccess: () => {
                    if (formData.identifier) {
                        postReferralCode(
                            {
                                identifier,
                                referralCode: formData.referralCode,
                            },
                            {
                                onSuccess: () => {
                                    setOpenModal(true);
                                },
                                onError: (error: Error) => {
                                    const customError = error as CustomError;
                                    const serverErrorMessage =
                                        customError.response?.data?.errorMessage ||
                                        'Error registering referral code';
                                    setError('serverError', {
                                        type: 'manual',
                                        message: serverErrorMessage,
                                    });
                                },
                            },
                        );
                    }
                },
                onError: (error: Error) => {
                    const customError = error as CustomError;
                    const serverErrorMessage =
                        customError.response?.data?.errorMessage || 'Invalid referral code';
                    setError('serverError', {
                        type: 'manual',
                        message: serverErrorMessage,
                    });
                },
            });
        } else {
            navigate('/auth/sign-in');
        }
    };

    return (
        <div className="p-5">
            <Section
                title="Congratulations!"
                description="Your registration has been succesfully completed. Please enter the referral code or
                phone number of the person who referred happy545 to you. If you don't have one, you
                don't need to enter it."
                className="flex flex-col gap-10"
            />

            <div className="my-auto text-center">
                <ErrorMessage
                    name="serverError"
                    render={({ message }) => (
                        <Alert
                            className="mb-4"
                            open={true}
                            onClose={() => clearErrors('serverError')}
                            icon={<AlertIcon />}
                            color="red"
                        >
                            {message}
                        </Alert>
                    )}
                />
                <ReferralCodeInput />
                <Typography className="my-4 text-sm text-gray-500 text-left" variant="lead">
                    *Skip if there is no referral.
                </Typography>

                <Button
                    color="red"
                    fullWidth
                    onClick={handleSubmit(onSubmit)}
                    className="mt-3"
                    size="lg"
                >
                    GET START!
                </Button>
            </div>
            <CustomModal
                open={openModal}
                title="Referral completed"
                onConfirm={handleConfirm}
                confirmText={'Home'}
            >
                <Typography className="font-normal">
                    Your referrer registration has been successful!
                </Typography>
            </CustomModal>
        </div>
    );
}
