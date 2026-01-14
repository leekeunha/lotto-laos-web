import i18n from '../../translation/i18n';

export default function useLanguageInLocal() {
    const changeLanguageInLocal = (value: string) => {
        localStorage.setItem('app_language', value);
        i18n.changeLanguage(value);
    };

    return { changeLanguageInLocal };
}
