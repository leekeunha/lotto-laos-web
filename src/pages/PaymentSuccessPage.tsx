import { useLocation } from 'react-router-dom';
import PageContainer from '../ui/PageContainer';
import PurchaseReceiptCard from '../features/payment/PurchaseReceiptCard';
import SelectedLinesInPaymentPage from '../features/payment/SelectedLinesInPaymentPage';
import usePaymentSuccess from '../features/payment/usePaymentSuccess';
import ViewTicketButton from '../features/happy545Lottery/ViewTicketButton';
import { Typography } from '@material-tailwind/react';

export default function PaymentSuccessPage() {
    const location = useLocation();

    const { ticketIdx, lines } = location.state || {};

    const {
        paymentReceiptQuery: { data: paymentReceipt },
    } = usePaymentSuccess(ticketIdx);

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
                        <Typography className="ml-1" color="black" variant="h6">
                            Payment Successful
                        </Typography>
                    </div>
                </div>
                <Typography variant="lead" className="text-sm text-gray-600">
                    Your payment has been successfully completed. You can check the issued ticket
                    immediately.
                </Typography>
            </div>
            {paymentReceipt && (
                <>
                    <PurchaseReceiptCard paymentReceipt={paymentReceipt} />
                    <SelectedLinesInPaymentPage lines={lines} />
                    <ViewTicketButton ticketIdx={ticketIdx} />
                </>
            )}
        </PageContainer>
    );
}
