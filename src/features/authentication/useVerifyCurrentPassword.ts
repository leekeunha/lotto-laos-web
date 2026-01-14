import { useMutation } from '@tanstack/react-query';
import { VerifyCurrentPasswordApiRequest } from '../../services/types';
import UserClient from '../../httpClient/UserClient';
import { UserService } from '../../services/UserService';

export function useVerifyCurrentPassword() {
    const userClient = new UserClient();
    const userService = new UserService(userClient);

    const { mutate: verifyCurrentPassword, isPending } = useMutation({
        mutationFn: (requestData: VerifyCurrentPasswordApiRequest) => {
            return userService.verifyCurrentPassword(requestData);
        },
    });

    return { verifyCurrentPassword, isPending };
}
