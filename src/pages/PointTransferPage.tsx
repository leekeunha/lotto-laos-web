import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';
import TransferFromCard from '../features/point/TransferFromCard';
import TransferToCard from '../features/point/TransferToCard';
import CircleArrowDown from '../ui/CircleArrowDown';
import { FormProvider, useForm } from 'react-hook-form';
import { PointTransferFormData } from './types';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import usePoint from '../features/point/usePoint';

export default function PointTransferPage() {
    const navigate = useNavigate();
    const methods = useForm<PointTransferFormData>({
        defaultValues: {
            pointType: '',
            points: '',
            toMemberId: '',
        },
    });

    const { handleSubmit, setError } = methods;
    const { userInfoByPhoneMutation } = usePoint();

    const onSubmit = (formData: PointTransferFormData) => {
        userInfoByPhoneMutation.mutate(formData.toMemberId, {
            onSuccess: (userInfo) => {
                navigate('confirmation', {
                    state: {
                        pointType: formData.pointType,
                        points: formData.points,
                        toMemberId: formData.toMemberId,
                        userInfo,
                    },
                });
            },
            onError: (error) => {
                const errorMessage =
                    (error as any)?.response?.data?.errorMessage ||
                    'There is no user information available.';

                setError('toMemberId', {
                    type: 'manual',
                    message: errorMessage,
                });
            },
        });
    };

    return (
        <>
            <PageContainer className="flex flex-col gap-4">
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <PageTitle title="POINT TRANSFER" />
                        <TransferFromCard />
                        <CircleArrowDown />
                        <TransferToCard />
                        <section className="p-5 fixed bottom-0 left-0 right-0 bg-white z-50 max-w-[512px] mx-auto">
                            <Button fullWidth color="red" type="submit">
                                Next
                            </Button>
                        </section>
                    </form>
                </FormProvider>
            </PageContainer>
        </>
    );
}
