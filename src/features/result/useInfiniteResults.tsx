import { useInfiniteQuery } from '@tanstack/react-query';
import { ResultService } from '../../services/ResultService';
import ResultClient from '../../httpClient/ResultClient';
import { Result } from '../../models/Result';
import { useSearchParams } from 'react-router-dom';
import { DESC, PAGE_SIZE } from '../../../constants/global';

export default function useInfiniteResults() {
    const resultClient = new ResultClient();
    const resultService = new ResultService(resultClient);
    const [searchParams] = useSearchParams();
    const sortOrder = searchParams.get('sortOrder') || DESC;

    return useInfiniteQuery({
        queryKey: ['results', PAGE_SIZE, sortOrder],
        queryFn: async ({ pageParam }): Promise<Result[]> =>
            resultService.getResult(PAGE_SIZE, pageParam, 1, sortOrder),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
    });
}
