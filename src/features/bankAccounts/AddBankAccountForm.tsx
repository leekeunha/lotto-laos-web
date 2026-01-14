import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import useAddBank from './useAddBank';
import { CreateBankSchema, createBankSchema } from '../../schema/createBankSchema';
import { bankListItems } from '../../global/listItems';
import { useMoveBack } from '../../hooks/useMoveBack';
import RHFInput from '../../ui/RHFInput';
import { RHFSelect } from '../../ui/RHFSelect';

export default function AddBankAccountForm() {
    const methods = useForm<CreateBankSchema>({
        defaultValues: {
            bankName: '',
            holderName: '',
            accountNumber: '',
        },
        resolver: zodResolver(createBankSchema),
    });
    const { addBank } = useAddBank();
    const navigate = useNavigate();
    const moveBack = useMoveBack();

    const onSubmit = async (data: CreateBankSchema) => {
        addBank(data, {
            onSuccess: () => {
                navigate('/my-account/bank-accounts');
            },
        });
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-2">
                <RHFSelect name={'bankName'} label={'Bank'} options={bankListItems}></RHFSelect>
                <RHFInput
                    type="number"
                    name={'accountNumber'}
                    label={'Bank Account Number'}
                ></RHFInput>
                <RHFInput name={'holderName'} label={'Bank Account Holder Name'}></RHFInput>
                <div className="flex gap-2 justify-end">
                    {/* 아래 버튼 수정. BackButton으로 커버 할 수 있도록 */}
                    <Button color="red" variant="text" onClick={moveBack}>
                        Back
                    </Button>
                    <Button color="red" type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
}
