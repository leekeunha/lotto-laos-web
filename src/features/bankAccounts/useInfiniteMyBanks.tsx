import { useInfiniteQuery } from '@tanstack/react-query';
import { PAGE_SIZE } from '../../../constants/global';
import BankClient from '../../httpClient/MyBankClient';
import { BankService } from '../../services/BankService';
import { MyBank } from '../../models/MyBank';

export default function useInfiniteMyBanks() {
    const myBankClient = new BankClient();
    const myBankService = new BankService(myBankClient);

    return useInfiniteQuery({
        queryKey: ['myBanks', PAGE_SIZE],
        queryFn: async ({ pageParam }): Promise<MyBank[]> =>
            myBankService.getMyBanks(PAGE_SIZE, pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
    });
}
