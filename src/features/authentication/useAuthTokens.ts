import { useEffect, useState } from 'react';
import { AUTH_TOKENS_LOCAL_STORAGE_KEY } from '../../../constants/global';
import { AuthTokens } from './types';

export function saveAuthTokensToLocalStorage(authTokens: AuthTokens): void {
    localStorage.setItem(AUTH_TOKENS_LOCAL_STORAGE_KEY, JSON.stringify(authTokens));
}

export function getAuthTokensFromLocalStorage(): AuthTokens | null {
    const storedTokens = localStorage.getItem(AUTH_TOKENS_LOCAL_STORAGE_KEY);
    return storedTokens ? JSON.parse(storedTokens) : null;
}

export function removeAuthTokensFromLocalStorage(): void {
    localStorage.removeItem(AUTH_TOKENS_LOCAL_STORAGE_KEY);
}

export function useAuthTokens(): [AuthTokens | null, (tokens: AuthTokens | null) => void] {
    const [authTokens, setAuthTokens] = useState<AuthTokens | null>(null);

    useEffect(() => {
        const initialTokens = getAuthTokensFromLocalStorage();
        setAuthTokens(initialTokens);
    }, []);

    const updateAuthTokens = (tokens: AuthTokens | null) => {
        setAuthTokens(tokens);
        if (tokens) {
            saveAuthTokensToLocalStorage(tokens);
        } else {
            removeAuthTokensFromLocalStorage();
        }
    };

    return [authTokens, updateAuthTokens];
}
