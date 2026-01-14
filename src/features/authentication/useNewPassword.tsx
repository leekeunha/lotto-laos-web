import { useMutation } from '@tanstack/react-query';
import UserClient from '../../httpClient/UserClient';
import { UserService } from '../../services/UserService';
import { ChangePasswordApiRequest, ErrorResponse } from '../../services/types';
import { AxiosError } from 'axios';

export function useNewPassword() {
    const userClient = new UserClient();
    const userService = new UserService(userClient);

    const { mutate: changePassword } = useMutation<
        boolean,
        AxiosError<ErrorResponse>,
        ChangePasswordApiRequest
    >({
        mutationFn: ({ identifier, password }) => {
            return userService.changePassword({ identifier, password });
        },
    });

    return { changePassword };
}
