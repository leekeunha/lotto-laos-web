import { Link, useLocation } from 'react-router-dom';
import CenteredContainer from '../ui/CenteredContainer';
import PageTitle from '../ui/PageTitle';
import { Button } from '@material-tailwind/react';

export default function NewPasswordInvalidPage() {
    const location = useLocation();
    const message = location.state?.errorMessage || '유효하지 않은 링크입니다.';

    return (
        <CenteredContainer>
            <div>
                <PageTitle
                    title="유효하지 않은 링크입니다."
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
