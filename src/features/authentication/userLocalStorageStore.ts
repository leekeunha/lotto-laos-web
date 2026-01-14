import { AUTH_TOKENS_LOCAL_STORAGE_KEY } from '../../../constants/global';
import { AuthTokens } from './types';

export function saveAuthTokensToLocalStorage(authTokens: AuthTokens): void {
    localStorage.setItem(AUTH_TOKENS_LOCAL_STORAGE_KEY, JSON.stringify(authTokens));
}

export function getAuthTokensFromLocalStorage(): AuthTokens | undefined {
    const authTokens = localStorage.getItem(AUTH_TOKENS_LOCAL_STORAGE_KEY);
    return authTokens ? JSON.parse(authTokens) : undefined;
}

export function removeAuthTokensFromLocalStorage(): void {
    localStorage.removeItem(AUTH_TOKENS_LOCAL_STORAGE_KEY);
}
