import { useTranslation } from 'react-i18next';
import { HomeRowSectionProps } from '../types';
import { Typography } from '@material-tailwind/react';

export default function HomeTitleRow({ title, children }: HomeRowSectionProps) {
    const { t } = useTranslation();

    return (
        <div className="mb-3">
            <div className="flex justify-between">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                    {t(`${title}`)}
                </Typography>
            </div>
            {children}
        </div>
    );
}
