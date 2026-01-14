import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { Inquiry } from '../../models/Inquiry';
import { DESC, PAGE_SIZE } from '../../../constants/global';
import { InquiryService } from '../../services/InquiryService';
import InquiryClient from '../../httpClient/InquiryClient';

export default function useInfiniteInquiries() {
    const inquiryClient = new InquiryClient();
    const inquiryService = new InquiryService(inquiryClient);

    const [searchParams] = useSearchParams();
    const sortOrder = searchParams.get('sortOrder') || DESC;

    return useInfiniteQuery({
        queryKey: ['inquiries', PAGE_SIZE, sortOrder],
        queryFn: async ({ pageParam }): Promise<Inquiry[]> =>
            inquiryService.getInquiries(PAGE_SIZE, pageParam, sortOrder),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
    });
}
