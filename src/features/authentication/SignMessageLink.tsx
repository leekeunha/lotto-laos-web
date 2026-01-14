import { Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NoAccountLink() {
    const { t } = useTranslation();
    return (
        <Typography color="gray" className="mt-6 text-center font-normal">
            {t('dont have an account?')}{' '}
            <NavLink to="/auth/welcome-sign-up" className="font-medium text-red-900">
                {t('sign_up_exclamation_mark')}
            </NavLink>
        </Typography>
    );
}
