import { useMutation } from '@tanstack/react-query';
import ReferralClient from '../../httpClient/ReferralClient';
import { ReferralService } from '../../services/ReferralService';

export default function useReferralVerification() {
    const referralClient = new ReferralClient();
    const referralService = new ReferralService(referralClient);

    const { mutate: checkReferralCodeExistence, isPending } = useMutation({
        mutationFn: (referralCode: string) => {
            return referralService.checkReferralCodeExistence(referralCode);
        },
    });

    return { checkReferralCodeExistence, isPending };
}
