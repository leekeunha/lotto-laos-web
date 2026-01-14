import { useMutation, useQueryClient } from '@tanstack/react-query';
import BankClient from '../../httpClient/MyBankClient';
import { BankService } from '../../services/BankService';
import { AddBankApiRequest } from '../../services/types';

export default function useAddBank() {
    const myBankClient = new BankClient();
    const myBankService = new BankService(myBankClient);
    const queryClient = useQueryClient();

    const { mutate: addBank, isPending } = useMutation({
        mutationFn: (requestData: AddBankApiRequest) => {
            return myBankService.addBank(requestData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['myBanks'],
            });
        },
    });

    return { addBank, isPending };
}
