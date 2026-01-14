import PointMallTableOperations from '../features/pointMall/PointMallTableOperations';
import ProductCards from '../features/pointMall/ProductCards';
import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';

export default function PointMallPage() {
    return (
        <>
            <PageTitle title="POINT SHOP" showMoveHomeButton={true} showBackButton={false} />
            <PageContainer>
                <PointMallTableOperations />
                <ProductCards />
            </PageContainer>
        </>
    );
}
