import { FormProvider, useForm } from 'react-hook-form';
import PickNumbers from '../features/play/PickNumbers';
import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import { PickNumbersFormValues } from '../features/play/types';
import LottoLaosGlobalBanner from '../ui/LottoLaosGlobalBanner';

export default function BuyPage() {
    const methods = useForm<PickNumbersFormValues>({
        defaultValues: { count: 5, lines: [] },
    });

    const { handleSubmit } = methods;

    //TODO:Submit이 잘못됨. 임시패널에서 서브밋이 호출되면 안됨. 리팩토링 하기
    const onSubmit = (data: PickNumbersFormValues) => {
        const lottoLine = data;

        console.log({ lottoLine });
    };

    return (
        <>
            <PageTitle title="PICK NUMBERS" showBackButton={false} showMoveHomeButton={true} />
            <LottoLaosGlobalBanner></LottoLaosGlobalBanner>
            <PageContainer>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-4"></div>
                        <PickNumbers />
                    </form>
                </FormProvider>
            </PageContainer>
        </>
    );
}
