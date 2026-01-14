import MyAccountPage from '../pages/MyAccountPage';
import LivePage from '../pages/LivePage';
import LotteryResultPage from '../pages/LotteryResultPage';
import PaymentPage from '../pages/PaymentPage';
import PaymentSuccessPage from '../pages/PaymentSuccessPage';
import PaymentFailurePage from '../pages/PaymentFailurePage';
import TicketPage from '../pages/TicketPage';
import TicketDetailPage from '../pages/TicketDetailPage';

import BuyPage from '../pages/BuyPage';
import GamePage from '../pages/GamePage';

import PrizesPage from '../pages/PrizesPage';
import OrderDetailPage from '../pages/OrderDetailPage';
import OrdersPage from '../pages/OrdersPage';
import PrizeDetailPage from '../pages/PrizeDetailPage';
import PointsPage from '../pages/PointsPage';
import PointTransferPage from '../pages/PointTransferPage';
import PointMallPage from '../pages/PointMallPage';
import PointMallDetailPage from '../pages/PointMallDetailPage';
import PointMallOrdersPage from '../pages/PointMallOrdersPage';
import PointMallOrderDetailPage from '../pages/PointMallOrderDetailPage';
import PointTransferConfirmationPage from '../pages/PointTransferConfirmationPage';
import PointTransferSuccessPage from '../pages/PointTransferSuccessPage';
import PointTransferFailurePage from '../pages/PointTransferFailurePage';
import PointsDetailPage from '../pages/PointsDetailPage';
import GoldDiggerPage from '../pages/GoldDiggerPage';
import MyProfilePage from '../pages/MyProfilePage';
import ReferralPage from '../pages/ReferralPage';
import BankAccountsPage from '../pages/BankAccountsPage';
import PointShopOrdersPage from '../pages/PointShopOrdersPage';
import InquiryPage from '../pages/InquiryPage';
import NewInquiryPage from '../pages/NewInquiryPage';
import InquiryDetailPage from '../pages/InquiryDetailPage';
import NewBankAccountPage from '../pages/NewBankAccountPage';
import EditBankAccountPage from '../pages/EditBankAccountPage';
import PersonalInfoEditPage from '../pages/PersonalInfoEditPage';
import ChangePasswordPage from '../pages/ChangePasswordPage';
import NewPasswordPage from '../pages/NewPasswordPage';
import MessagesPage from '../pages/MessagesPage';
import MessageDetailPage from '../pages/MessageDetailPage';
import ProductPaymentPage from '../pages/ProductPaymentPage';
import ProductPaymentSuccessPage from '../pages/ProductPaymentSuccessPage';
import ProductPaymentFailurePage from '../pages/ProductPaymentFailurePage';
import HappyBallPage from '../pages/HappyBallPage';
import HappyNumberPage from '../pages/HappyNumberPage';
import HappyLaddersPage from '../pages/HappyLaddersPage';

const protectedRoutes = [
    { path: 'happy545-lottery/buy', element: <BuyPage /> },
    { path: 'buy/payment', element: <PaymentPage /> },
    { path: 'buy/payment/success', element: <PaymentSuccessPage /> },
    { path: 'buy/payment/failure', element: <PaymentFailurePage /> },
    { path: 'game', element: <GamePage /> },
    { path: 'my-account', element: <MyAccountPage /> },

    //Messages
    { path: 'messages', element: <MessagesPage /> },
    { path: 'messages/:id', element: <MessageDetailPage /> },

    //Happy 5/45 Lottery
    { path: 'happy545-lottery/live', element: <LivePage /> },
    { path: 'happy545-lottery/result', element: <LotteryResultPage /> },
    { path: 'happy545-lottery/tickets', element: <TicketPage /> },
    { path: 'happy545-lottery/tickets/:id', element: <TicketDetailPage /> },
    { path: 'happy545-lottery/orders', element: <OrdersPage /> },
    { path: 'happy545-lottery/orders/:id', element: <OrderDetailPage /> },
    { path: 'happy545-lottery/prizes', element: <PrizesPage /> },
    { path: 'happy545-lottery/prizes/:id', element: <PrizeDetailPage /> },

    //Point
    { path: 'point/points', element: <PointsPage /> },
    { path: 'point/points/:id', element: <PointsDetailPage /> },
    { path: 'point/point-transfer', element: <PointTransferPage /> },
    { path: 'point/point-transfer/confirmation', element: <PointTransferConfirmationPage /> },
    {
        path: 'point/point-transfer/confirmation/success/:id',
        element: <PointTransferSuccessPage />,
    },
    {
        path: 'point/point-transfer/confirmation/failure/:pointType/:points/:toMemberId',
        element: <PointTransferFailurePage />,
    },

    { path: 'point/point-mall', element: <PointMallPage /> },
    { path: 'point/point-mall/:id', element: <PointMallDetailPage /> },
    { path: 'point/point-mall-orders', element: <PointMallOrdersPage /> },
    { path: 'point/point-mall-orders/:id', element: <PointMallOrderDetailPage /> },

    { path: 'point/product-payment', element: <ProductPaymentPage /> },
    { path: 'point/product-payment/success', element: <ProductPaymentSuccessPage /> },
    { path: 'point/product-payment/failure', element: <ProductPaymentFailurePage /> },

    //game
    { path: 'happy-point-game/gold-digger', element: <GoldDiggerPage /> },
    { path: 'happy-point-game/happy-ball', element: <HappyBallPage /> },
    { path: 'happy-point-game/happy-number', element: <HappyNumberPage /> },
    { path: 'happy-point-game/happy-ladders', element: <HappyLaddersPage /> },

    //my-account
    { path: 'my-account/my-profile', element: <MyProfilePage /> },

    { path: 'my-account/my-profile/personal-info-edit', element: <PersonalInfoEditPage /> },
    { path: 'my-account/my-profile/change-password', element: <ChangePasswordPage /> },
    { path: 'my-account/my-profile/new-password', element: <NewPasswordPage /> },

    { path: 'my-account/referral', element: <ReferralPage /> },
    { path: 'my-account/bank-accounts', element: <BankAccountsPage /> },
    { path: 'my-account/bank-accounts/new', element: <NewBankAccountPage /> },
    { path: 'my-account/bank-accounts/edit/:id', element: <EditBankAccountPage /> },
    { path: 'my-account/point-shop-orders', element: <PointShopOrdersPage /> },
    { path: 'my-account/inquiries', element: <InquiryPage /> },
    { path: 'my-account/inquiries/:id', element: <InquiryDetailPage /> },
    { path: 'my-account/inquiries/new', element: <NewInquiryPage /> },
];

export default protectedRoutes;
