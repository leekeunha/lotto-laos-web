import { useInfiniteQuery } from '@tanstack/react-query';
import FaqClient from '../../httpClient/FaqClient';
import { FaqService } from '../../services/FaqService';
import { useSearchParams } from 'react-router-dom';
import i18n from '../../../translation/i18n';
import { Faq } from '../../models/Faq';
import { PAGE_SIZE } from '../../../constants/global';

export default function useInfiniteFaqs() {
    const faqClient = new FaqClient();
    const faqService = new FaqService(faqClient);
    const [searchParams] = useSearchParams();
    const q = searchParams.get('q') || '';

    const categoryValue = searchParams.get('category') || '';

    const category: string | undefined =
        !categoryValue || categoryValue === 'all' ? undefined : categoryValue;

    return useInfiniteQuery({
        queryKey: ['faqs', PAGE_SIZE, q, i18n.language, category],
        queryFn: async ({ pageParam }): Promise<Faq[]> =>
            faqService.getFaqs(PAGE_SIZE, pageParam, q, i18n.language, category),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
    });
}
