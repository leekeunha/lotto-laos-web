import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PageContainer from '../ui/PageContainer';
import PageTitle from '../ui/PageTitle';
import { Button } from '@material-tailwind/react';
import CustomTextArea from '../ui/CustomTextArea';
import QuickTips from '../features/inquiry/QuickTips';
import useAddInquiry from '../features/inquiry/useAddInquiry';
import { useNavigate } from 'react-router-dom';
import { NewInquirySchema, newInquirySchema } from '../schema/newInquirySchema';
import RHFInput from '../ui/RHFInput';
import { RHFSelect } from '../ui/RHFSelect';

export default function NewInquiryPage() {
    const methods = useForm<NewInquirySchema>({
        defaultValues: {
            category: '',
            title: '',
            content: '',
        },
        resolver: zodResolver(newInquirySchema),
    });
    const { addInquiry } = useAddInquiry();
    const navigate = useNavigate();

    const onSubmit = async (data: NewInquirySchema) => {
        addInquiry(data, {
            onSuccess: () => {
                navigate('/my-account/inquiries');
            },
        });
    };

    return (
        <>
            <PageTitle title="WRITE INQUIRY" />
            <PageContainer>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-2">
                        <RHFSelect
                            name={'category'}
                            label={'Category'}
                            options={[
                                { value: 'I01', label: '계정' },
                                { value: 'I02', label: '티켓' },
                                { value: 'I03', label: '포인트' },
                                { value: 'I04', label: '기타' },
                            ]}
                        ></RHFSelect>
                        <RHFInput name={'title'} label={'Title'}></RHFInput>
                        <CustomTextArea name={'content'} label={'Content'}></CustomTextArea>
                        <div className="flex gap-2 justify-end">
                            <Button color="red" type="submit" variant="text">
                                Back
                            </Button>
                            <Button color="red" type="submit">
                                Submit
                            </Button>
                        </div>
                    </form>
                </FormProvider>
                <QuickTips className="mt-4"></QuickTips>
            </PageContainer>
        </>
    );
}
