export function formatDate(date: Date | string, language: string, showTime: boolean = false) {
    const validDate = typeof date === 'string' ? new Date(date) : date;

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };

    if (showTime) {
        options.hour = '2-digit';
        options.minute = '2-digit';
        options.hour12 = false;
    }

    if (isNaN(validDate.getTime())) {
        throw new Error('Invalid Date');
    }

    return new Intl.DateTimeFormat(language, options).format(validDate);
}
