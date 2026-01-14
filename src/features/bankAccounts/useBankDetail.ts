import { useQuery } from '@tanstack/react-query';
import BankClient from '../../httpClient/MyBankClient';
import { BankService } from '../../services/BankService';
import { useParams } from 'react-router-dom';

export default function useBankDetail() {
    const bankClient = new BankClient();
    const bankService = new BankService(bankClient);

    const { id } = useParams();

    const { data: bankDetail, isPending } = useQuery({
        queryKey: ['bankDetail', id],
        queryFn: () => bankService.getBankDetail(id || ''),
    });

    return { bankDetail, isPending };
}
