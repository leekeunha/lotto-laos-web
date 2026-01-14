import { useMutation } from '@tanstack/react-query';
import ReferralClient from '../../httpClient/ReferralClient';
import { ReferralService } from '../../services/ReferralService';
import { PostReferralCodeApiRequest } from '../../services/types';

export default function usePostReferralCode() {
    const referralClient = new ReferralClient();
    const referralService = new ReferralService(referralClient);

    const { mutate: postReferralCode, isPending } = useMutation({
        mutationFn: (requestData: PostReferralCodeApiRequest) => {
            return referralService.postReferralCode(requestData);
        },
        onSuccess: () => {},
        onError: (error: Error) => {
            console.error('에러 발생:', error);
        },
    });

    return { postReferralCode, isPending };
}
