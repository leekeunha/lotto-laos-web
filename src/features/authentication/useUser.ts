import { useQuery } from '@tanstack/react-query';
import UserClient from '../../httpClient/UserClient';
import { UserService } from '../../services/UserService';
import User from '../../models/User';

export function useUser() {
    const userClient = new UserClient();
    const userService = new UserService(userClient);

    const {
        data: user,
        isPending,
        refetch,
    } = useQuery({
        queryKey: ['user'],
        queryFn: async (): Promise<User> => userService.getCurrentUserInfo(),
    });

    return { user, isPending, refetch };
}
