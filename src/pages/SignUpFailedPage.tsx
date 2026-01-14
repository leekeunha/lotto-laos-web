import { useNavigate } from 'react-router-dom';
import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import { Button, Typography } from '@material-tailwind/react';

export default function SignUpFailedPage() {
    const navigate = useNavigate();

    return (
        <>
            <PageTitle title="sign up"></PageTitle>
            <PageContainer>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                        <img
                            src={'/icons/exclamation-mark-circle.svg'}
                            className="w-8 h-8 text-3xl mb-1"
                            alt="exclamation-mark"
                        />
                        <Typography variant="h3" className="font-bold">
                            Failed
                        </Typography>
                    </div>
                    <p>
                        <Typography variant="small" className="text-gray-600">
                            서버 에러가 발생했습니다. 다시 시도해주세요.
                        </Typography>
                    </p>

                    <Button
                        fullWidth={false}
                        color="red"
                        className="w-full"
                        onClick={() => {
                            navigate('/auth/signup-steps');
                        }}
                    >
                        Try Agin
                    </Button>
                </div>
            </PageContainer>
        </>
    );
}
