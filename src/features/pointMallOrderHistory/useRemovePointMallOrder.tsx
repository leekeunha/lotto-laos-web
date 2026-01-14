import { useMutation } from '@tanstack/react-query';
import PointMallOrderHistoryClient from '../../httpClient/PointMallOrderHistoryClient';
import { PointMallOrderHistoryService } from '../../services/PointMallOrderHistoryService';

export function useRemovePointMallOrder() {
    const pointMallOrderHistoryClient = new PointMallOrderHistoryClient();
    const pointMallOrderHistoryService = new PointMallOrderHistoryService(
        pointMallOrderHistoryClient,
    );

    const { mutate: removePointMallOrder, isPending } = useMutation({
        mutationFn: (orderIdx: number) => {
            return pointMallOrderHistoryService.removePointMallOrder(orderIdx);
        },
    });

    return { removePointMallOrder, isPending };
}
