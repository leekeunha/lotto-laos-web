import { useMutation, useQueryClient } from '@tanstack/react-query';
import BankClient from '../../httpClient/MyBankClient';
import { BankService } from '../../services/BankService';
import { RemoveBankApiRequest } from '../../services/types';

export default function useRemoveBank() {
    const myBankClient = new BankClient();
    const myBankService = new BankService(myBankClient);
    const queryClient = useQueryClient();

    const { mutate: removeBank, isPending } = useMutation({
        mutationFn: (requestData: RemoveBankApiRequest) => {
            return myBankService.removeBank(requestData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['myBanks'],
            });
        },
    });

    return { removeBank, isPending };
}
