import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import PointClient from '../../httpClient/PointClient';
import { PointService } from '../../services/PointService';

export function usePointDetail() {
    const { id } = useParams();
    const numericId = id || '';
    
    const pointClient = new PointClient();
    const pointService = new PointService(pointClient);
    
    const { data: pointDetail,isLoading } = useQuery({
        queryKey: ['pointDetail', numericId],
        queryFn: () => pointService.getPointDetail(Number(numericId)),
    });

    return { pointDetail,isLoading };
}
