import { Button, Typography } from '@material-tailwind/react';
import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';
import { useLocation, useNavigate } from 'react-router-dom';
import PaymentCompleteInfoCard from '../features/payment/PaymentCompleteInfoCard';

export default function ProductPaymentFailurePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const paymentInfo = location.state || {};

    return (
        <>
            <PageTitle title="PAYMENT COMPLETE"></PageTitle>
            <PageContainer>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                        <img
                            src={'/icons/exclamation-mark-circle.svg'}
                            className="w-8 h-8 text-3xl mb-1"
                            alt="exclamation-mark"
                        />
                        <Typography variant="h3" className="font-bold">
                            Payment Failed
                        </Typography>
                    </div>

                    {paymentInfo && (
                        <PaymentCompleteInfoCard paymentInfo={paymentInfo} success={false} />
                    )}
                    <section className="p-5 fixed bottom-0 left-0 right-0 bg-white z-50 max-w-[512px] mx-auto">
                        <Button
                            fullWidth={false}
                            color="red"
                            className="w-full"
                            onClick={() => {
                                navigate('/point/point-mall');
                            }}
                        >
                            View Other Products
                        </Button>
                    </section>
                </div>
            </PageContainer>
        </>
    );
}
