import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import QuickTips from '../features/inquiry/QuickTips';
import Inquiries from '../features/inquiry/Inquiries';
import WriteInquiryButton from '../features/inquiry/WriteInquiryButton';

export default function InquiryPage() {
    return (
        <>
            <PageTitle title="1:1 inquiry" />
            <PageContainer className="flex flex-col gap-3">
                <QuickTips></QuickTips>
                <Inquiries></Inquiries>
                <WriteInquiryButton></WriteInquiryButton>
            </PageContainer>
        </>
    );
}
