import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import PrizeClient from '../../httpClient/PrizeClient.ts';
import { PrizeService } from '../../services/PrizeService.ts';

export function usePrizeDetail() {
    const { id } = useParams();

    const prizeClient = new PrizeClient();
    const prizeService = new PrizeService(prizeClient);

    const prizeDetailQuery = useQuery({
        queryKey: ['prizeDetail', id],
        queryFn: () => prizeService.getPrizeDetail(Number(id)),
    });

    return { prizeDetailQuery };
}
