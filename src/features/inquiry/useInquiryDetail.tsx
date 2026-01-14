import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { InquiryService } from '../../services/InquiryService';
import InquiryClient from '../../httpClient/InquiryClient';

export function useInquiryDetail() {
    const { id } = useParams();

    if (!id) {
        throw new Error('Inquiry ID is required');
    }

    const inquiryClient = new InquiryClient();
    const inquiryService = new InquiryService(inquiryClient);

    const { data: inquiryDetail } = useQuery({
        queryKey: ['inquiryDetail', id],
        queryFn: () => inquiryService.getInquiryDetail(id),
    });

    return { inquiryDetail };
}
