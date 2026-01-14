import { formatDate } from '../utils/dateUtils';
import { useTranslation } from 'react-i18next';
import { DateFormatterProps } from './types';

export default function DateFormatter({
    date,
    showTime = false,
    className = '',
}: DateFormatterProps) {
    const { i18n } = useTranslation();

    const currentDate = date || new Date();

    const formattedDate = formatDate(currentDate, i18n.language, showTime);

    return <span className={`${className}`}>{formattedDate}</span>;
}
