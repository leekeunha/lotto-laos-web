import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';
import TicketTableOperations from '../features/ticket/TicketTableOperations';
import TicketCards from '../features/ticket/TicketCards';

export default function TicketPage() {
    return (
        <div className="flex flex-col w-full mb-5">
            <PageTitle title="TICKETS" />
            <PageContainer>
                <TicketTableOperations />
                <TicketCards />
            </PageContainer>
        </div>
    );
}
