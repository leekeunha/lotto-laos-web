import { Typography } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';
import { SectionProps } from './types';
import Hr from './Hr';

export default function Section({
    title,
    hasHr = false,
    description,
    className = '',
    children,
}: SectionProps) {
    const { t } = useTranslation();

    return (
        <section className={`${className}`}>
            {title && (
                <Typography variant="h4" color="blue-gray" className="text-left">
                    {t(title)}
                </Typography>
            )}
            {hasHr && <Hr className="my-3" />}

            {description && (
                <Typography color="gray" className="font-normal text-left">
                    {t(description)}
                </Typography>
            )}
            <div>{children}</div>
        </section>
    );
}
