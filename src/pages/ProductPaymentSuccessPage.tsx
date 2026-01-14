import { Button, Typography } from '@material-tailwind/react';
import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';
import { useLocation, useNavigate } from 'react-router-dom';
import PaymentCompleteInfoCard from '../features/payment/PaymentCompleteInfoCard';
import ProductReceiptGuideCard from '../features/payment/ProductReceiptGuideCard';

export default function ProductPaymentSuccessPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const paymentInfo = location.state || {};

    return (
        <>
            <PageTitle title="PAYMENT COMPLETE"></PageTitle>
            <PageContainer>
                <div className="flex flex-col gap-3">
                    <Typography variant="h3" className="font-bold">
                        Payment Successful
                    </Typography>
                    {paymentInfo && <PaymentCompleteInfoCard paymentInfo={paymentInfo} />}
                    <ProductReceiptGuideCard className="mt-5" />
                    <section className="p-5 fixed bottom-0 left-0 right-0 bg-white z-50 max-w-[512px] mx-auto flex justify-between space-x-4">
                        <Button
                            fullWidth={false}
                            color="white"
                            className="text-red-500 border border-red-500 w-1/2"
                            onClick={() => {
                                navigate('/point/point-mall-orders');
                            }}
                        >
                            Order list
                        </Button>
                        <Button
                            fullWidth={false}
                            color="red"
                            className="w-1/2"
                            onClick={() => {
                                navigate('/point/point-mall');
                            }}
                        >
                            Buy more
                        </Button>
                    </section>
                </div>
            </PageContainer>
        </>
    );
}
