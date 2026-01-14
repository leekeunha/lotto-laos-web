import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from '../../global/queryKeys';
import { SignInApiRequest } from '../../services/types';
import UserClient from '../../httpClient/UserClient';
import { UserService } from '../../services/UserService';
import User from '../../models/User';
import useLanguageInLocal from '../../hooks/useLanguageInLocal';
import { saveAuthTokensToLocalStorage } from './userLocalStorageStore';

export function useSignin() {
    const userClient = new UserClient();
    const userService = new UserService(userClient);
    const queryClient = useQueryClient();

    const { changeLanguageInLocal } = useLanguageInLocal();

    const { mutate: signin, isPending } = useMutation({
        mutationFn: (requestData: SignInApiRequest) => {
            return userService.signin(requestData);
        },
        onSuccess: (user: User) => {
            const accessToken: string = user.accessToken;
            const refreshToken: string = user.refreshToken;
            saveAuthTokensToLocalStorage({ accessToken, refreshToken });

            queryClient.setQueryData(['authTokens'], {
                accessToken: user.accessToken,
                refreshToken: user.refreshToken,
            });

            const fcmToken: string | null = localStorage.getItem('fcmToken');

            if (fcmToken) {
                userService.saveFcmToken({ fcmToken });
            }

            changeLanguageInLocal(user.language);
        },
    });

    return { signin, isPending };
}
