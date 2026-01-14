import UserClient from '../httpClient/UserClient';
import { UserService } from '../services/UserService';
import { getAuthTokensFromLocalStorage } from '../features/authentication/userLocalStorageStore';
import { useEffect, useState } from 'react';
import { updateLanguage } from '../utils/languageUtils';

export default function useLanguageSelector() {
    const [language, setLanguage] = useState<string>(localStorage.getItem('app_language') || '');

    const userClient = new UserClient();
    const userService = new UserService(userClient);

    const handleLanguageChange = async (newLanguage: string) => {
        setLanguage(newLanguage);
        const authTokens = getAuthTokensFromLocalStorage();

        if (authTokens) {
            await userService.changeUserLanguageInServer(newLanguage);
        }

        updateLanguage(newLanguage);
    };

    useEffect(() => {
        updateLanguage(language);
    }, [language]);

    return {
        language,
        handleLanguageChange,
    };
}
