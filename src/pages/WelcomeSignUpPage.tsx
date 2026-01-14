import { NavLink } from 'react-router-dom';
import SectionTitle from '../ui/Section';
import SignButtonGroup from '../features/authentication/SignButtonGroup';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-tailwind/react';
import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';

export default function WelcomeSignUpPage() {
    const { t } = useTranslation();
    const signUpButtonsConfig = {
        message: 'already_have_an_account',
        linkText: 'sign_in_exclamation_mark',
        linkTo: '/auth/sign-in',
    };

    return (
        <>
            <PageTitle title="SIGN UP" showBackButton={false} showMoveHomeButton={true} />
            <PageContainer>
                <SectionTitle
                    title={'sign_up_step_0_title'}
                    description={'sign_up_step_0_subtitle'}
                    className="flex flex-col gap-5"
                />
                <SignButtonGroup config={signUpButtonsConfig}>
                    <NavLink to={'/auth/signup-steps'}>
                        <Button
                            color="red"
                            size="lg"
                            className="mt-6"
                            fullWidth
                            title={t('sign_up_menu')}
                        >
                            {t('sign_up_menu')}
                        </Button>
                    </NavLink>
                </SignButtonGroup>
            </PageContainer>
        </>
    );
}
