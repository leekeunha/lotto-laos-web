import PageContainer from '../ui/PageContainer';
import { useLocation, useNavigate } from 'react-router-dom';
import SelectedLinesInPaymentPage from '../features/payment/SelectedLinesInPaymentPage';
import TotalPriceCard from '../ui/TotalPriceCard';
import { Button, Typography } from '@material-tailwind/react';

export default function PaymentFailurePage() {
    const location = useLocation();
    const lines = location.state || {};

    const navigate = useNavigate();

    const goPaymentPage = () => {
        navigate('/buy/payment', { state: lines });
    };

    return (
        <PageContainer className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 p-3">
                <div className="flex justify-center">
                    <Typography className="" color="black" variant="h6">
                        Payment
                    </Typography>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            src={`/icons/exclamation-mark-circle.svg`}
                            className="h-8"
                            alt="exclamation-mark-circle.svg"
                        />
                        <Typography className="ml-1" color="black" variant="h6">
                            Payment failed
                        </Typography>
                    </div>
                </div>
                <Typography variant="lead" className="text-sm text-gray-600">
                    Unfortunately, it seems that your payment didn’t go through. Please double-check
                    your payment details and try again.
                </Typography>
            </div>
            <SelectedLinesInPaymentPage lines={lines}></SelectedLinesInPaymentPage>
            <TotalPriceCard numberOfLine={lines.length}></TotalPriceCard>

            <div className="mt-4">
                <Button fullWidth color="red" type="submit" onClick={goPaymentPage}>
                    Payment Retry
                </Button>
            </div>
        </PageContainer>
    );
}
