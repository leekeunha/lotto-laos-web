/*----------------------------------------------------------------------------------

 * 주문한 제품 정보를 표시하는 카드 리스트 UI 컴포넌트입니다.

 *---------------------------------------------------------------------------------*/
import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import PointMallOrdersTableOperations from '../features/pointMallOrderHistory/PointMallOrdersTableOperations';
import PointMallOrderHistoryCards from '../features/pointMallOrderHistory/PointMallOrderHistoryCards';

export default function PointMallOrdersPage() {
    return (
        <>
            <div className="flex flex-col w-full mb-5">
                <PageTitle title="POINT SHOP ORDERS" />
                <PageContainer>
                    <PointMallOrdersTableOperations />
                    <PointMallOrderHistoryCards />
                </PageContainer>
            </div>
        </>
    );
}
