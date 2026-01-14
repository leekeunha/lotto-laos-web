import PageTitle from '../ui/PageTitle';
import OrderHistoryCards from '../features/orderHistory/OrderHistoryCards';
import PageContainer from '../ui/PageContainer';
import OrderHistoryTableOperations from '../features/orderHistory/OrderHistoryOperations';

export default function OrdersPage() {
    return (
        <>
            <div className="flex flex-col w-full mb-5">
                <PageTitle title="ORDERS" />
                <PageContainer>
                    <OrderHistoryTableOperations />
                    <OrderHistoryCards />
                </PageContainer>
            </div>
        </>
    );
}
