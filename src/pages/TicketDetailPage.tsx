import { useTicketDetail } from '../features/ticket/useTicketDetail';
import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';
import SerialNumberCard from '../features/ticket/SerialNumberCard';
import WinningLinesCard from '../features/ticket/WinningLinesCard';
import LinesInTicketDetail from '../features/ticket/LinesInTicketDetail';
import TotalAmountCard from '../features/ticket/TotalAmountCard';
import CongratulationsCard from '../features/ticket/CongratulationsCard';
import WinningNumberCard from '../features/ticket/WinningNumberCard';
import { CustomSpinner } from '../ui/CustomSpinner';
import { useLocation } from 'react-router-dom';
import { renderTicketStatusIcon } from '../global/renderTicketStatusIcon';

export default function TicketDetailPage() {
    const location = useLocation();
    const { ticketDetail, isLoading } = useTicketDetail();
    const { ticketInfo } = location.state || {};

    if (isLoading) {
        return <CustomSpinner />;
    }

    return (
        <>
            <PageTitle title="TICKET DETAILS"></PageTitle>
            <PageContainer>
                <div className="flex flex-col gap-5">
                    {ticketInfo && (
                        <p className="flex gap-2 items-center">
                            {renderTicketStatusIcon(ticketInfo.status)}
                            {ticketInfo.status}
                        </p>
                    )}
                    <SerialNumberCard ticketDetail={ticketDetail}></SerialNumberCard>
                    {ticketDetail && ticketDetail?.winningLines > 0 && (
                        <WinningLinesCard ticketDetail={ticketDetail}></WinningLinesCard>
                    )}
                    {ticketInfo && ticketInfo.status !== 'Ongoing' && (
                        <WinningNumberCard ticketDetail={ticketDetail}></WinningNumberCard>
                    )}
                    <LinesInTicketDetail ticketDetail={ticketDetail}></LinesInTicketDetail>
                    <TotalAmountCard ticketDetail={ticketDetail}></TotalAmountCard>
                    <p className="text-center">
                        Tickets that have been purchased cannot be exchanged, canceled, or refunded.
                    </p>
                    {ticketInfo && ticketInfo.status === 'Win' && (
                        <CongratulationsCard></CongratulationsCard>
                    )}
                </div>
            </PageContainer>
        </>
    );
}
