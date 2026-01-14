import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import i18n from '../../../translation/i18n';
import OrderHistoryClient from '../../httpClient/OrderHistoryClient';
import { OrderHistoryService } from '../../services/OrderHistoryService';

export function useOrderHisotryDetail() {
    const { id } = useParams();

    if (!id) {
        throw new Error('Inquiry ID is required');
    }

    const orderHistoryClient = new OrderHistoryClient();
    const orderHistoryService = new OrderHistoryService(orderHistoryClient);

    const { data: orderHistoryDetail, isLoading } = useQuery({
        queryKey: ['orderHistoryDetail', i18n.language, id],
        queryFn: () => orderHistoryService.getOrderHistoryDetail(id),
    });
    return { orderHistoryDetail, isLoading };
}
