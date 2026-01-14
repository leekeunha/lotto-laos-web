import { useInquiryDetail } from '../features/inquiry/useInquiryDetail';
import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import InquiryDetailCard from '../features/inquiry/InquiryDetailCard';

export default function InquiryDetailPage() {
    const { inquiryDetail } = useInquiryDetail();

    return (
        <>
            <PageTitle title="INQUIRES DETAILS" />
            {inquiryDetail && (
                <PageContainer>
                    <div className="flex flex-col gap-4">
                        <InquiryDetailCard inquiryDetail={inquiryDetail} />
                    </div>
                </PageContainer>
            )}
        </>
    );
}
