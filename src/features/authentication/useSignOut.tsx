import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTH_TOKENS_LOCAL_STORAGE_KEY } from '../../../constants/global';

export function useSignOut() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const signOut = useCallback(() => {
        localStorage.removeItem(AUTH_TOKENS_LOCAL_STORAGE_KEY);

        queryClient.setQueryData(['user'], null);
        queryClient.removeQueries();

        navigate('/auth/sign-in');
    }, [navigate, queryClient]);

    return { signOut };
}
