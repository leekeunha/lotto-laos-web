import { useMutation, useQueryClient } from '@tanstack/react-query';
import BankClient from '../../httpClient/MyBankClient';
import { BankService } from '../../services/BankService';
import { EditBankApiRequest } from '../../services/types';

export default function useEditBank() {
    const myBankClient = new BankClient();
    const myBankService = new BankService(myBankClient);
    const queryClient = useQueryClient();

    const { mutate: editBank, isPending } = useMutation({
        mutationFn: (requestData: EditBankApiRequest) => {
            return myBankService.editBank(requestData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['myBanks'],
            });
        },
    });

    return { editBank, isPending };
}
