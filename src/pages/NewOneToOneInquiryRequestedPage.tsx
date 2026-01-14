import { Button } from '@material-tailwind/react';
import PageTitle from '../ui/PageTitle';
import { useNavigate } from 'react-router-dom';

export default function NewOneToOneInquiryRequestedPage() {
    const navigate = useNavigate();

    return (
        <section className="flex flex-col">
            <PageTitle
                title="Inquiry Requested"
                subtitle="문의가 정상적으로 접수되었습니다. 답변은 최대 1주일이 소요될 수 있습니다."
                showBackButton={false}
            />
            <Button color="red" className="mb-6 w-full md:w-32" onClick={() => navigate('/home')}>
                Go to Home
            </Button>
        </section>
    );
}
