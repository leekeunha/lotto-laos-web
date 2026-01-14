import { getAuthTokensFromLocalStorage } from '../features/authentication/userLocalStorageStore';

export function getHeadersWithToken() {
    const authTokens = getAuthTokensFromLocalStorage();
    return authTokens ? { Authorization: `Bearer ${authTokens.accessToken}` } : {};
}
