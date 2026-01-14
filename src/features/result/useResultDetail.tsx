import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import i18n from '../../../translation/i18n';
import ResultClient from '../../httpClient/ResultClient';
import { ResultService } from '../../services/ResultService';

export function useResultDetail() {
    const { id } = useParams();

    const resultClient = new ResultClient();
    const resultService = new ResultService(resultClient);

    if (id) {
        const { data: resultDetail, isLoading } = useQuery({
            queryKey: ['resultDetail', i18n.language, id],
            queryFn: () => resultService.getResultDetail(id),
        });
        return { resultDetail, isLoading };
    } else {
        return {};
    }
}
