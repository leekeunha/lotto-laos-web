import { Button } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import { SignInOutButtonProps } from '../../ui/types';
import { useTranslation } from 'react-i18next';
import { useUser } from './useUser';
import BellIcon from '../../icons/BellIcon';
import LanguageSelector from '../../ui/LanguageSelector';

export default function HeaderButtonGroup({ className }: SignInOutButtonProps) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const { user } = useUser();

    return (
        <div className={className}>
            {user ? (
                <>
                    <div className="flex items-center">
                        <Link to="/messages">
                            <BellIcon width={24} height={24} className="text-gray-500" />
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <Button
                        size="sm"
                        className="mr-1"
                        variant="text"
                        onClick={() => navigate('/auth/sign-in')}
                    >
                        {t('sign_in_menu')}
                    </Button>
                    <Button size="sm" onClick={() => navigate('/auth/welcome-sign-up')}>
                        {t('sign_up_exclamation_mark')}
                    </Button>
                </>
            )}
            <div className="ml-2 flex align-middle">
                <LanguageSelector />
            </div>
        </div>
    );
}
