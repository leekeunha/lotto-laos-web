import { FormProvider, useForm } from 'react-hook-form';
import { EditBankSchema, editBankSchema } from '../../schema/editBankSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import useBankDetail from './useBankDetail';
import { CustomSpinner } from '../../ui/CustomSpinner';
import useEditBank from './useEditBank';
import { useEffect } from 'react';
import { BankDetail } from '../../models/BankDetail';
import { bankListItems } from '../../global/listItems';
import { RHFSelect } from '../../ui/RHFSelect';
import RHFInput from '../../ui/RHFInput';

export default function EditBankAccountForm() {
    const { id } = useParams();
    const { bankDetail, isPending } = useBankDetail();

    const defaultValues = {
        memberBankIdx: '',
        bankName: '',
        accountNumber: '',
        holderName: '',
    };

    const methods = useForm<EditBankSchema>({
        defaultValues,
        resolver: zodResolver(editBankSchema),
    });

    useEffect(() => {
        if (bankDetail) {
            setFormValuesAfterServerData(bankDetail);
        }
    }, [bankDetail]);

    const { editBank } = useEditBank();
    const navigate = useNavigate();

    const onSubmit = async (data: EditBankSchema) => {
        editBank(data, {
            onSuccess: () => {
                navigate('/my-account/bank-accounts');
            },
        });
    };

    if (isPending) {
        return <CustomSpinner />;
    }

    function setFormValuesAfterServerData(bankDetail: BankDetail) {
        methods.reset({
            memberBankIdx: id,
            bankName: bankDetail.bankName,
            accountNumber: bankDetail.accountNumber,
            holderName: bankDetail.holderName,
        });
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-2">
                <RHFSelect name={'bankName'} label={'Bank'} options={bankListItems} />
                <RHFInput type="number" name={'accountNumber'} label={'Bank Account Number'} />
                <RHFInput name={'holderName'} label={'Bank Account Holder Name'} />
                <div className="flex gap-2 justify-end">
                    <Button
                        color="red"
                        type="button"
                        onClick={() => navigate('/my-account/bank-accounts')}
                        variant="text"
                    >
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
