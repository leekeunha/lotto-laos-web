import { useEventDetail } from '../features/customer/useEventDetail';

import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import EventDetailCard from '../features/information/EventDetailCard';

export default function EventDetailPage() {
    const { eventDetail } = useEventDetail();

    return (
        <>
            <PageTitle title="EVENT DETAILS" />
            {eventDetail && (
                <PageContainer>
                    <EventDetailCard eventDetail={eventDetail} />
                </PageContainer>
            )}
        </>
    );
}
