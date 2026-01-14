import PageTitle from '../ui/PageTitle';
import AnnouncementCards from '../features/information/AnnouncementCards';
import PageContainer from '../ui/PageContainer';
import AnnouncementTableOperations from '../features/information/AnnouncementTableOperations';

export default function AnnouncementPage() {
    return (
        <>
            <PageTitle title="ANNOUNCEMENT" showBackButton={false} showMoveHomeButton={true} />
            <PageContainer>
                <AnnouncementTableOperations />
                <AnnouncementCards />
            </PageContainer>
        </>
    );
}
