import { usePrizeDetail } from '../features/happy545Lottery/usePrizeDetail';
import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';
import IconWithTitle from '../ui/IconWithTitle';
import PrizeDetailCard from '../features/happy545Lottery/PrizeDetailCard';
import ViewTicketButton from '../features/happy545Lottery/ViewTicketButton';
import { CustomSpinner } from '../ui/CustomSpinner';
import PrizeClaimCard from '../features/result/PrizeClaimCard';

export default function PrizeDetailPage() {
    const {
        prizeDetailQuery: { data: prizeDetail, isLoading },
    } = usePrizeDetail();

    if (isLoading) {
        return <CustomSpinner />;
    }

    return (
        <>
            <PageTitle title="PRIZE DETAILS"></PageTitle>
            <PageContainer className="flex-col gap-2">
                <IconWithTitle svgFileName={'clipboard-check'} title="Prize details" />
                {prizeDetail && <PrizeDetailCard prizeDetail={prizeDetail} />}
                <ViewTicketButton ticketIdx={prizeDetail?.ticketIdx || ''} />
                <PrizeClaimCard className="mt-5" />
            </PageContainer>
        </>
    );
}
