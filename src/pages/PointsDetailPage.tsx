import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';
import { usePointDetail } from '../features/point/usePointDetail';
import PointDetailCard from '../features/point/PointDetailCard';
import { CustomSpinner } from '../ui/CustomSpinner';

export default function PointsDetailPage() {
    const { pointDetail,isLoading } = usePointDetail();

    if (isLoading) {
        return <CustomSpinner/>
    }

    return (
        <PageContainer>
            <PageTitle title="POINT TRANSACTION"></PageTitle>
            <div className="flex flex-col gap-3">
                {pointDetail && <PointDetailCard pointDetail={pointDetail}></PointDetailCard>}
                
            </div>
        </PageContainer>
    );
}
