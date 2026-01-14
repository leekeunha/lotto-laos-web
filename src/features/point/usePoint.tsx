import { useMutation, useQuery } from '@tanstack/react-query';
import PointClient from '../../httpClient/PointClient';
import { PointService } from '../../services/PointService';
import { TransferApiRequest } from '../../services/types';

export default function usePoint() {
    const pointClient = new PointClient();
    const pointService = new PointService(pointClient);

    const myPointsQuery = useQuery({
        queryKey: ['myPoints'],
        queryFn: () => pointService.getMyPoints(),
    });

    const userInfoByPhoneMutation = useMutation({
        mutationFn: (memberId: string) => {
            return pointService.getUserInfoByPhone(memberId);
        },
    });

    const { mutate: transfer } = useMutation({
        mutationFn: (requestData: TransferApiRequest): Promise<string> => {
            return pointService.transfer(requestData);
        },
        onSuccess: (result: string) => {
            console.log(result);
        },
    });

    return { myPointsQuery, transfer, userInfoByPhoneMutation };
}
