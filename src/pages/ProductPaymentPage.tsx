import { Button, Typography } from '@material-tailwind/react';
import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';
import { useLocation, useNavigate } from 'react-router-dom';
import PaymentInfoCard from '../features/payment/PaymentInfoCard';
import usePoint from '../features/point/usePoint';
import { CustomSpinner } from '../ui/CustomSpinner';
import MyPointCard from '../features/point/MyPointCard';
import ShortPointsWithExclamationIcon from '../ui/ShortPointsWithExclamationIcon';
import { useMoveBack } from '../hooks/useMoveBack';
import useBuyProduct from '../features/pointMall/useBuyProduct';
import { CustomError } from './types';
import { useForm } from 'react-hook-form';
import { GOLD } from '../../constants/global';

export default function ProductPaymentPage() {
    const navigate = useNavigate();
    const { setError } = useForm();
    const moveBack = useMoveBack();
    const location = useLocation();
    const { buyProduct } = useBuyProduct();
    const paymentInfo = location.state || {};
    const { productIdx, quantity, pointType, totalPrice } = paymentInfo;

    const {
        myPointsQuery: { isLoading, data: myPoints },
    } = usePoint();

    if (!myPoints) return; //TODO: myPoints가 undefined로 오지 않도록 수정해야함. 이 라인은 임시 처리임.

    const myPoint = pointType === GOLD ? myPoints.goldPoints : myPoints.silverPoints;

    const isEnough = myPoint > totalPrice;

    const handleBuyProduct = () => {
        const buyProductRequest = {
            productIdx,
            quantity,
        };
        buyProduct(buyProductRequest, {
            onSuccess: (data) => {
                if (data.OrderNumber) {
                    navigate('/point/product-payment/success', {
                        state: {
                            ...paymentInfo,
                            orderNumber: data.OrderNumber,
                            purchaseDate: data.PurchasedDate,
                        },
                    });
                } else {
                    navigate('/point/product-payment/failure', {
                        state: { ...paymentInfo, error: 'OrderNumber is missing' },
                    });
                }
            },
            onError: (error: Error) => {
                const customError = error as CustomError;
                const serverErrorMessage =
                    customError.response?.data?.errorMessage || 'Buy Product Error';
                setError('serverError', {
                    type: 'manual',
                    message: serverErrorMessage,
                });
            },
        });
    };

    if (isLoading) {
        return <CustomSpinner />;
    }

    return (
        <>
            <PageTitle title="PRODUCT PAYMENT"></PageTitle>
            <PageContainer>
                <div className="flex flex-col gap-3">
                    <Typography variant="h3" className="font-bold">
                        Summary
                    </Typography>
                    {paymentInfo && <PaymentInfoCard paymentInfo={paymentInfo} />}
                    {myPoint !== null && (
                        <MyPointCard point={myPoint} pointType={pointType} isEnough={isEnough} />
                    )}
                    {!isEnough && <ShortPointsWithExclamationIcon />}
                    <section className="p-5 fixed bottom-0 left-0 right-0 bg-white z-50 max-w-[512px] mx-auto flex justify-between space-x-4">
                        <Button
                            fullWidth={false}
                            color="white"
                            className="text-red-500 border border-red-500 w-1/2"
                            onClick={moveBack}
                        >
                            Back
                        </Button>
                        <Button
                            fullWidth={false}
                            color="red"
                            className="w-1/2"
                            disabled={!isEnough}
                            onClick={handleBuyProduct}
                        >
                            Buy
                        </Button>
                    </section>
                </div>
            </PageContainer>
        </>
    );
}
