import PageTitle from '../ui/PageTitle';
import OrderHistoryDetailCard from '../features/orderHistory/OrderHistoryDetailCard';
import { useOrderHisotryDetail } from '../features/orderHistory/useOrderHisotryDetail';
import ViewTicketButton from '../features/happy545Lottery/ViewTicketButton';
import SectionTitle from '../ui/SectionTitle';
import PageContainer from '../ui/PageContainer';
import { CustomSpinner } from '../ui/CustomSpinner';
import SvgIcon from '../ui/SvgIcon';

export default function OrderDetailPage() {
    const { orderHistoryDetail, isLoading } = useOrderHisotryDetail();

    if (isLoading) {
        return <CustomSpinner />;
    }

    return (
        <>
            <PageTitle title="ORDER DETAILS" />
            {orderHistoryDetail && (
                <PageContainer>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <SvgIcon className="h-5" fileName="clipboard-check" />
                            <SectionTitle title="ORDER DETAILS" />
                        </div>
                        <OrderHistoryDetailCard orderHistoryDetail={orderHistoryDetail} />
                        <ViewTicketButton ticketIdx={orderHistoryDetail.ticketIdx} />
                    </div>
                </PageContainer>
            )}
        </>
    );
}
