import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import i18n from '../../../translation/i18n';
import PointMallOrderHistoryClient from '../../httpClient/PointMallOrderHistoryClient';
import { PointMallOrderHistoryService } from '../../services/PointMallOrderHistoryService';

export function usePointMallOrderHisotryDetail() {
    const { id } = useParams();

    if (!id) {
        throw new Error('Inquiry ID is required');
    }

    const pointMallOrderHistoryClient = new PointMallOrderHistoryClient();
    const pointMallOrderHistoryService = new PointMallOrderHistoryService(
        pointMallOrderHistoryClient,
    );

    const { data: orderHistoryDetail, isLoading } = useQuery({
        queryKey: ['pointMallOrderHistoryDetail', i18n.language, id],
        queryFn: () => pointMallOrderHistoryService.getPointMallOrderHistoryDetail(Number(id)),
    });
    return { orderHistoryDetail, isLoading };
}
