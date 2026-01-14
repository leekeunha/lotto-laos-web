import PageTitle from '../ui/PageTitle';
import SectionTitle from '../ui/SectionTitle';
import PageContainer from '../ui/PageContainer';
import { CustomSpinner } from '../ui/CustomSpinner';
import SvgIcon from '../ui/SvgIcon';
import { usePointMallOrderHisotryDetail } from '../features/pointMallOrderHistory/useOrderPointMallHisotryDetail';
import PointMallOrderHistoryDetailCard from '../features/pointMallOrderHistory/PointMallOrderHistoryDetailCard';
import { Button } from '@material-tailwind/react';
import ProductReceiptGuideCard from '../features/payment/ProductReceiptGuideCard';
import { useRemovePointMallOrder } from '../features/pointMallOrderHistory/useRemovePointMallOrder';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import OrderRemoveModal from '../features/pointMallOrderHistory/OrderRemoveModal';

export default function PointMallOrderDetailPage() {
    const navigate = useNavigate();
    const { orderHistoryDetail, isLoading } = usePointMallOrderHisotryDetail();
    const { removePointMallOrder } = useRemovePointMallOrder();
    const [openModal, setOpenModal] = useState(false);

    if (isLoading) {
        return <CustomSpinner />;
    }

    if (!orderHistoryDetail) return;

    const { orderIdx, status } = orderHistoryDetail;

    const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpenModal(true);
    };

    const handleCancelOrder = () => {
        removePointMallOrder(orderIdx, {
            onSuccess: () => {
                navigate('/point/point-mall-orders');
            },
        });
    };

    return (
        <>
            <PageTitle title="POINT SHOP ORDER DETAILS" />
            {orderHistoryDetail && (
                <PageContainer>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <SvgIcon className="h-5" fileName="clipboard-check" />
                            <SectionTitle title="ORDER DETAILS" />
                        </div>
                        <img src={orderHistoryDetail.imageUrl} alt="order product" />
                        <PointMallOrderHistoryDetailCard orderHistoryDetail={orderHistoryDetail} />
                        <ProductReceiptGuideCard />
                        {status === 'REQUESTED' && (
                            <section className="p-5 fixed bottom-0 left-0 right-0 bg-white z-50 max-w-[512px] mx-auto">
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    className="border-gray-300"
                                    onClick={handleOpenModal}
                                >
                                    <span className="text-red-500">Cancel</span>
                                </Button>
                            </section>
                        )}
                    </div>
                    <OrderRemoveModal
                        open={openModal}
                        onCancel={() => setOpenModal(false)}
                        onConfirm={handleCancelOrder}
                    />
                </PageContainer>
            )}
        </>
    );
}
