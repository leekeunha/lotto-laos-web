import { InquiryService } from '../../services/InquiryService';
import InquiryClient from '../../httpClient/InquiryClient';
import { useMutation } from '@tanstack/react-query';
import { AddInquiryApiRequest } from '../../services/types';

export default function useAddInquiry() {
    const inquiryClient = new InquiryClient();
    const inquiryService = new InquiryService(inquiryClient);

    const { mutate: addInquiry } = useMutation({
        mutationFn: (requestData: AddInquiryApiRequest) => {
            return inquiryService.addInquiry(requestData);
        },
    });

    return { addInquiry };
}
