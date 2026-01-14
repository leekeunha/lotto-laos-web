import { useFormContext } from 'react-hook-form';
import { CustomError, NewPasswordFormData } from '../../pages/types';
import FormRowVertical from '../../ui/FormRowVertical';
import PasswordInput from './PasswordInput';
import PasswordCriteria from './PasswordCriteria';
import { Button } from '@material-tailwind/react';
import { useNewPassword } from './useNewPassword';
import { useNavigate } from 'react-router-dom';
import { ChangePasswordApiRequest } from '../../services/types';
import { useMoveBack } from '../../hooks/useMoveBack';
import { useUser } from './useUser';

export default function NewPasswordForm() {
    const {
        handleSubmit,
        formState: { isValid },
        getValues,
    } = useFormContext<NewPasswordFormData>();
    const { changePassword } = useNewPassword();
    const navigate = useNavigate();
    const moveBack = useMoveBack();

    const { user } = useUser();

    const onSubmit = (formData: NewPasswordFormData) => {
        let requestData: ChangePasswordApiRequest;
        requestData = {
            identifier: getValues('identifier'),
            password: formData.password,
        };

        changePassword(requestData, {
            onSuccess: () => {
                if (user) {
                    navigate('/my-account/my-profile');
                } else {
                    //TODO: 로그인 페이지에서 패스워드 변경시 페이지 전환 정상 작동하는지 테스트 해보기)
                    navigate('/auth/reset-password/new-password/completed');
                }
            },
            onError: (error: Error) => {
                const customError = error as CustomError;

                const serverErrorMessage =
                    customError.response?.data?.errorMessage ||
                    'sign_up_error_msg_email_duplication';

                console.log('serverErrorMessage', serverErrorMessage);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
                {/* <ErrorMessage
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
                /> */}
                <FormRowVertical>
                    <PasswordInput label="Password" />
                </FormRowVertical>
                <FormRowVertical>
                    <PasswordInput
                        label="Confirm Password"
                        name="confirmPassword"
                        rules={{
                            validate: (value) => {
                                const { password } = getValues();
                                return value === password || 'Passwords do not match';
                            },
                        }}
                    />
                </FormRowVertical>

                <PasswordCriteria hasConfirmPassword={true}></PasswordCriteria>
            </div>

            <div className="flex !gap-4 my-6 justify-end">
                <Button variant="text" color="red" onClick={moveBack}>
                    BACK
                </Button>
                <Button color="red" type="submit" disabled={!isValid}>
                    Save
                </Button>
            </div>
        </form>
    );
}
