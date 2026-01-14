import i18n from '../../translation/i18n';

export function updateLanguage(newLanguage: string): void {
    localStorage.setItem('app_language', newLanguage);
    i18n.changeLanguage(newLanguage);
}
