import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import Section from '../ui/Section';
import { Button } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

export default function NewPasswordCompletedPage() {
    return (
        <>
            <PageTitle title="RESET PASSWORD" showBackButton={false} showMoveHomeButton={true} />
            <PageContainer>
                <Section
                    title="Password has been reset."
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <NavLink to={'/auth/sign-in'}>
                    <Button fullWidth color="red">
                        Sign in
                    </Button>
                </NavLink>
            </PageContainer>
        </>
    );
}
