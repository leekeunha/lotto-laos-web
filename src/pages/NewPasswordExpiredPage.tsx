import { Link, useLocation } from 'react-router-dom';
import CenteredContainer from '../ui/CenteredContainer';
import PageTitle from '../ui/PageTitle';
import { Button } from '@material-tailwind/react';

export default function NewPasswordExpiredPage() {
    const location = useLocation();
    const message =
        location.state?.errorMessage ||
        'The link has expired. Please request a new link to reset your password.';

    return (
        <CenteredContainer>
            <div>
                <PageTitle
                    title="유효기간을 초과하였습니다."
                    subtitle={message}
                    showBackButton={false}
                />
                <Link to="/auth/reset-password">
                    <Button color="red" className="mb-6" fullWidth>
                        Reset Password
                    </Button>
                </Link>
            </div>
        </CenteredContainer>
    );
}
