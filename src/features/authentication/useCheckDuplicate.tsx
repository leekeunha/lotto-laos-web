import UserClient from '../../httpClient/UserClient';
import { CheckDuplicateApiRequest } from '../../services/types';
import { UserService } from '../../services/UserService';
import { useMutation } from '@tanstack/react-query';

export default function useCheckDuplicate() {
    const userClient = new UserClient();
    const userService = new UserService(userClient);

    const { mutateAsync: checkDuplicate } = useMutation({
        mutationFn: async (requestData: CheckDuplicateApiRequest): Promise<boolean | null> => {
            return userService.checkDuplicate(requestData);
        },
    });

    return { checkDuplicate };
}
