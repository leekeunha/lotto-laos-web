import { useMutation } from '@tanstack/react-query';
import { SignupApiRequest } from '../../services/types';
import UserClient from '../../httpClient/UserClient';
import { UserService } from '../../services/UserService';

export default function useSingup() {
    const userClient = new UserClient();
    const userService = new UserService(userClient);

    const { mutate: signup, isPending } = useMutation({
        mutationFn: (requestData: SignupApiRequest) => {
            return userService.signup(requestData);
        },
    });

    return { signup, isPending };
}
