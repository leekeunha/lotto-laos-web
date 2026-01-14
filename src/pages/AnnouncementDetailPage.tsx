import { useAnnouncementDetail } from '../features/information/useAnnouncementDetail';
import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import AnnouncementDetailCard from '../features/information/AnnouncementDetailCard';

export default function AnnouncementDetailPage() {
    const { announcementDetail } = useAnnouncementDetail();

    return (
        <>
            <PageTitle title="ANNOUNCEMENT DETAILS" />
            {announcementDetail && (
                <PageContainer>
                    <AnnouncementDetailCard announcementDetail={announcementDetail} />
                </PageContainer>
            )}
        </>
    );
}
