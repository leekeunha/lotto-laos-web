import { useMutation } from '@tanstack/react-query';
import { SaveFcmTokenApiRequest } from '../../services/types';
import UserClient from '../../httpClient/UserClient';
import { UserService } from '../../services/UserService';

export function useFcmToken() {
    const userClient = new UserClient();
    const userService = new UserService(userClient);

    const { mutate: saveFcmToken, isPending } = useMutation({
        mutationFn: (requestData: SaveFcmTokenApiRequest) => {
            return userService.saveFcmToken(requestData);
        },
    });

    return { saveFcmToken, isPending };
}
