import { useMutation, useQueryClient } from '@tanstack/react-query';
import BankClient from '../../httpClient/MyBankClient';
import { BankService } from '../../services/BankService';
import { ActivateBankApiRequest } from '../../services/types';

export default function useActivateBank() {
    const myBankClient = new BankClient();
    const myBankService = new BankService(myBankClient);
    const queryClient = useQueryClient();

    const { mutate: activateBank, isPending } = useMutation({
        mutationFn: (requestData: ActivateBankApiRequest) => {
            return myBankService.activateBank(requestData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['myBanks'],
            });
        },
    });

    return { activateBank, isPending };
}
