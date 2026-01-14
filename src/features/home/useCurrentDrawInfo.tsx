import { useQuery } from '@tanstack/react-query';
import HomeClient from '../../httpClient/HomeClient';
import { HomeService } from '../../services/HomeService';
import { CurrentDrawInfo } from '../../models/CurrentDrawInfo';

export default function useCurrentDrawInfo(gameIdx: number) {
    const homeClient = new HomeClient();
    const homeService = new HomeService(homeClient);

    const currentDrawInfoQuery = useQuery({
        queryKey: ['currentDrawInfo', gameIdx],
        queryFn: async (): Promise<CurrentDrawInfo | null> => {
            const result = homeService.getCurrentDrawInfo(gameIdx);

            return result;
        },
    });

    return { currentDrawInfoQuery };
}
