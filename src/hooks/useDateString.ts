import { formatDate } from '../utils/dateUtils';
import { useTranslation } from 'react-i18next';

export default function useDateString(date?: Date | null, isFormatTime?: boolean) {
    const { i18n } = useTranslation();
    const currentDate = date || new Date();

    let formattedDate = formatDate(currentDate, i18n.language);

    if (isFormatTime) {
        const formattedTime = formatTime(currentDate);
        formattedDate = `${formattedDate} ${formattedTime}`;
    }

    return formattedDate;
}

function formatTime(date: Date): string {
    return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
}
