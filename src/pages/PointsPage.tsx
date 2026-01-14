import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';
import SectionTitle from '../ui/SectionTitle';
import MyPointsCard from '../features/point/MyPointsCard';
import PointsTableOperations from '../ui/PointsTableOperations';
import PointTransferHistoryCards from '../features/point/PointTransferHistoryCards';

export default function PointsPage() {
    return (
        <PageContainer className="flex flex-col gap-4">
            <PageTitle title="POINTS" />
            <SectionTitle title="My Points"></SectionTitle>
            <MyPointsCard />
            <PointsTableOperations />
            <PointTransferHistoryCards></PointTransferHistoryCards>
        </PageContainer>
    );
}
