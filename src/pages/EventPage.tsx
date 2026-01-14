import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';

import EventCards from '../features/information/EventCards';
import EventTableOperations from '../ui/EventTableOperations';

export default function EventPage() {
    return (
        <section className="flex flex-col w-full mb-5">
            <PageTitle title="EVENTS" showBackButton={false} showMoveHomeButton={true} />
            <PageContainer>
                <EventTableOperations />
                <EventCards />
            </PageContainer>
        </section>
    );
}
