import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';
import CircleArrowDown from '../ui/CircleArrowDown';
import { Button } from '@material-tailwind/react';
import TransferConfimationFromCard from '../features/point/TransferConfimationFromCard';
import TransferConfimationToCard from '../features/point/TransferConfimationToCard';
import SectionTitle from '../ui/SectionTitle';
import { useLocation, useNavigate } from 'react-router-dom';
import SvgIcon from '../ui/SvgIcon';
import usePoint from '../features/point/usePoint';

export default function PointTransferConfirmationPage() {
    const location = useLocation();
    const { pointType, points, toMemberId, userInfo } = location.state;

    const navigate = useNavigate();
    const { transfer } = usePoint();

    const handleTransfer = () => {
        transfer(
            { pointType, points, toMemberId },
            {
                onSuccess: (result) => {
                    navigate(`/point/point-transfer/confirmation/success/${result}`, {
                        replace: true,
                    });
                },
                onError: () => {
                    navigate(
                        `/point/point-transfer/confirmation/failure/${pointType}/${points}/${toMemberId}`,
                        {
                            replace: true,
                        },
                    );
                },
            },
        );
    };

    return (
        <PageContainer className="flex flex-col gap-4">
            <PageTitle title="POINT TRANSFER CONFIRMATION" />
            <SectionTitle title="Summary" />

            <TransferConfimationFromCard pointType={pointType} amount={Number(points)} />
            <CircleArrowDown />
            <TransferConfimationToCard
                toMemberId={toMemberId}
                pointType={pointType}
                points={points}
                userName={userInfo.fullName}
            />
            <section className="h-28 flex flex-col justify-center mx-auto my-auto gap-2">
                <SvgIcon className="mx-auto" fileName="exclamation-triangle"></SvgIcon>
                <p className="text-gray-500">Would you like to transfer points as above?</p>
            </section>

            <section className="p-5 fixed bottom-0 left-0 right-0 bg-white z-50 max-w-[512px] mx-auto">
                <div className="flex gap-2">
                    <Button
                        color="red"
                        variant="outlined"
                        fullWidth
                        className="capitalize"
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </Button>
                    <Button color="red" fullWidth className="capitalize" onClick={handleTransfer}>
                        Transfer
                    </Button>
                </div>
            </section>
        </PageContainer>
    );
}
