import PageContainer from '../ui/PageContainer';
import SelectedLinesInPaymentPage from '../features/payment/SelectedLinesInPaymentPage';
import Price from '../features/payment/Price';
import PaymentMethod from '../features/payment/PaymentMethod';
import PageTitle from '../ui/PageTitle';
import { useLocation } from 'react-router-dom';

export default function PaymentPage() {
    const location = useLocation();
    let lines = location.state || {};

    return (
        <>
            <PageTitle title="PAYMENT" backTo="/happy545-lottery/buy"></PageTitle>
            <PageContainer className="flex flex-col gap-3">
                <SelectedLinesInPaymentPage lines={lines}></SelectedLinesInPaymentPage>
                <Price lines={lines}></Price>
                <PaymentMethod lines={lines}></PaymentMethod>
            </PageContainer>
        </>
    );
}
